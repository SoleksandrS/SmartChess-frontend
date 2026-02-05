import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';
import type { Move } from 'chess.js';
import { getGameAnalysisDataThunk } from 'store/modules/game-analysis/game-analysis.thunk';
import { EChessResult, EChessSide, EGameStatus, type ICurrentUser, type IGame } from 'models';
import { ChessBoard, type ChessBoardRef } from 'components/ChessBoard/ChessBoard';
import { ChessSidebarData } from 'components/ChessSidebarData/ChessSidebarData';
import { ChessSidebarHistory } from 'components/ChessSidebarHistory/ChessSidebarHistory';
import { ModalChessResult } from 'components/ModalChessResult/ModalChessResult';
import { ModalGameAnalysis } from 'components/ModalGameAnalysis/ModalGameAnalysis';
import { OpponentTurnOverlay } from 'components/OpponentTurnOverlay/OpponentTurnOverlay';

import styles from './AdvancedChessBoard.module.scss';
import { clearGameAnalysisData } from 'store/modules/game-analysis/game-analysis.actions';

interface IProps {
  user: ICurrentUser;
  game: IGame;
  onMove: (move: Move, fen: string) => void;
}

export function AdvancedChessBoard({ user, game, onMove }: IProps) {
  const dispatch: AppDispatch = useDispatch();

  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.PLAYING);
  const [isResultOpened, setIsResultOpened] = useState(false);
  const [isAnalysisOpened, setIsAnalysisOpened] = useState(false);

  const wasResultOpenedRef = useRef(false);
  const boardRef = useRef<ChessBoardRef>(null);

  const updateGameStatus = (value: EGameStatus) => {
    setGameStatus(value);
    if (wasResultOpenedRef.current) return;

    setIsResultOpened(true);
    wasResultOpenedRef.current = true;
  };

  const onPreviewMove = (fen: string) => {
    boardRef.current?.updatePreview(fen);
  };

  const onAnalyzeGame = () => {
    void dispatch(clearGameAnalysisData());
    setIsAnalysisOpened(true);
    void dispatch(getGameAnalysisDataThunk(game.id));
  };

  const onCloseGameAnalysis = () => {
    void dispatch(clearGameAnalysisData());
    setIsAnalysisOpened(false);
  };

  const boardOrientation = useMemo(() => {
    if (game.blackPlayerId === user.id) return 'black';
    if (game.whitePlayerId === user.id) return 'white';
  }, [game.blackPlayerId, game.whitePlayerId, user.id]);

  const isMyTurn = useMemo(() => {
    if (!boardOrientation) return false;
    return (
      (game.turn === EChessSide.WHITE && boardOrientation === 'white') ||
      (game.turn === EChessSide.BLACK && boardOrientation === 'black')
    );
  }, [game.turn, boardOrientation]);

  useEffect(() => {
    if (!game.fen || !boardRef.current) return;
    boardRef.current.updateBoard(game.fen);
  }, [game]);

  useEffect(() => {
    if (!game.result || !game.turn || !user.id) return;
    if (!Object.values(EChessResult).includes(game.result)) return;
    if (game.result === EChessResult.DRAW) return updateGameStatus(EGameStatus.DRAW);
    if (game.turn === EChessSide.WHITE && game.whitePlayerId === user.id)
      return updateGameStatus(EGameStatus.WIN);
    if (game.turn === EChessSide.BLACK && game.blackPlayerId === user.id)
      return updateGameStatus(EGameStatus.WIN);
    return updateGameStatus(EGameStatus.LOSE);
  }, [game, user.id]);

  return (
    <>
      <div className={styles['chess-board']}>
        <ChessSidebarData
          whitePlayer={game?.whitePlayer?.username || 'AI'}
          blackPlayer={game?.blackPlayer?.username || 'AI'}
          currentTurn={game.turn}
          moveCount={game.moveNumber}
          status={gameStatus}
          isAnalysisAvailable={game.isAnalysisPrepared}
          onAnalyzeGame={onAnalyzeGame}
        />
        <div className={styles['board-wrapper']}>
          <ChessBoard
            ref={boardRef}
            initFen={game.fen}
            boardOrientation={boardOrientation}
            onMove={onMove}
          />
          {!isMyTurn && !game.result && (
            <OpponentTurnOverlay
              opponentName={
                game.turn === EChessSide.WHITE
                  ? game.whitePlayer?.username || 'AI'
                  : game.blackPlayer?.username || 'AI'
              }
            />
          )}
        </div>
        <ChessSidebarHistory moves={game.moves} onPreviewMove={onPreviewMove} />
      </div>

      {isResultOpened && (
        <ModalChessResult result={gameStatus} onClose={() => setIsResultOpened(false)} />
      )}
      {isAnalysisOpened && <ModalGameAnalysis onClose={onCloseGameAnalysis} />}
    </>
  );
}
