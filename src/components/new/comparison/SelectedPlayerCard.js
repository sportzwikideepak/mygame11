import Image from "next/image";
import styles from "./comparision.module.css";

const SelectedPlayerCard = ({
  name,
  arr_len,
  handlePlayerComparisonActive,
}) => {
  return (
    <>
      <div className={styles.cardcontent}>
        <div className={styles.card5}>
          <div className={styles.selectplayer}>
            <div className={styles.playerselected}>
              <Image
                height={20}
                width={20}
                src="/static/Profile add.svg"
                alt=""
              />
              <div className={styles.playertext1}>
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.cardtext}>
          Click <span className={styles.highlight}>+</span> to add player
        </p>
      </div>
      {arr_len == 1 && (
        <div
          onClick={() => handlePlayerComparisonActive()}
          className={styles.compare}
        >
          <div className={`${styles.comparesection} cursor-pointer`}>
            <p>Compare</p>
            <Image
              height={20}
              width={20}
              src="/static/Compare Player Icon.svg"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedPlayerCard;
