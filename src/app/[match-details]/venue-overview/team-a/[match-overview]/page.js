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

const fetchFantasyOverview = async (venue_id, team_id) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/team/${team_id}/match-details`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("#8943ythg40h034");
    return [];
  }
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
    params["match-overview"].split("-")[
      params["match-overview"].split("-").length - 2
    ];

  const team_id =
    params["match-overview"].split("-")[
      params["match-overview"].split("-").length - 1
    ];

  const data = await fetchMatchInfo(match_id);

  const FantasyOverview = await fetchFantasyOverview(
    data?.response?.venue?.venue_id,
    team_id
  );

  // console.log(FantasyOverview[0]?.dreamTeam, "39fhgi0gh30if");

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
          <OverviewNav
            currentPath1={params["match-details"]}
            currentPath2={params["match-overview"]}
            currentTeam={"team-a"}
            active={0}
          />
          {/* ...........Dream Team........... */}
          <div className={styles.totalhead}>
            <OverviewField
              FantasyOverview={FantasyOverview}
              matchId={match_id}
            />
          </div>
          {/* ...........Fantasy points contribution by position in Dream Team........... */}

          <OverviewStatsProgress
            FantasyOverview={FantasyOverview}
            matchId={match_id}
          />
          {/* ...........Dream Team Points Breakdown........... */}

          {/* ...........Top Players........... */}
          <OverviewProgressColor
            FantasyOverview={FantasyOverview}
            matchId={match_id}
          />
        </div>
      </div>
    </>
  );
};

export default page;
