import { NavLink } from 'react-router-dom';
import styles from './ProfileHeader.module.css';

function ProfileHeader({ user, countPosts, isOwner = false }) {
  return (
    <div className="container">
      <div className={styles.profile}>
        <img src={user.avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.content}>
          <div className={styles.headers}>
            <p className={styles.username}>{user.username}</p>

            {isOwner ? (
              <NavLink to="/profile/edit" className={styles.editOrMessageBtn}>
                Edit profile
              </NavLink>
            ) : (
              <div>
                <button className={styles.followBtn}>Follow</button>
                <NavLink to="/messages" className={styles.editOrMessageBtn}>
                  Message
                </NavLink>
              </div>
            )}
          </div>

          <div className={styles.counts}>
            <p>
              <span className={styles.count}> {countPosts} </span>posts
            </p>
            <p>
              <span className={styles.count}> {user.followers.length} </span>followers
            </p>
            <p>
              <span className={styles.count}> {user.following.length} </span>following
            </p>
          </div>

          <div className={styles.description}>
            <p className={styles.bio}>{user.bio}</p>

            <a
              href={user.website}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
