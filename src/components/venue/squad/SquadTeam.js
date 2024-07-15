"use client";
import React, { useState } from "react";
import styles from "./Squad.module.css";
import SquadTab from "./SquadTab";
import Link from "next/link";
import Image from "next/image";

const SquadTeam = ({
  nameTeamA,
  nameTeamB,
  logoTeamA,
  logoTeamB,
  squadA,
  squadB,
  announcedTeam,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  // console.log(squadA, "89hinb9");

  const changeTab = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const getPlayerList = (squad, role) =>
    squad.filter((player) => player.role === role);

  const renderPlayers = (players, roleLabel) => (
    <>
      <span className={styles.WK}>{roleLabel}</span>
      {players?.map((player) => (
        <Link
          href={`squad/${player?.pid || player?.player_id}`}
          key={player.id}
          className={styles.links}
        >
          <div className={styles.Playerslink}>
            <div className={styles.Playerslinkleft}>
              <div className={styles.image}>
                <Image
                  src="/static/profile_svg.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </div>
              <div className={styles.Imageright}>
                <span className={styles.Imageright1}>{player.name}</span>
                <span className={styles.Imageright2}>{roleLabel}</span>
              </div>
            </div>
            <div className={styles.Playerslinkright}>
              {/* Placeholder for potentially showing an arrow or additional content */}
              <Image src={"/static/next.svg"} height={20} width={20} />
            </div>
          </div>
        </Link>
      ))}
      <div className={styles.line} />
    </>
  );

  const renderPlaying11 = (players) => (
    <>
      <p className="font-bold ml-4 my-3">Playing 11</p>
      {players?.playing11?.map((player) => (
        <Link
          href={`squad/${player?.pid || player?.player_id}`}
          key={player.id}
          className={styles.links}
        >
          <div className={styles.Playerslink}>
            <div className={styles.Playerslinkleft}>
              <div className={styles.image}>
                <Image
                  src="/static/profile_svg.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </div>
              <div className={styles.Imageright}>
                <span className={styles.Imageright1}>{player.name}</span>
                {/* Placeholder for roleLabel */}
              </div>
            </div>
            <div className={styles.Playerslinkright}>
              <Image src={"/static/next.svg"} height={20} width={20} />
            </div>
          </div>
        </Link>
      ))}
      <div className={styles.line} />

      <p className="font-bold ml-4 my-3">Bench</p>
      {players?.substitute?.map((player) => (
        <Link
          href={`squad/${player?.pid}`}
          key={player.id}
          className={styles.links}
        >
          <div className={styles.Playerslink}>
            <div className={styles.Playerslinkleft}>
              <div className={styles.image}>
                {/* Uncomment and use correctly if you have player images */}
              </div>
              <div className={styles.Imageright}>
                <span className={styles.Imageright1}>{player.name}</span>
                {/* Placeholder for roleLabel */}
              </div>
            </div>
            <div className={styles.Playerslinkright}>
              {/* Placeholder for additional content */}
            </div>
          </div>
        </Link>
      ))}
      <div className={styles.line} />
    </>
  );

  return (
    <>
      {!announcedTeam.teama && !announcedTeam.teama ? (
        <>
          <div className={styles.SquadMainTab}>
            <SquadTab
              nameTeamA={nameTeamA}
              nameTeamB={nameTeamB}
              logoTeamA={logoTeamA}
              logoTeamB={logoTeamB}
              changeTab={changeTab}
              selectedTab={selectedTab}
            />
            {selectedTab === 1 ? (
              <>
                {renderPlayers(getPlayerList(squadA, "wk"), "Wicket Keeper")}
                {renderPlayers(getPlayerList(squadA, "bat"), "Batsmen")}
                {renderPlayers(getPlayerList(squadA, "bowl"), "Bowlers")}
                {renderPlayers(getPlayerList(squadA, "all"), "All Rounders")}
              </>
            ) : (
              <>
                {renderPlayers(getPlayerList(squadB, "wk"), "Wicket Keeper")}
                {renderPlayers(getPlayerList(squadB, "bat"), "Batsmen")}
                {renderPlayers(getPlayerList(squadB, "bowl"), "Bowlers")}
                {renderPlayers(getPlayerList(squadB, "all"), "All Rounders")}
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={styles.SquadMainTab}>
            <SquadTab
              nameTeamA={nameTeamA}
              nameTeamB={nameTeamB}
              logoTeamA={logoTeamA}
              logoTeamB={logoTeamB}
              changeTab={changeTab}
              selectedTab={selectedTab}
            />
            {selectedTab === 1 ? (
              <>
                {/* <p className="font-bold ml-4 my-3">Playing 11</p> */}
                {renderPlaying11(announcedTeam.teama)}
              </>
            ) : (
              <>
                {/* <p className="font-bold ml-4 my-3">Playin</p> */}
                {renderPlaying11(announcedTeam.teamb)}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SquadTeam;
