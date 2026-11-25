import { useState } from 'react';
import styles from './ImageUpload.module.css';

function ImageUpload({ onImageSelect }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Проверяем формат
    if (!file.type.startsWith('image/')) {
      setError('Please select an image');
      return;
    }

    // Проверяем размер (5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be smaller than 5 MB');
      return;
    }

    setError('');

    // Создаём preview
    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    // Передаём файл родителю
    onImageSelect(file);
  };

  const handleRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);
    onImageSelect(null);
  };

  return (
    <div className={styles.upload}>
      <label className={styles.label}>
        New photo
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          hidden
        />
      </label>

      {preview && (
        <div className={styles.preview}>
          <img src={preview} alt="Preview" />

          <button type="button" onClick={handleRemove}>
            Remove
          </button>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default ImageUpload;