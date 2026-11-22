// import styles from './ImageProfile.module.css'
import defaultIcon from '../../assets/icons/default-icon.svg';


function ImageProfile({ src, className }) {
  return (
    <img
      src={src || defaultIcon}
      alt="Profile"
      className={className}
    />
  );
}
export default ImageProfile