"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/stats-playground/statsPlayground.module.css";
import Image from "next/image";

const StatsPlaygroundDataVisual = (props) => {
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [selectedRole, setSelectedRole] = useState("ALL");

  const teams = [
    "All",
    ...new Set(props?.data.map((item) => item.team_short_name)),
  ];
  const roles = [
    "ALL",
    ...new Set(props?.data.map((item) => item.playing_role.toUpperCase())),
  ].filter((value, index, self) => self.indexOf(value) === index);

  const filteredData = props?.data.filter(
    (item) =>
      (selectedTeam === "All" || item.team_short_name === selectedTeam) &&
      (selectedRole === "ALL" ||
        item.playing_role.toUpperCase() === selectedRole)
  );

  return (
    <>
      <div className="col-span-12 md:col-span-7">
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-500 font-semibold mb-4 text-center">
              Top players based on Total Fantasy Points from Last 5 Matches
              played at All Venues when Considering Overall scenarios against
              Any Team
            </p>
            <div className="tabs-slider flex gap-3 mb-6 text-sm overflow-auto bg-light-primary rounded-full py-2 px-2 justify-center">
              {teams.map((team) => (
                <div key={team} className="tabs-item flex-1">
                  <button
                    className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
                      selectedTeam === team
                        ? "bg-primary text-white"
                        : "text-primary bg-white"
                    }`}
                    onClick={() => setSelectedTeam(team)}
                  >
                    {team}
                  </button>
                </div>
              ))}
            </div>
            <div className="tabs flex flex-wrap justify-center gap-6 2xl:gap-8 relative mb-5">
              {roles.map((role) => (
                <button
                  key={role}
                  className={`pb-2 border-b-2 text-xs font-semibold ${
                    selectedRole === role
                      ? "border-brand-red text-brand-red"
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            <div className="accordion flex flex-col gap-6 bg-light-blue py-3 px-4 rounded-lg">
              {filteredData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <button className="flex items-center justify-between gap-4 w-full relative">
                    <div className="progress-item flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-500 text-xs font-semibold block">
                          {item?.short_name} ({item?.playing_role} -{" "}
                          {item?.team_short_name})
                        </span>
                        <span className="text-black text-xs font-semibold block">
                          {parseInt(item?.[props?.stats_type])}{" "}
                          {props?.stats_type_suffix} - {item?.match_count}m
                        </span>
                      </div>
                      <div className="bg-white rounded-full flex">
                        <div
                          className="bg-brand-red h-0.5"
                          style={{
                            width: `${
                              (parseFloat(item?.[props?.stats_type]) / 150) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Old design */}
      {/* <div className={styles.infocontainer}>
        <h2 className="font-bold mb-4 text-red-700">{props?.dataType}</h2>
        {props?.data?.map((player, index) => {
          return (
            <div key={index} className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>{player?.short_name} </b>({player?.team_short_name})
                </span>
                <span className={styles.winchasing}>{`${(
                  Number.parseInt(player[props?.stats_type], 10) || 0
                ).toFixed()} ${props?.stats_type_suffix} (${
                  player?.match_count || 0
                } Mat)`}</span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${
                      (Math.abs(player[props?.stats_type]) / props?.divisor) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          );
        })}

        <div className={styles.hint}>
          M - <span>Matches,</span> Pts - <span>points,</span> T -{" "}
          <span>Times,</span> W - <span>Wickets</span>
        </div>
      </div> */}
    </>
  );
};

export default StatsPlaygroundDataVisual;
