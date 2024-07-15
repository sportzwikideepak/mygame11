import React from "react";
import Image from "next/image";
import styles from "../../../team-a/[match-overview]/scorecard/scorecard.module.css";
import MatchOverviewHead from "@/components/match_overview/MatchOverviewHead";
import OverviewMatchCard from "@/components/match_overview/OverviewMatchCard";
import OverviewNav from "@/components/match_overview/OverviewNav";
import Scorecard from "@/components/scorecard/Scorecard";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchMatchScoreCard = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/scorecard?token=${entity_api_key}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#hfib0pv40pi");
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

  const data = await fetchMatchInfo(match_id);
  const scorecard = await fetchMatchScoreCard(match_id);
  console.log(params, "34fgi93nfh0i");
  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <MatchOverviewHead />
          <OverviewMatchCard
            matchTitle={data?.response?.competition?.abbr}
            status={data?.response?.status_note || data?.response?.status_str}
            teamNameA={data?.response?.teama.short_name}
            teamNameB={data?.response?.teamb.short_name}
            logoTeamA={data?.response?.teama.logo_url}
            logoTeamB={data?.response?.teamb.logo_url}
            dateStart={data?.response?.date_start_ist}
          />
          <OverviewNav
            currentPath1={params["match-details"]}
            currentPath2={params["match-overview"]}
            currentTeam={"team-b"}
            active={1}
          />

          <div className="cards pb-10">
            {scorecard?.response?.innings?.map((item, index) => {
              return <Scorecard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
