import styles from "./Avatar.module.css";
function AvatarCmp({ avatarimg }) {
  return (
    <div className={styles.avatar}>
      <img src={avatarimg} alt="Avatar" />
    </div>
  );
}

export default AvatarCmp;
