import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/icons/home.svg?react';
import HomeActiveIcon from '../../assets/icons/home-filled.svg?react';
import SearchIcon from '../../assets/icons/search.svg?react';
import SearchActiveIcon from '../../assets/icons/search-filled.svg?react';
import ExploreIcon from '../../assets/icons/explore.svg?react';
import ExploreActiveIcon from '../../assets/icons/explore-filled.svg?react';
import MessagesIcon from '../../assets/icons/messages.svg?react';
import MessagesActiveIcon from '../../assets/icons/messages-filled.svg?react';
import NotificationsIcon from '../../assets/icons/notifications.svg?react';
import NotificationsActiveIcon from '../../assets/icons/notifications-filled.svg?react';
import CreateIcon from '../../assets/icons/create.svg?react';
import ImageProfile from '../ImageProfile';
import defaultIcon from '../../assets/icons/default-icon.svg';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" />
        </NavLink>

        <NavLink to="/" end>
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {isActive ? (
                <HomeActiveIcon className={styles.sidebarIcon} />
              ) : (
                <HomeIcon className={styles.sidebarIcon} />
              )}
              <span className={isActive ? styles.activeTitle : styles.title}>
                Home
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/search">
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {isActive ? (
                <SearchActiveIcon className={styles.sidebarIcon} />
              ) : (
                <SearchIcon className={styles.sidebarIcon} />
              )}
              <span className={isActive ? styles.activeTitle : styles.title}>
                Search
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/explore">
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {isActive ? (
                <ExploreActiveIcon className={styles.sidebarIcon} />
              ) : (
                <ExploreIcon className={styles.sidebarIcon} />
              )}
              <span className={isActive ? styles.activeTitle : styles.title}>
                Explore
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/messages">
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {isActive ? (
                <MessagesActiveIcon className={styles.sidebarIcon} />
              ) : (
                <MessagesIcon className={styles.sidebarIcon} />
              )}
              <span className={isActive ? styles.activeTitle : styles.title}>
                Messages
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/notifications">
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {isActive ? (
                <NotificationsActiveIcon className={styles.sidebarIcon} />
              ) : (
                <NotificationsIcon className={styles.sidebarIcon} />
              )}
              <span className={isActive ? styles.activeTitle : styles.title}>
                Notifications
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/create">
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              <CreateIcon className={styles.sidebarIcon} />
              <span className={isActive ? styles.activeTitle : styles.title}>
                Create
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/profile">
          {({ isActive }) => (
            <div className={styles.sidebarProfile}>
              <ImageProfile
                // src={user?.avatar}      
                src={defaultIcon}
                className={styles.sidebarProfileIcon}
              />
              <span className={isActive ? styles.activeTitle : styles.title}>
                Profile
              </span>
            </div>
          )}
        </NavLink>
      </div>
      <span className={styles.line}></span>
    </div>
  );
}
export default Sidebar;

// NavLink автоматически добавляет класс active, когда текущий URL соответствует маршруту
