import { useState } from 'react';
import { Modal } from 'components';
import { sections, type SectionKey } from './ModalChessRules.models.tsx';

import styles from './ModalChessRules.module.scss';

interface IProps {
  onClose: () => void;
}

export function ModalChessRules({ onClose }: IProps) {
  const [activeSection, setActiveSection] = useState<SectionKey>('general');

  const currentSection = sections.find((s) => s.key === activeSection);

  return (
    <Modal onClose={onClose} className={styles['modal']}>
      <div className={styles['sidebar']}>
        {sections.map((s) => (
          <div
            key={s.key}
            className={`${styles['section-item']} ${activeSection === s.key ? styles['active'] : ''}`}
            onClick={() => setActiveSection(s.key)}>
            {s.title}
          </div>
        ))}
      </div>

      {currentSection && (
        <div className={styles['content']}>
          <div className={styles['header']}>
            {currentSection.icons}
            <h2>{currentSection.title}</h2>
          </div>
          <div className={styles['content-list']}>
            {currentSection.content.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}
