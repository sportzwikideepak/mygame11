import React from "react";
import styles from "./compare.module.css";
import CompareMain from "@/components/player/CompareMain";

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

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const squad = await fetchTeamList(match_id);
  const combinedSquad = [
    ...squad?.response?.teama?.squads,
    ...squad?.response?.teamb?.squads,
  ];

  return (
    <>
      <CompareMain
        combinedSquad={combinedSquad}
        teama={squad?.response?.teama.squads}
        teamb={squad?.response?.teamb.squads}
        teamaName={squad?.response?.teams[0]?.abbr}
        teambName={squad?.response?.teams[1]?.abbr}
      />
    </>
  );
};

export default page;
