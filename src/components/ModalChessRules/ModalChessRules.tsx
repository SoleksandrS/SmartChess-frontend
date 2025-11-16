import { useState } from 'react';
import { Modal } from 'components';
import { sections, type SectionKey } from './ModalChessRules.models';

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
          <h2>{currentSection.title}</h2>
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
