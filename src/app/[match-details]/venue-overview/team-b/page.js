import React from "react";
import styles from "../../matchDetails.module.css";
import VenueNav from "../../../../components/new/venue-overview/VenueNav";
import VenueHead from "@/components/venueNew/VenueHead";
import VenueStatsBox from "@/components/venueNew/VenueStatsBox";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;
const entity_api_key = process.env.ENTITY_TOKEN;
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
import Image from "next/image";
import Link from "next/link";
import HeadNav from "@/components/new/common/HeadNav";
import TopStats from "@/components/new/venue-overview/Last5Match/TopStats";
import PrevMatchReport from "@/components/new/venue-overview/Last5Match/PrevMatchReport";
import DreamTeamBox from "@/components/new/overview/DreamTeamBox";
import PlayerStatsBox from "@/components/new/overview/PlayerStatsBox";
import PlayerVsPlayer from "@/components/new/data-analytics/PlayerVsPlayer";
import InRecentMatchTable from "@/components/new/venue-overview/this-team/InRecentMatchTable";
import FrequentCVC from "@/components/new/venue-overview/this-team/FrequentCVC";
import ThisRecentMatches from "@/components/new/venue-overview/this-team/ThisRecentMatches";

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

const fetchTeamMatches = async (team_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/teams/${team_id}/matches?token=${entity_api_key}&status=2`,
    { next: { revalidate: 3000 } }
  );

  const data = await res.json();
  return data;
};

// const fetchTopPlayers = async (venue_id, teamIdA, teamIdB) => {
//   try {
//     const res = await fetch(
//       `${LOCAL_SW_API_BASE_URL}/top-players/venue/${venue_id}/teams/${teamIdA}/${teamIdB}`,
//       {
//         next: { revalidate: 0 },
//       }
//     );
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.log(err, "error occurred while fetching venue data #8h403np0vhn");
//     return [];
//   }
// };

const fetchVenueStats = async (venue_id, team_id) => {
  try {
    const res = await fetch(
      `${LOCAL_SW_API_BASE_URL}/team-stats/${team_id}/${venue_id}`,
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

  // const topPlayers = await fetchTopPlayers(
  //   venue_id,
  //   matchDetails?.response?.teama?.team_id,
  //   matchDetails?.response?.teamb?.team_id
  // );

  const team_matches = await fetchTeamMatches(
    matchDetails?.response?.teamb?.team_id
  );
  const venueStats = await fetchVenueStats(
    venue_id,
    matchDetails?.response?.teamb?.team_id
  );

  // console.log(venueStats, "3hf0fhnpihnfp");

  const playerPPMDI = await teamPlayerDtPPM(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );

  const topPlayers = await fetchTopPlayers(
    matchDetails?.response?.teama?.team_id,
    matchDetails?.response?.teamb?.team_id
  );
  // console.log(venueStats, "3hf0fhnpihnfp");
  return (
    <>
      <HeadNav title={matchDetails?.response?.title} prevUrl={`/`} />
      <div className={styles.mainContent}>
        <div className={`${styles.allContent} mt-2`}>
          <div className={`${styles.container1} mt-2`}>
            <VenueNav
              active={3}
              teama={matchDetails?.response?.teama?.short_name}
              teamb={matchDetails?.response?.teamb?.short_name}
              currentPath={currentPath}
            />
            <InRecentMatchTable venueStats={venueStats} />
            <FrequentCVC topPlayers={topPlayers} />
            <p class="text-sm text-primary font-semibold mt-4">
              recent matches of this team Performance.
            </p>
            <ThisRecentMatches team_matches={team_matches} />
            {/* <VenueStatsBox topPlayers={topPlayers} /> */}
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
      {/* Old code */}
      {/* <div className={styles.page}>
        <div style={{ paddingBottom: "70px" }} className={styles.main}>
          <VenueHead
            match_short_title={matchDetails?.response?.short_title}
            match_venue={matchDetails?.response?.venue?.name}
            currentPath={currentPath}
          />

          <VenueNav
            currentPath={currentPath}
            activeTab={2}
            active={0}
            teamNameA={matchDetails?.response?.teama?.short_name}
            teamNameB={matchDetails?.response?.teamb?.short_name}
          />

          <div className={styles.tossrends}>
            <h2 className={styles.tossrendstext}>In Recent Matches :-</h2>
            <p className={styles.venueinfo}>
              At this venue in the last 10 matches
            </p>
          </div>
          <div className={styles.infocontainer}>
            <div className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>Last {venueStats?.total_matches} Matches </b>
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                />
              </div>
            </div>
            <div className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>Batting First </b>({venueStats?.wins_batting_first} Wins in{" "}
                  {venueStats?.total_matches} matches)
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${
                      (venueStats?.wins_batting_first /
                        venueStats?.total_matches) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
            <div className={styles.statblock}>
              <div className={styles.statdetail}>
                <span>
                  <b>Chasing </b>({venueStats?.wins_chasing} Wins in{" "}
                  {venueStats?.total_matches} matches)
                </span>
              </div>
              <div className={styles.progressbar}>
                <div
                  className={styles.progress1}
                  style={{
                    width: `${
                      (venueStats?.wins_chasing / venueStats?.total_matches) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.tossrends}>
            <h2 className={styles.tossrendstext}>
              Frequent caption and vice caption appearances on this venue :-
            </h2>
            <p className={styles.venueinfo}>According to IPL 2024</p>
          </div>

          <VenueStatsBox topPlayers={topPlayers} />

          {team_matches?.response?.items?.slice(0, 5)?.map((match, index) => {
            return (
              <Link
                href={`/${currentPath}/venue-overview/team-a/match-overview-${match?.match_id}-${match?.teamb?.team_id}`}
                key={index}
              >
                <div className={styles.announcementcontent}>
                  <div className={styles.lines1} />
                  <div className={styles.announcement}>
                    {new Date(match?.date_start_ist).toLocaleDateString(
                      "en-IN"
                    )}
                  </div>
                  <div className={styles.lines1} />
                </div>
                <div className={styles.livecenter}>
                  <div className={styles.mathlive}>
                    <div className={styles.Livematchtab}>
                      <div className={styles.teams}>
                        <div className={styles.team}>
                          <Image
                            height={20}
                            width={20}
                            src={match?.teama?.logo_url}
                            alt=""
                          />
                          {match?.teama?.short_name}
                        </div>
                        <div className={styles.matchdetails}>
                          <div className={styles.whichmatch}>
                            {match?.competition?.abbr}
                          </div>
                          <div className={styles.livetext}>
                            {match?.status_note || match?.status_str}
                          </div>
                        </div>
                        <div className={styles.team}>
                          <Image
                            height={20}
                            width={20}
                            src={match?.teamb?.logo_url}
                            alt=""
                          />
                          {match?.teamb?.short_name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default page;
