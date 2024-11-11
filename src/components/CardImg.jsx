import styles from "./CardImg.module.css";
function CardImg({ imageUrl }) {
  return (
    <div className={styles.cardimg}>
      <img src={imageUrl} alt="Card" />
    </div>
  );
}

export default CardImg;
