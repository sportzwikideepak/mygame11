"use client";
import React, { useState } from "react";
import styles from "../../../app/[match-details]/squad/[player]/playerInfo.module.css";
import PlayerInfoTypeSelector from "./PlayerInfoTypeSelector";
import PlayStylesSelectNav from "./PlayStylesSelectNav";
import Image from "next/image";
import abbreviateMatchTitle from "@/utils/abbreviateMatchTitle";

const PlayerMain = ({
  data,
  lastMatchesData,
  player_vs_team,
  team_a_id,
  team_b_id,
}) => {
  const [matchTypeSelect, setMatchTypeSelect] = useState("odi");
  const [playType, setPlayType] = useState("batting");

  const handleMatchTypeSelectChange = (e) => {
    setMatchTypeSelect(e.target.value);
    console.log(matchTypeSelect, "infboignb0pi43nb0p");
  };

  const handlePlayTypeChange = (value) => {
    setPlayType(value);
  };

  console.log(player_vs_team, "932b9ogo");

  return (
    <>
      <div className={styles.Playerinfo}>
        <PlayerInfoTypeSelector
          handleMatchTypeSelectChange={handleMatchTypeSelectChange}
        />
        <div className={styles.playerinformation}>
          <div className={styles.playerimage}>
            <Image
              style={{ height: 130, width: 130 }}
              height={80}
              width={80}
              src="https://res.cloudinary.com/dbb7g0jqa/image/upload/v1711196352/PngItem_5067022_o0sjco.png"
              alt=""
            />
          </div>
          <div className={styles.playertext}>
            <span className={styles.Desti}>
              {data?.response?.player?.title}
            </span>
            <span className={styles.Desti1}>
              {data?.response?.player?.playing_role}
            </span>
            <div className={styles.playerline} />
            <div className={styles.countary}>
              {/* <img src="Upcoming/India Flag.svg" alt="" /> */}
              <span>{data?.response?.player?.country?.toUpperCase()}</span>
            </div>
          </div>
        </div>
        {/* playerstyle */}
        <PlayStylesSelectNav
          playType={playType}
          handlePlayTypeChange={handlePlayTypeChange}
        />
        {/* Playermain */}

        <div className={styles.Playermain}>
          <span className={styles.recentmatch}>Recent Matches :-</span>
          <span className={styles.recentmatchtitle}>Last 5 Matches Record</span>
          <div className={styles.MatchePrevious}>
            {lastMatchesData?.[playType]?.slice(0, 5)?.map((item) => {
              return (
                <div key={item?.match_id} className={styles.matchestab}>
                  <span className={styles.previousscore}>
                    {item?.runs}({item?.balls})
                  </span>
                  <span className={styles.previoustream}>
                    {abbreviateMatchTitle(item?.match_title)}
                  </span>
                </div>
              );
            })}
          </div>
          {/* playersstats */}
          <div className={styles.playersstats}>
            <span className={styles.statstext}>Stats :-</span>
            <div className={styles.playersstatscontent}>
              {playType == "batting" ? (
                <>
                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Matches</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.matches}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Innings</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.innings}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Not out</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.notout}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Runs</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.runs}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Balls</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.balls}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Highest</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.highest}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>100s</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.run100}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>50s</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.run50}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>4s</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.run4}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>6s</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.run6}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Average</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.average}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Strike</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.strike}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Catches</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.catches}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Stumping</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.stumpings}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>
                      Fastest 50 balls
                    </span>
                    <span className={styles.playercontentright}>
                      {
                        data?.response?.[playType]?.[matchTypeSelect]
                          ?.fastest50balls
                      }
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>
                      Fastest 100 balls
                    </span>
                    <span className={styles.playercontentright}>
                      {
                        data?.response?.[playType]?.[matchTypeSelect]
                          ?.fastest100balls
                      }
                    </span>
                  </div>
                  <div className={styles.statsline} />
                </>
              ) : (
                <>
                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Matches</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.matches}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Innings</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.innings}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Balls</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.balls}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>overs</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.overs}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>runs</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.runs}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>wickets</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.wickets}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>
                      Best Inning
                    </span>
                    <span className={styles.playercontentright}>
                      {
                        data?.response?.[playType]?.[matchTypeSelect]
                          ?.bestinning
                      }
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Best Match</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.bestmatch}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Economy</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.econ}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Average</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.average}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Strike</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.strike}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Wicket 4 i</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.wicket4i}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>Wicket 5 i</span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.wicket5i}
                    </span>
                  </div>
                  <div className={styles.statsline} />

                  <div className={styles.content}>
                    <span className={styles.playercontentleft}>
                      Wicket 10 m
                    </span>
                    <span className={styles.playercontentright}>
                      {data?.response?.[playType]?.[matchTypeSelect]?.wicket10m}
                    </span>
                  </div>
                  <div className={styles.statsline} />
                </>
              )}
            </div>
            {/* playersstatsByTeam */}
            <span className={styles.statstext}>Stats by Team :-</span>
            {player_vs_team?.[playType]?.[matchTypeSelect]?.map((item) => {
              console.log(playType, "playType");
              console.log(matchTypeSelect, "matchTypeSelect");
              console.log(item?.teamid, "teamId");
              console.log(team_a_id, "team_a_id");
              console.log(team_b_id, "team_b_id");
              // if (item?.teamid == team_a_id || item?.teamid == team_b_id) {
              if (
                playType === "batting"
                // &&
                // (item?.teamid == team_a_id || item?.teamid == team_b_id)
              ) {
                return (
                  <>
                    <span className={styles.Teamstatstext}>
                      vs {item?.team_name}
                    </span>
                    <div className={styles.playersstatscontent}>
                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>
                          Innings
                        </span>
                        <span className={styles.playercontentright}>
                          {item?.innings}
                        </span>
                      </div>
                      <div className={styles.statsline} />
                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>
                          Not Out
                        </span>
                        <span className={styles.playercontentright}>
                          {item?.notout}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Runs</span>
                        <span className={styles.playercontentright}>
                          {item?.runs}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Balls</span>
                        <span className={styles.playercontentright}>
                          {item?.balls}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>100s</span>
                        <span className={styles.playercontentright}>
                          {item?.run100}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>50s</span>
                        <span className={styles.playercontentright}>
                          {item?.run50}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>4s</span>
                        <span className={styles.playercontentright}>
                          {item?.run4}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>6s</span>
                        <span className={styles.playercontentright}>
                          {item?.run6}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>
                          Catches
                        </span>
                        <span className={styles.playercontentright}>
                          {item?.catches}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>
                          Stumping
                        </span>
                        <span className={styles.playercontentright}>
                          {item?.stumpings}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Run 0</span>
                        <span className={styles.playercontentright}>
                          {item?.run0}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Run 1</span>
                        <span className={styles.playercontentright}>
                          {item?.run1}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Run 2</span>
                        <span className={styles.playercontentright}>
                          {item?.run2}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Run 3</span>
                        <span className={styles.playercontentright}>
                          {item?.run3}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>Strike</span>
                        <span className={styles.playercontentright}>
                          {item?.strike}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>
                          Average
                        </span>
                        <span className={styles.playercontentright}>
                          {item?.average}
                        </span>
                      </div>
                      <div className={styles.statsline} />

                      <div className={styles.content}>
                        <span className={styles.playercontentleft}>
                          Highest
                        </span>
                        <span className={styles.playercontentright}>
                          {item?.highest}
                        </span>
                      </div>
                    </div>
                  </>
                );
              }
              return (
                <>
                  <span className={styles.Teamstatstext}>
                    vs {item?.team_name}
                  </span>
                  <div className={styles.playersstatscontent}>
                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Innings</span>
                      <span className={styles.playercontentright}>
                        {item?.innings}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Balls</span>
                      <span className={styles.playercontentright}>
                        {item?.balls}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Runs</span>
                      <span className={styles.playercontentright}>
                        {item?.runs}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Wickets</span>
                      <span className={styles.playercontentright}>
                        {item?.wickets}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Wicket 4</span>
                      <span className={styles.playercontentright}>
                        {item?.wicket4i}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Wicket 5</span>
                      <span className={styles.playercontentright}>
                        {item?.wicket5i}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>
                        Wicket 10
                      </span>
                      <span className={styles.playercontentright}>
                        {item?.wicket10m}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Maidens</span>
                      <span className={styles.playercontentright}>
                        {item?.maidens}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Dot</span>
                      <span className={styles.playercontentright}>
                        {item?.dot}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>econ</span>
                      <span className={styles.playercontentright}>
                        {item?.econ}
                      </span>
                    </div>
                    <div className={styles.statsline} />

                    <div className={styles.content}>
                      <span className={styles.playercontentleft}>Strike</span>
                      <span className={styles.playercontentright}>
                        {item?.strike}
                      </span>
                    </div>
                  </div>
                </>
              );
              // }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerMain;
