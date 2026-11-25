import styles from './Sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
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
import { useState } from 'react';
import SearchPanel from '../SearchPanel';
import NotificationsPanel from '../NotificationsPanel';

function Sidebar() {
  const [activePanel, setActivePanel] = useState(null);

  const handleSearchClick = () => {
    setActivePanel((prev) => (prev === 'search' ? null : 'search'));
  };

  const handleNotificationsClick = () => {
    setActivePanel((prev) =>
      prev === 'notifications' ? null : 'notifications',
    );
  };

  const location = useLocation();

  console.log('Current URL:', location.pathname);
  console.log('Active panel:', activePanel);

  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" />
        </NavLink>

        <NavLink to="/home" end onClick={() => setActivePanel(null)}>
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {!activePanel && isActive ? (
                <HomeActiveIcon className={styles.sidebarIcon} />
              ) : (
                <HomeIcon className={styles.sidebarIcon} />
              )}
              <span
                className={
                  !activePanel && isActive ? styles.activeTitle : styles.title
                }
              >
                Home
              </span>
            </div>
          )}
        </NavLink>

        {/* <NavLink to="/search"> */}
        {/*  {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {isActive ? (
                <SearchActiveIcon className={styles.sidebarIcon} />
              ) : (
                <SearchIcon className={styles.sidebarIcon} />
              )}
              <button
                onClick={handleSearchClick}
                className={isActive ? styles.activeTitle : styles.title}
              >
                Search
              </button>
            </div>
          )}  */}
        {/* </NavLink> */}

        <div className={styles.sidebarContent} onClick={handleSearchClick}>
          {activePanel === 'search' ? (
            <SearchActiveIcon className={styles.sidebarIcon} />
          ) : (
            <SearchIcon className={styles.sidebarIcon} />
          )}

          <span
            className={
              activePanel === 'search' ? styles.activeTitle : styles.title
            }
          >
            Search
          </span>
        </div>

        <NavLink to="/explore" end onClick={() => setActivePanel(null)}>
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {!activePanel && isActive ? (
                <ExploreActiveIcon className={styles.sidebarIcon} />
              ) : (
                <ExploreIcon className={styles.sidebarIcon} />
              )}
              <span
                className={
                  !activePanel && isActive ? styles.activeTitle : styles.title
                }
              >
                Explore
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/messages" end onClick={() => setActivePanel(null)}>
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              {!activePanel && isActive ? (
                <MessagesActiveIcon className={styles.sidebarIcon} />
              ) : (
                <MessagesIcon className={styles.sidebarIcon} />
              )}
              <span
                className={
                  !activePanel && isActive ? styles.activeTitle : styles.title
                }
              >
                Messages
              </span>
            </div>
          )}
        </NavLink>

        {/* <NavLink to="/notifications">
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
        </NavLink> */}

        <div
          className={styles.sidebarContent}
          onClick={handleNotificationsClick}
        >
          {activePanel === 'notifications' ? (
            <NotificationsActiveIcon className={styles.sidebarIcon} />
          ) : (
            <NotificationsIcon className={styles.sidebarIcon} />
          )}

          <span
            className={
              activePanel === 'notifications'
                ? styles.activeTitle
                : styles.title
            }
          >
            Notifications
          </span>
        </div>

        <NavLink to="/create" end onClick={() => setActivePanel(null)}>
          {({ isActive }) => (
            <div className={styles.sidebarContent}>
              <CreateIcon className={styles.sidebarIcon} />
              <span
                className={
                  !activePanel && isActive ? styles.activeTitle : styles.title
                }
              >
                Create
              </span>
            </div>
          )}
        </NavLink>

        <NavLink to="/profile" onClick={() => setActivePanel(null)}>
          {({ isActive }) => (
            <div className={styles.sidebarProfile}>
              <ImageProfile
                // src={user?.avatar}
                src={defaultIcon}
                className={styles.sidebarProfileIcon}
              />
              <span
                className={
                  !activePanel && isActive ? styles.activeTitle : styles.title
                }
              >
                Profile
              </span>
            </div>
          )}
        </NavLink>
      </div>

      <SearchPanel
        isOpen={activePanel === 'search'}
        onClose={() => setActivePanel(null)}
      />

      <NotificationsPanel
        isOpen={activePanel === 'notifications'}
        onClose={() => setActivePanel(null)}
      />
    </div>
  );
}
export default Sidebar;

// NavLink автоматически добавляет класс active, когда текущий URL соответствует маршруту
// Для точных маршрутов исп - end
