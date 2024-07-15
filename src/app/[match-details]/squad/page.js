import SquadHead from "@/components/venue/squad/SquadHead";
// import SquadTab from "@/components/squad/SquadTab";
import SquadTeam from "@/components/venue/squad/SquadTeam";
import React from "react";
import Image from "next/image";
import styles from "./squad.module.css";
import Link from "next/link";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchTeamList = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/squads?token=${entity_api_key}`,
    { next: { revalidate: 10 } }
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
    console.log(err, "error fetching match details #984hgoi40h0g");
    return [];
  }
};

const fetchAnnounced11 = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/newpoint2?token=${entity_api_key}`,
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const teams = await fetchTeamList(match_id);

  const data = await fetchMatchInfo(match_id);

  const announcedTeam = await fetchAnnounced11(match_id);

  return (
    <>
      <div className={styles.Compareplayers}>
        <Link href="squad/compare">
          <div className={styles.Comparetab}>
            {/* <Image
            height={24}
            width={24}
            src="Upcoming/Squads/Player/compare.svg"
            alt=""
          /> */}
            <span>Compare With Other Players</span>
          </div>
        </Link>
      </div>

      <SquadHead
        nameTeamA={teams?.response?.teams?.[0]?.title}
        nameTeamB={teams?.response?.teams?.[1]?.title}
        logoTeamA={teams?.response?.teams?.[0]?.logo_url}
        logoTeamB={teams?.response?.teams?.[1]?.logo_url}
        isTeamAnnounced={!announcedTeam?.response?.points?.teama ? false : true}
      />

      <SquadTeam
        nameTeamA={teams?.response?.teams?.[0]?.title}
        nameTeamB={teams?.response?.teams?.[1]?.title}
        logoTeamA={teams?.response?.teams?.[0]?.logo_url}
        logoTeamB={teams?.response?.teams?.[1]?.logo_url}
        squadA={teams?.response?.teama?.squads}
        squadB={teams?.response?.teamb?.squads}
        announcedTeam={announcedTeam?.response?.points}
      />
    </>
  );
};

export default page;
