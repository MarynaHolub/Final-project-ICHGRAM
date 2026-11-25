import { useState } from 'react';
// import { useSelector } from 'react-redux';
import ImageUpload from '../../components/ImageUpload';
import styles from './EditProfile.module.css';

function EditProfile() {
  //   const user = useSelector((state) => state.auth.user);
  // пока просто
  const user = {
    _id: 'user1',
    name: 'Maryna Holub',
    username: 'maryna_holub',
    email: 'maryna@example.com',
    password: 'password123',
    avatar: 'https://i.pravatar.cc/300?img=47',
    bio: 'Работаю над проектом 🚀 | Web Developer',
    website: 'https://github.com',
    followers: ['user2', 'user3', 'user4'],
    following: ['user2', 'user3'],
  };

  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');

  //   useEffect(() => {
  //     if (user) {
  //       setUsername(user.username || '');
  //       setWebsite(user.website || '');
  //       setBio(user.bio || '');
  //     }
  //   }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      username,
      website,
      bio,
      avatar,
    };

    console.log(updatedUser);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className={styles.editProfile}>
        <p className={styles.title}>Edit profile</p>

        <div className={styles.content}>
          <img
            src={avatar ? URL.createObjectURL(avatar) : user.avatar}
            alt="avatar"
            className={styles.iconProfile}
          />
          <div>
            <p className={styles.text}>{user.username}</p>
            <p className={styles.bio}>{user.bio}</p>
          </div>

          <div className={styles.photo}>
            <ImageUpload onImageSelect={setAvatar} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <p className={styles.text}>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />

          <p className={styles.text}>Website</p>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={`${styles.input} ${styles.inputColor}`}
          />

          <p className={styles.text}>About</p>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={150}
            rows={3}
            className={styles.input}
          />

          <button type="submit" className={styles.btn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
