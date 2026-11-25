import styles from './Profile.module.css'
import {users, posts} from '../../mock.js'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfilePosts from '../../components/Profile/ProfilePosts'


function Profile(){

    const user = users[0];

    const userPosts = posts.filter(post => post.userId === user._id)

    return(
        <div className={styles.profile}>

        <ProfileHeader user={user} countPosts={userPosts.length}  /> 
        {/* isOwner={currentUser._id === user._id} */}

        <ProfilePosts posts={userPosts} />

        </div>
    )
}
export default Profile