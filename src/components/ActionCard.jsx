import styles from "./ActionCard.module.css";

function ActionCard({ buttons, icons }) {
  return (
    <div className={styles.cardActions}>
      {buttons.map((button, index) => (
        <button key={index}>{button}</button>
      ))}
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    </div>
  );
}

export default ActionCard;
