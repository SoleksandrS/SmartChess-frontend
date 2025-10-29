import { useState, useRef, useEffect } from 'react';

import { FaUserCircle } from 'react-icons/fa';

import styles from './HeaderDropdownMenu.module.scss';

interface IHeaderDropdownMenuProps {
  username: string;
  onLogout: () => void;
}

export function HeaderDropdownMenu({ username, onLogout }: IHeaderDropdownMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const onLogoutHandler = () => {
    onLogout();
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles['user-menu']} ref={menuRef}>
      <div className={styles['user-data']} onClick={toggleMenu}>
        <div className={styles['profile-icon']}>
          <FaUserCircle size={28} />
        </div>
        <span className={styles['username']}>{username}</span>
      </div>

      {open && (
        <div className={styles['dropdown']}>
          <button className={styles['dropdown-item']} onClick={onLogoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
