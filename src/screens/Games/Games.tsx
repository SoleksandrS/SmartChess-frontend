import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import { ROUTES } from 'constants/routes';
import { createGameVsAIThunk, getMyGamesDataThunk } from 'store/modules/games/games.thunk';
import { EChessResult, EChessSide, type ISimpleGame } from 'models';
import { Button, NewGameModal } from 'components';

import { FaPlus } from 'react-icons/fa';

import styles from './Games.module.scss';

export function Games() {
  const userData = useSelector((state: TState) => state.auth.data);
  const loading = useSelector((state: TState) => state.games.loading);
  const games = useSelector((state: TState) => state.games.data) as ISimpleGame[];
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'my' | 'join'>('my');
  const [showModal, setShowModal] = useState(false);

  const joinableGames: ISimpleGame[] = [];

  const handleSelectGameType = (mode: 'ai' | 'player') => {
    if (!userData) return;

    if (mode === 'ai') {
      const callback = (id: string) => void navigate(`${ROUTES.GAMES}/${id}`);
      void dispatch(createGameVsAIThunk(userData.id, callback));
    }
  };

  useEffect(() => {
    if (activeTab === 'my') {
      void dispatch(getMyGamesDataThunk());
    } else {
      console.log('');
    }
  }, [dispatch, activeTab]);

  const renderGameRow = (game: ISimpleGame) => {
    const white = game.whitePlayer?.username ?? 'AI';
    const black = game.blackPlayer?.username ?? 'AI';
    const result =
      game.result === EChessResult.CHECKMATE && game.turn === EChessSide.WHITE
        ? 'White wins'
        : game.result === EChessResult.CHECKMATE && game.turn === EChessSide.BLACK
          ? 'Black wins'
          : game.result === EChessResult.DRAW
            ? 'Draw'
            : 'In progress';

    return (
      <div
        key={game.id}
        className={styles['game-row']}
        onClick={() => void navigate(`${ROUTES.GAMES}/${game.id}`)}>
        <div className={styles['players']}>
          <span className={styles['player']}>{white}</span>
          <span className={styles['vs']}>vs</span>
          <span className={styles['player']}>{black}</span>
        </div>
        <div className={styles['info']}>
          <span className={styles['moves']}>Moves: {game.moveNumber}</span>
          <span className={styles['turn']}>
            Turn: {game.turn === EChessSide.WHITE ? 'White' : 'Black'}
          </span>
        </div>
        <div className={styles['result']}>{result}</div>
        <div className={styles['date']}>{new Date(game.createdAt).toLocaleDateString()}</div>
      </div>
    );
  };

  const renderGamesList = (games: ISimpleGame[], placeholder: string) => {
    if (loading) return <p>Loading...</p>;
    if (!games || games.length === 0) return <p className={styles['empty']}>{placeholder}</p>;
    return <div className={styles['games-list']}>{games.map(renderGameRow)}</div>;
  };

  return (
    <div className={styles['page']}>
      <div className={styles['header']}>
        <h1 className={styles['title']}>Games</h1>
        <Button onClick={() => setShowModal(true)}>
          <FaPlus /> New Game
        </Button>
      </div>

      <div className={styles['tabs']}>
        <button
          className={`${styles['tab']} ${activeTab === 'my' ? styles['active'] : ''}`}
          onClick={() => setActiveTab('my')}>
          My Games
        </button>
        <button
          className={`${styles['tab']} ${activeTab === 'join' ? styles['active'] : ''}`}
          onClick={() => setActiveTab('join')}>
          Joinable Games
        </button>
      </div>

      {activeTab === 'my' && renderGamesList(games, 'No games yet. Create one!')}

      {activeTab === 'join' && (
        <div className={styles['joinable-section']}>
          <p className={styles['work-in-progress']}>🚧 Feature in progress...</p>
          {renderGamesList(joinableGames, 'No joinable games yet.')}
        </div>
      )}

      {showModal && (
        <NewGameModal onClose={() => setShowModal(false)} onSelect={handleSelectGameType} />
      )}
    </div>
  );
}
