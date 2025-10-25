import { useEffect } from 'react';
import ReactModal from 'react-modal';

const customStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: '1000'
  },
  content: {
    position: 'fixed',
    inset: '50% auto auto 50%',
    transform: 'translate(-50%, -50%)'
  }
};

interface IModalProps {
  onClose: () => void;
  className: string;
  children: React.ReactNode;
}

export function Modal({ onClose, className, children }: IModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <ReactModal isOpen onRequestClose={onClose} style={customStyles} className={className}>
      {children}
    </ReactModal>
  );
}
