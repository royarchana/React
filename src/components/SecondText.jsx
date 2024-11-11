import styles from "./SecondText.module.css";

function SecondText({ secondtitle }) {
  return <p className={styles.cardtextp}>{secondtitle}</p>;
}

export default SecondText;
