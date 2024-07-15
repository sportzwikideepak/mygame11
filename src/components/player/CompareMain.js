"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/squad/compare/compare.module.css";
import ComparePlayerNav from "./ComparePlayerNav";
import ComparePlayerCard from "./ComparePlayerCard";
import { useRouter } from "next/navigation";

const CompareMain = ({ combinedSquad, teama, teamb, teamaName, teambName }) => {
  const router = useRouter();
  const [playerType, setPlayerType] = useState("wk");
  const [selectedPlayersIds, setSelectedPlayersIds] = useState([]);

  const selectedPlayers = combinedSquad?.filter(
    (player) => player?.role?.toLowerCase() === playerType
  );

  const handlePlayerTypeChange = (type) => {
    setPlayerType(type);
  };

  const handlePlayerSelect = (id) => {
    if (selectedPlayersIds.length < 2 || selectedPlayersIds.includes(id)) {
      if (selectedPlayersIds.includes(id)) {
        // Filter out the id to remove it.
        setSelectedPlayersIds(selectedPlayersIds.filter((pid) => pid !== id));
      } else {
        // Add the new id to the array.
        setSelectedPlayersIds([...selectedPlayersIds, id]);
      }
    } else {
      // If trying to select more than two players, show an alert.
      alert("Two players already selected");
    }
  };

  return (
    <>
      {selectedPlayersIds.length == 2 && (
        <a href={`compare/${selectedPlayersIds[0]}-${selectedPlayersIds[1]}`}>
          <button className="compare fixed bottom-5 left-5 bg-green-700 text-white px-4 py-1 rounded-full font-bold shadow-xl">
            Compare selected players
          </button>
        </a>
      )}
      <div className={styles.compback}>
        <div className={styles.topfixed}>
          <div className={styles.maincontent}>
            <span className={styles.comphead}>Select Other Players</span>
            <span className={styles.compdescription}>
              Please Choose Your favourite Player
            </span>
          </div>

          <ComparePlayerNav
            playerType={playerType}
            handlePlayerTypeChange={handlePlayerTypeChange}
          />
          <span className={styles.Benchtext}>Bench</span>
        </div>
        <div className={styles.mainplayers}>
          {selectedPlayers?.map((player, index) => {
            // const includesInTeamA = teama.includes(player);
            const includesInTeamA = teama.some(
              (teamPlayer) => teamPlayer.player_id === player.player_id
            );

            return (
              <div
                onClick={() => handlePlayerSelect(player?.player_id)}
                key={index}
              >
                <ComparePlayerCard
                  isSelected={
                    selectedPlayersIds.includes(player?.player_id)
                      ? true
                      : false
                  }
                  name={player?.name}
                  teamName={includesInTeamA == true ? teamaName : teambName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CompareMain;
