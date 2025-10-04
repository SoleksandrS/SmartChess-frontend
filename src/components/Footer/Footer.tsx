import styles from './Footer.module.scss';

export function Footer() {
  const email = 'contact@smartchess.ai';

  return (
    <footer className={styles['footer']}>
      <p className={styles['copyright']}>
        © {new Date().getFullYear()} SmartChess. All rights reserved.
      </p>
      <a href={`mailto:${email}`} className={styles['contact-email']}>
        {email}
      </a>
    </footer>
  );
}
