import React from "react";
import Image from "next/image";
import styles from "./matchOverview.module.css";
import MatchOverviewHead from "@/components/match_overview/MatchOverviewHead";
import OverviewMatchCard from "@/components/match_overview/OverviewMatchCard";
import OverviewNav from "@/components/match_overview/OverviewNav";
import OverviewField from "@/components/match_overview/OverviewField";
import OverviewStatsProgress from "@/components/match_overview/OverviewStatsProgress";
import OverviewProgressColor from "@/components/match_overview/OverviewProgressColor";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

// const fetchFantasyOverview = async()

const fetchPlayerInfo = async (player_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/players/${player_id}?token=${entity_api_key}`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#ih4gbo0gh4n3p");
    return [];
  }
};

const fetchLastMatchesPoints = async (matchId) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/match/${matchId}/last-match-stats`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#98hgp0h43ngph0p");
    return [];
  }
};

async function enrichAppearanceTeam(matchId) {
  let appearanceRating = await fetchLastMatchesPoints(matchId);

  if (!appearanceRating || appearanceRating.length === 0) {
    console.log("No player data found");
    return;
  }

  const playerInfoPromises = appearanceRating.map(async (player) => {
    const playerInfo = await fetchPlayerInfo(player.playerId);

    const response = await fetch(
      `${LOCAL_SW_API_BASE_URL}/mydb/dream-team/player/${player.playerId}`
    );
    const additionalPlayerData = await response.json();

    return { ...player, playerInfo, additionalPlayerData };
  });

  const enrichedAppearanceRating = await Promise.all(playerInfoPromises);

  return enrichedAppearanceRating;
}

const fetchFantasyTeam = async (match_id) => {
  const res = await fetch(
    `${LOCAL_SW_API_BASE_URL}/fetchDreamTeam?matchId=${match_id}`,
    { next: { revalidate: 0 } }
  );

  const data = await res.json();
  return data;
};

const fetchMatchInfo = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const data = await fetchMatchInfo(match_id);

  const fantasyTeam = await fetchFantasyTeam(match_id);

  const totalFantasyPoints = fantasyTeam?.dreamTeam?.reduce((acc, curr) => {
    return parseFloat(acc) + (parseFloat(curr?.points) || 0);
  }, 0);

  const battingPlayers = fantasyTeam?.dreamTeam?.filter(
    (player) => player?.role == "bat"
  );

  const bowlingPlayers = fantasyTeam?.dreamTeam?.filter(
    (player) => player?.role == "bowl"
  );

  const allRounderPlayers = fantasyTeam?.dreamTeam?.filter(
    (player) => player?.role == "all"
  );

  const WicketPlayers = fantasyTeam?.dreamTeam?.filter(
    (player) => player?.role == "wk"
  );

  const appearanceData = await enrichAppearanceTeam(match_id);

  function sumPointsByRole(data, role) {
    return data
      .filter(
        (item) => item?.playerInfo?.response?.player?.playing_role === role
      )
      .reduce((acc, curr) => {
        let sum = 0;
        if (curr.points) {
          sum = curr.points.reduce((sum, point) => sum + parseFloat(point), 0);
        }
        return acc + sum;
      }, 0);
  }

  const battingPointsFP = sumPointsByRole(appearanceData, "bat");
  const bowlingPointsFP = sumPointsByRole(appearanceData, "bowl");
  const wicketPointsFP = sumPointsByRole(appearanceData, "wk");
  const allPointsFP = sumPointsByRole(appearanceData, "all");

  //   console.log(battingPointsFP, "3hwkdm3fiohn90");

  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          {/* ...........navbar........... */}
          <MatchOverviewHead />
          {/* ...........Time,date........... */}
          <OverviewMatchCard
            matchTitle={data?.response?.competition?.abbr}
            status={data?.response?.status_note || data?.response?.status_str}
            teamNameA={data?.response?.teama.short_name}
            teamNameB={data?.response?.teamb.short_name}
            logoTeamA={data?.response?.teama.logo_url}
            logoTeamB={data?.response?.teamb.logo_url}
            dateStart={data?.response?.date_start_ist}
          />
          {/* ...........Centered content........... */}
          <OverviewNav />
          {/* ...........Dream Team........... */}
          <div className={styles.totalhead}>
            <OverviewField
              battingPlayers={battingPlayers}
              bowlingPlayers={bowlingPlayers}
              allRounderPlayers={allRounderPlayers}
              WicketPlayers={WicketPlayers}
              totalFantasyPoints={totalFantasyPoints}
            />
          </div>
          {/* ...........Fantasy points contribution by position in Dream Team........... */}

          <OverviewStatsProgress
            fieldTitles={["Batting", "Bowling", "Wicket", "All rounder"]}
            // fieldTitle2={"Bowling"}
            // fieldTitle3={"Wicket"}
            // fieldTitle4={"All rounder"}
            // fieldValue1={appearanceData}
            fieldValue1={battingPointsFP}
            fieldValue2={bowlingPointsFP}
            fieldValue3={wicketPointsFP}
            fieldValue4={allPointsFP}
          />
          {/* <OverviewStatsProgress /> */}
          {/* <OverviewStatsProgress /> */}
          {/* ...........Dream Team Points Breakdown........... */}

          {/* ...........Top Players........... */}
          <OverviewProgressColor />
        </div>
      </div>
    </>
  );
};

export default page;
