import { NavLink } from 'react-router-dom';
import styles from './ProfilePosts.module.css';

function ProfilePosts({ posts }) {
  return (
    <div className="container">
      <div className={styles.posts}>
        {posts.map((post) => (
          <div className={styles.post}>
            <NavLink to="/profile/:id">
              <img src={post.image} alt="post-image" className={styles.post} />
            {/* <p>{post.title}</p>
          <p>{post.description}</p> */}
            </NavLink>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePosts;
