import React from "react";
import styles from "../../matchDetails.module.css";
import VenueHead from "@/components/venueNew/VenueHead";
import VenueNav from "../../../../components/new/venue-overview/VenueNav";
import VenueInfoBox from "@/components/venueNew/VenueInfoBox";
import VenueLast10InningsInfo from "@/components/venueNew/VenueLast10InningsInfo";
import VenueLast10TossReport from "@/components/venueNew/VenueLast10TossReport";
import HeadNav from "@/components/new/common/HeadNav";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import TopStats from "@/components/new/venue-overview/Last5Match/TopStats";
import PrevMatchReport from "@/components/new/venue-overview/Last5Match/PrevMatchReport";
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

const fetchAllMatchInfos = async (matchIds) => {
  const matchPromises = matchIds.map((matchId) => fetchMatchDetails(matchId));
  const results = await Promise.all(matchPromises);
  return results;
};

const getTopPlayers = async (venue_id, teamIdA, teamIdB) => {
  console.log(venue_id,teamIdA,teamIdB,"326431342")
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/venue/${venue_id}/top-players?teamIdA=${teamIdA}&teamIdB=${teamIdB}`,
      {
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    console.log(data,"64324")
    return data;
  } catch (err) {
    console.log(err, "error occurred while fetching top players data #8h403np0vhn");
    return [];
  }
};


const fetchVenueDetails = async (venue_id) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/stats/venue/${venue_id}`,
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

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];

  const matchDetails = await fetchMatchDetails(match_id);

  const venue_id = matchDetails?.response?.venue?.venue_id;

  const venueData = await fetchVenueDetails(venue_id);


  const teamIdA = matchDetails?.response?.teama?.team_id;
  const teamIdB = matchDetails?.response?.teamb?.team_id;

  const venueTopPlayers =  await getTopPlayers(venue_id, teamIdA, teamIdB);
  console.log(venueTopPlayers,"venuetoplayers")

  const matchIds = venueTopPlayers?.map((match) => match?.match_id);

  const allMatchInfos = await fetchAllMatchInfos(matchIds);

  const playerPPMDI = await teamPlayerDtPPM(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const topPlayers = await fetchTopPlayers(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  // console.log(allMatchInfos, "last10MatchTossReport");
  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            <VenueNav
              active={1}
              teama={matchDetails?.response?.teama?.short_name}
              teamb={matchDetails?.response?.teamb?.short_name}
              currentPath={currentPath}
            />
            <TopStats venueData={venueData} />

            <div className="flex flex-col gap-2">
              {venueTopPlayers?.map((match, index) => {
                const match_details = allMatchInfos?.filter(
                  (item) => item?.response?.match_id == match?.match_id
                );
                return (
                  <PrevMatchReport
                    matchInfo={match}
                    key={index}
                    matchDetails={match_details}
                    data={venueTopPlayers}
                    status_note={match?.status_note}
                    currentPath={currentPath}
                    match_id={match_id}
                    venue_id={venue_id}
                    // currentPath={currentPath}
                  />
                );
              })}
            </div>
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
      {/* <div className={styles.page}>
        <div className={`${styles.main} pb-10`}>
          <VenueHead
            match_short_title={matchDetails?.response?.short_title}
            match_venue={matchDetails?.response?.venue?.name}
            currentPath={currentPath}
          />
          <VenueNav
            currentPath={currentPath}
            activeTab={1}
            teamNameA={matchDetails?.response?.teama?.short_name}
            teamNameB={matchDetails?.response?.teamb?.short_name}
          />
          <VenueInfoBox />
          <VenueLast10InningsInfo venueData={venueData} />
          <div className={styles.mathlive}>
            {venueTopPlayers?.map((match, index) => {
              const match_details = allMatchInfos?.filter(
                (item) => item?.response?.match_id == match?.match_id
              );
              // console.log(venue_details, "venue_detailsvenue_details");
              return (
                <VenueLast10TossReport
                  key={index}
                  matchDetails={match_details}
                  data={venueTopPlayers}
                  status_note={match?.status_note}
                  currentPath={currentPath}
                  match_id={match_id}
                  venue_id={venue_id}
                />
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
