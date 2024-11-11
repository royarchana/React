import styles from "./CardTitle.module.css";

function CardTitle({ title }) {
  return <h2 className={styles.cardtext}>{title}</h2>;
}

export default CardTitle;
