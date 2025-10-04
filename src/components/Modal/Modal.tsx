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
  isOpen: boolean;
  onClose: () => void;
  className: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, className, children }: IModalProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles} className={className}>
      {children}
    </ReactModal>
  );
}
