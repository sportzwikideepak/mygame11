import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";
import Link from "next/link";

const PlayerComparison = (props) => {
  return (
    <>
      <div className={`${styles.maincontainer}`}>
        <div className={`${styles.contentcontainer}`}>
          <header className={`${styles.mainheader}`}>
            <h1>Top Player vs Player Comparison</h1>
            <Link
              href={`/${props?.currentPath}/comparison`}
              className={`${styles.viewlink}`}
            >
              View full →
            </Link>
          </header>
          <section className={`${styles.playercomparisons}`}>
            {props?.topPlayers
              .slice(0, 8)
              ?.sort(
                (a, b) => b?.total_fantasy_points - a?.total_fantasy_points
              )
              ?.reduce((acc, player, index, array) => {
                if (index % 2 === 0 && array[index + 1]) {
                  acc.push(
                    <Link
                      href={`/${props?.currentPath}/comparison?player1=${
                        array[index].player_id
                      }&player2=${array[index + 1].player_id}`}
                      className={`${styles.comparisoncard}`}
                    >
                      <div className={`${styles.playerinfo1}`}>
                        <Image
                          height={20}
                          width={20}
                          src="/static/player.png"
                          alt="Player image"
                          className={`${styles.playerimage}`}
                        />
                        <div className={`${styles.playerdetails}`}>
                          <div className={`${styles.playername}`}>
                            {array[index].short_name}
                          </div>
                          <div className={`${styles.playerrole}`}>
                            {array[index].playing_role.toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.vsindicator}`}>
                        <span>
                          <Image
                            height={20}
                            width={20}
                            src="/static/VS.svg"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className={`${styles.playerinfo1}`}>
                        <Image
                          height={20}
                          width={20}
                          src="/static/player.png"
                          alt="Player image"
                          className={`${styles.playerimage}`}
                        />
                        <div className={`${styles.playerdetails}`}>
                          <div className={`${styles.playername}`}>
                            {array[index + 1].short_name}
                          </div>
                          <div className={`${styles.playerrole}`}>
                            {array[index + 1].playing_role.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                }
                return acc;
              }, [])}
          </section>
        </div>
      </div>
    </>
  );
};

export default PlayerComparison;
