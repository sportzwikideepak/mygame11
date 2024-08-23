import React from "react";
import styles from "../matchDetails.module.css";
import Image from "next/image";
import VenueHead from "@/components/venueNew/VenueHead";
import VenueNav from "../../../components/new/venue-overview/VenueNav";
import VenueInfoBox from "@/components/venueNew/VenueInfoBox";
import VenuePitchDetails from "@/components/venueNew/VenuePitchDetails";
import VenueTossTrend from "@/components/venueNew/VenueTossTrend";
import VenueBattingFirstPreferred from "@/components/venueNew/VenueBattingFirstPreferred";
import VenueTopPlayers from "@/components/venueNew/VenueTopPlayers";
import VenueCapVcHistory from "@/components/venueNew/VenueCapVcHistory";
import HeadNav from "@/components/new/common/HeadNav";
import DataMain from "@/components/new/cheat-sheet/DataMain";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import BalancedPitch from "@/components/new/venue-overview/BalancedPitch";
import TossTrends from "@/components/new/venue-overview/TossTrends";
import BattingFirst from "@/components/new/venue-overview/BattingFirst";
import PreviousStats from "@/components/new/venue-overview/PreviousStats";
import FrequentCVC from "@/components/new/venue-overview/FrequentCVC";
import PopPlayerVenue from "@/components/new/venue-overview/PopPlayerVenue";

const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;

const fetchTopPlayers = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/new/top-players-stats/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return [];
  } catch (err) {
    console.log(err, "#493h0g4ubo");
    return [];
  }
};

const teamPlayerDtPPM = async (teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/new/teams/player-stats/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    if (res?.ok) {
      const data = await res.json();
      return data;
    }
    return [];
  } catch (err) {
    console.log(err, "#493h0g4ubo");
    return [];
  }
};

const fetchFrequentCandVC = async (venue_id, teamIdA, teamIdB) => {
  console.log(venue_id, teamIdA, teamIdB, "12345678");
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/frequent-leaders/venue/${venue_id}/teams/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const getTopPlayers = async (venue_id, teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/top-players/venue/${venue_id}/teams/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const fetchMatchDetails = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
    { next: { revalidate: 3000 } }
  );

  const data = await res.json();
  return data;
};

const fetchTossTrends = async (venue_id, teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/stats?teamIdA=${teamIdA}&teamIdB=${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};

const fetchVenueDetails = async (venue_id, teamIdA, teamIdB) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/stats/venue/${venue_id}/${teamIdA}/${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching venue data #8h403np0vhn");
    return [];
  }
};


const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];

  const matchDetails = await fetchMatchDetails(match_id);

  const venue_id = matchDetails?.response?.venue?.venue_id;
  const teamIdA = matchDetails?.response?.teama?.team_id;
  const teamIdB = matchDetails?.response?.teamb?.team_id;

  console.log('Team A ID:', teamIdA);
  console.log('Team B ID:', teamIdB);

  const venueData = await fetchVenueDetails(venue_id,teamIdA,teamIdB);
  const venueTrends = await fetchTossTrends(venue_id, teamIdA, teamIdB);

  const venueTopPlayers = await getTopPlayers(venue_id, teamIdA, teamIdB);

  const frquentCandVc = await fetchFrequentCandVC(venue_id, teamIdA, teamIdB);

  const topPlayers = await fetchTopPlayers(teamIdA, teamIdB);

  const playerPPMDI = await teamPlayerDtPPM(teamIdA, teamIdB);

  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            <VenueNav
              active={0}
              teama={matchDetails?.response?.teama?.short_name}
              teamb={matchDetails?.response?.teamb?.short_name}
              currentPath={currentPath}
            />
            <BalancedPitch venueData={venueData} />
            <TossTrends venueTrends={venueTrends} />
            <BattingFirst venueTrends={venueTrends} />
            <PreviousStats venueTrends={venueTrends} />
            <FrequentCVC frquentCandVc={frquentCandVc} />
            <PopPlayerVenue venueTopPlayers={venueTopPlayers} />
          </div>
          <div className={styles.container3}>
            <div className={styles.card3}>
              <DreamTeamBox
                match_info={matchDetails?.response}
                currentUrl={params["match-details"]}
              />
              <PlayerStatsBox playerPPMDI={playerPPMDI} />
            </div>
          </div>
        </div>
        <PlayerVsPlayer top_players={topPlayers} />
      </div>
    </>
  );
};

export default page;
