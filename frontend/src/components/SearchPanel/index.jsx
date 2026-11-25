import { useState } from 'react';
import styles from '../../styles/Panel.module.css';

function SearchPanel({ isOpen, onClose }) {
  const [searchedWord, setSearchedWord] = useState('');

  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
        />
      )}

      <div
        className={`${styles.panel} ${
          isOpen ? styles.open : ''
        }`}
      >
        <p className={styles.title}>Search</p>

        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          value={searchedWord}
          onChange={(event) => setSearchedWord(event.target.value)}
        />

        <p className={styles.title}>Recent</p>

        {/* здесь будут все найденные */}
      </div>
    </>
  );
}

export default SearchPanel;