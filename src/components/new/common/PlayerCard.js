import Image from "next/image";
import React from "react";
import styles from "../comparison/comparision.module.css";

const Icon = ({ selected, handler, player }) => {
  return (
    <>
      {selected ? (
        <Image
          onClick={() => handler(player)}
          height={20}
          width={20}
          src="/static/Player not selected.svg"
          alt=""
        />
      ) : (
        <Image
          onClick={() => handler(player)}
          height={20}
          width={20}
          src="/static/select player.svg"
          alt=""
        />
      )}
    </>
  );
};

const PlayerCard = ({ player_data, selected = true, align, handler }) => {
  return (
    <>
      {align == "left" ? (
        <div className={styles.playercontainer}>
          <ul className={styles.players}>
            <a href>
              <li className="cursor-pointer">
                <Icon
                  selected={selected}
                  handler={handler}
                  player={player_data}
                />
              </li>
              <li>
                <div className={styles.details1}>
                  <p>{player_data?.name}</p>
                  <span>{player_data?.role}</span>
                </div>
                <img
                  src="/static/Profile.svg"
                  alt="Player"
                  className={styles.playerphoto1}
                />
              </li>
            </a>
          </ul>
        </div>
      ) : (
        <div className={styles.playercontainer}>
          <ul className={styles.players}>
            <a href>
              <li>
                <Image
                  height={20}
                  width={20}
                  src="/static/Profile.svg"
                  alt="Player"
                  className={styles.playerphoto}
                />
                <div className={styles.details}>
                  <p>{player_data?.name}</p>
                  <span>{player_data?.role}</span>
                </div>
              </li>
              <li className="cursor-pointer">
                <Icon
                  selected={selected}
                  handler={handler}
                  player={player_data}
                />
              </li>
            </a>
          </ul>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
