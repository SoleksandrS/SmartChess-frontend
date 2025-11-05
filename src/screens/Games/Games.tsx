import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChessKnight, FaPlus, FaPlay, FaUsers } from 'react-icons/fa';
import { Button } from 'components/Button/Button';
import { MainLoader } from 'components/MainLoader/MainLoader';

import styles from './Games.module.scss';

export function Games() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'my' | 'join'>('my');
  const loading = false;

  const userGames: any[] = [];
  const joinableGames: any[] = [];

  const handleCreateGame = async () => {
    const newGame = { id: 1 };
    void navigate(`/game/${newGame.id}`);
  };

  const renderGamesList = (games: any[], isJoinable = false) => {
    if (loading) return <MainLoader />;

    if (games.length === 0) {
      return (
        <div className={styles['empty']}>
          <FaChessKnight className={styles['icon']} size={60} />
          <p>No games found.</p>
        </div>
      );
    }

    return (
      <div className={styles['games-list']}>
        {games.map((game) => (
          <div key={game.id} className={styles['game-card']}>
            <div className={styles['info']}>
              <h3 className={styles['opponent']}>
                {isJoinable
                  ? `Host: ${game.host.username}`
                  : game.opponent
                    ? `vs ${game.opponent.username}`
                    : 'vs AI'}
              </h3>
              <p className={styles['meta']}>
                {new Date(game.createdAt).toLocaleDateString()} • {game.movesCount} moves
              </p>
            </div>

            {isJoinable ? (
              <Button
                onClick={() => navigate(`/game/${game.id}`)}
                className={styles['join-button']}>
                <FaUsers /> Join Game
              </Button>
            ) : (
              <Button
                onClick={() => navigate(`/game/${game.id}`)}
                className={styles['play-button']}>
                <FaPlay /> Continue
              </Button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles['page']}>
      <div className={styles['header']}>
        <h1 className={styles['title']}>Games</h1>
        <Button onClick={() => void handleCreateGame()}>
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
          Joinable Games 🚧
        </button>
      </div>

      {activeTab === 'my' && renderGamesList(userGames)}
      {activeTab === 'join' && renderGamesList(joinableGames, true)}
    </div>
  );
}
