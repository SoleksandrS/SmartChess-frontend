import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Chess, Move, type Square } from 'chess.js';
import { Chessboard, type SquareHandlerArgs } from 'react-chessboard';

export interface ChessBoardRef {
  getBoardFen: () => string;
  updateBoard: (fen: string) => void;
}

interface IChessBoardProps {
  initFen?: string;
  boardOrientation?: 'white' | 'black';
  onMove: (move: Move, fen: string) => void;
}

const ChessBoard = forwardRef<ChessBoardRef, IChessBoardProps>(
  ({ initFen, boardOrientation = 'white', onMove }: IChessBoardProps, ref) => {
    const chessGameRef = useRef(new Chess(initFen));
    const chessGame = chessGameRef.current;

    const [position, setPosition] = useState(chessGame.fen());
    const [moveFrom, setMoveFrom] = useState('');
    const [optionSquares, setOptionSquares] = useState({});

    const checkIsMyTurn = () => {
      const playerColor = boardOrientation[0];
      return chessGame.turn() === playerColor;
    };

    const updatePosition = () => {
      setPosition(chessGame.fen());
    };

    const handlePlayerMove = (from: Square, to: Square) => {
      if (!checkIsMyTurn()) return;

      const fen = chessGame.fen();
      const move = chessGame.move({ from, to, promotion: 'q' });
      onMove(move, fen);
      updatePosition();
    };

    const getMoveOptions = (square: Square) => {
      const moves = chessGame.moves({ square, verbose: true });

      if (moves.length === 0) {
        setOptionSquares({});
        return false;
      }

      const newSquares: Record<string, React.CSSProperties> = {};

      for (const move of moves) {
        newSquares[move.to] = {
          background:
            chessGame.get(move.to) && chessGame.get(move.to)?.color !== chessGame.get(square)?.color
              ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
              : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
          borderRadius: '50%'
        };
      }

      newSquares[square] = { background: 'rgba(255, 255, 0, 0.4)' };

      setOptionSquares(newSquares);

      return true;
    };

    const onSquareClick = ({ square, piece }: SquareHandlerArgs) => {
      if (!checkIsMyTurn()) return;

      if (!moveFrom && piece) {
        const hasMoveOptions = getMoveOptions(square as Square);
        if (hasMoveOptions) setMoveFrom(square);
        return;
      }

      const moves = chessGame.moves({ square: moveFrom as Square, verbose: true });
      const foundMove = moves.find((m) => m.from === moveFrom && m.to === square);

      if (!foundMove) {
        const hasMoveOptions = getMoveOptions(square as Square);
        setMoveFrom(hasMoveOptions ? square : '');
        return;
      }

      try {
        handlePlayerMove(moveFrom as Square, square as Square);
        setMoveFrom('');
        setOptionSquares({});
      } catch {
        const hasMoveOptions = getMoveOptions(square as Square);
        if (hasMoveOptions) setMoveFrom(square);
        return;
      }
    };

    useImperativeHandle(ref, () => ({
      getBoardFen: () => chessGame.fen(),
      updateBoard: (fen: string) => {
        if (fen === chessGame.fen()) return;
        chessGame.load(fen);
        updatePosition();
      }
    }));

    const chessboardOptions = {
      boardStyle: { width: '480px' },
      squareStyles: optionSquares,
      position,
      boardOrientation,
      allowDragging: false,
      onSquareClick
    };

    return <Chessboard options={chessboardOptions} />;
  }
);

ChessBoard.displayName = 'ChessBoard';

export default ChessBoard;
