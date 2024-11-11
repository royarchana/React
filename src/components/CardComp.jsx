import AvatarCmp from "./AvatarCmp";
import CardTitle from "./CardTitle";
import SecondText from "./SecondText";
import CardImg from "./CardImg";
import CardDescription from "./CardDescription";
import ActionCard from "./ActionCard";
import styles from "./CardComp.module.css";

function CardComp({
  avatarimg,
  title,
  secondtitle,
  imageUrl,
  content,
  buttons,
  icons,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <AvatarCmp avatarimg={avatarimg} />
        <div>
          <CardTitle title={title} />
          <SecondText secondtitle={secondtitle} />
        </div>
      </div>
      <CardImg imageUrl={imageUrl} />
      <CardDescription content={content} />
      <ActionCard buttons={buttons} icons={icons} />
    </div>
  );
}

export default CardComp;
