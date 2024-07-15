import Image from "next/image";
import styles from "./comparision.module.css";

const NonSelectedPlayerCard = () => {
  return (
    <div className={styles.cardcontent}>
      <div className={styles.card5}>
        <Image
          height={20}
          width={20}
          src="/static/Add Player.svg"
          alt="plus"
          className={styles.cardimage}
        />
      </div>
      <p className={styles.cardtext}>
        Click <span className={styles.highlight}>+</span> to add player
      </p>
    </div>
  );
};

export default NonSelectedPlayerCard;
