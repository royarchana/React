import styles from "./CardDescription.module.css";
function CardDescription({ content }) {
  return (
    <div className={styles.cardcontent}>
      <p>{content}</p>
    </div>
  );
}

export default CardDescription;
