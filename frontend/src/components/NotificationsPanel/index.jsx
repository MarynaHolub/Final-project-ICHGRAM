import styles from '../../styles/Panel.module.css';

function NotificationsPanel({ isOpen, onClose }) {
  return (
    <div>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div
        className={`${styles.panel} ${isOpen ? styles.open : ''}`}
      >
        <p className={styles.title}>Notifications</p>

        <p className={styles.title}>New</p>

        {/* здесь будут все новости liked, commented, started */}
      </div>
    </div>
  );
}

export default NotificationsPanel;
