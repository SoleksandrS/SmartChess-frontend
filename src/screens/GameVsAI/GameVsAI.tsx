import { useRef } from 'react';
import type { Move } from 'chess.js';
import ChessBoard, { type ChessBoardRef } from 'components/ChessBoard/ChessBoard';

import styles from './GameVsAI.module.scss';

export function GameVsAI() {
  const boardRef = useRef<ChessBoardRef>(null);

  const onMoveHandler = (move: Move, fen: string) => {
    console.log('move', move);
    console.log('fen', fen);
  };

  const onGameOverHandler = (status: string) => {
    console.log('status', status);
  };

  return (
    <div className={styles['page']}>
      <h1 className={styles['title']}>Play vs AI</h1>
      <ChessBoard ref={boardRef} onMove={onMoveHandler} onGameOver={onGameOverHandler} />
    </div>
  );
}
