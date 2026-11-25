import { useState } from 'react';
import ImageUpload from '../../components/ImageUpload';

function Create() {
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    // Здесь позже отправим image на Backend
    console.log(image);
  };

  return (
    <div>
      <h2>Create Post</h2>

      <ImageUpload onImageSelect={setImage} />

      <button onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
}

export default Create;