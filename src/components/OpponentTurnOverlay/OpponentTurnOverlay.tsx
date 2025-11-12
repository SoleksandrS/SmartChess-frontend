import { motion } from 'framer-motion';

import styles from './OpponentTurnOverlay.module.scss';

interface IProps {
  opponentName?: string;
}

export function OpponentTurnOverlay({ opponentName }: IProps) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <div className={styles.message}>
        <div className={styles.spinner}></div>
        <p>
          Waiting for <strong>{opponentName || 'opponent'}</strong> to move...
        </p>
      </div>
    </motion.div>
  );
}
