"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./LiveSection.module.css";
import Nav from "../common/Nav";

const menu_items = [
  { id: 0, name: "Overview", url: "/" },
  { id: 1, name: "Data & Analytics", url: "data-analytics" },
  { id: 2, name: "Scorecard", url: "scorecard" },
  { id: 3, name: "Squad", url: "squads" },
  { id: 4, name: "Comparison", url: "comparison" },
  { id: 5, name: "Key Insight", url: "key-insight" },
  { id: 6, name: "PL Labs", url: "pl-labs" },
  { id: 7, name: "Custom team", url: "custom-team" },
];

const LiveSection = ({ match_info, active, currentUrl }) => {
  const router = useRouter();
  const [pollId, setPollId] = useState(null); // State to store pollId
  const [userId, setUserId] = useState(null); // State for user_id
  const [pollResults, setPollResults] = useState(null); // State to store poll results

  const fetchPollResults = async () => {
    try {
      const response = await fetch(
        `https://hammerhead-app-jkdit.ondigitalocean.app/api/polls/${pollId}/results`
      );
      const data = await response.json();

      if (response.ok) {
        setPollResults(data.results); // Correctly set results array
      } else {
        console.error("Error fetching poll results:", data.message);
      }
    } catch (error) {
      console.error("Error fetching poll results:", error.message);
    }
  };

  useEffect(() => {
    const fetchPollId = async () => {
      try {
        const response = await fetch(
          `https://hammerhead-app-jkdit.ondigitalocean.app/api/matches/${match_info.match_id}/poll`
        );
        const data = await response.json();
        if (response.ok) {
          setPollId(data.pollId); // Set pollId in state
        } else {
          console.error("Failed to fetch pollId:", data.message);
        }
      } catch (error) {
        console.error("Error fetching pollId:", error.message);
      }
    };

    if (match_info?.match_id) {
      fetchPollId();
    }

    // Get user_id from localStorage
    const user =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("usersp"))
        : null;
    setUserId(user?.user_id); // Set user_id in state
  }, [match_info]);

  // // Get user_id from localStorage
  // const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("usersp")) : null;
  // const userId = user?.user_id; // Correctly access user_id from the usersp object
  // console.log(userId, "userid12");
  // Updated submitVote to use match_info.pollId correctly and validate pollId
  const submitVote = async (team) => {
    console.log("submitVote triggered with team:", team); // Debug log

    // Check if pollId is available
    if (!pollId) {
      alert("Poll ID is not available. Please try again later.");
      return;
    }

    // Determine the team_id based on the selected team
    const team_id =
      team === match_info.teama.short_name
        ? match_info.teama.team_id
        : match_info.teamb.team_id;

    if (!team_id) {
      alert("Team ID is not available for the selected team.");
      return;
    }

    try {
      // Submit the vote
      const response = await fetch(
        `https://hammerhead-app-jkdit.ondigitalocean.app/api/polls/${pollId}/vote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ team_id, user_id: userId }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Vote successfully submitted
        alert("Vote submitted successfully!");
        fetchPollResults(); // Fetch and update poll results
      } else if (
        response.status === 400 &&
        result.message === "You have already voted."
      ) {
        // Handle case when the user has already voted
        alert("You have already voted for this poll.");
        fetchPollResults(); // Fetch existing poll results to display
      } else {
        // Handle other errors
        alert(result.message || "Error submitting vote.");
      }
    } catch (error) {
      console.error("Error submitting vote:", error.message);
      alert("An error occurred while submitting your vote. Please try again.");
    }
  };

  // Added check for user ID and match_info data to ensure required data is present
  if (!userId) {
    console.error("User ID is missing. Ensure the user is logged in.");
  }
  if (!match_info || !match_info.teama || !match_info.teamb) {
    console.error(
      "Match info or team data is missing. Unable to render component."
    );
  }

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <>
      <div className={styles.live1}>
        <div className={styles.container}>
          <div className={styles.liveMain}>
            {/* Match Card */}
            <div className={styles.card}>
              <div className={styles.header1}>
                <span className={styles.live}>{match_info?.status_str}</span>
                <span className={styles.league}>
                  - {match_info?.competition?.title}
                </span>
              </div>

              {/* Team A Details */}
              <div className={styles.matchDetails}>
                <div className={styles.teamInfo}>
                  <Image
                    height={20}
                    width={20}
                    src={match_info?.teama?.logo_url}
                    alt="team1"
                    className={styles.teamIcon}
                  />
                  <span className={styles.teamName}>
                    {match_info?.teama?.name}
                  </span>
                </div>
                <div className={styles.scoreDetails}>
                  <span className={styles.overs}>
                    ({match_info?.teama?.overs} ov)
                  </span>
                  <span className={styles.score}>
                    {match_info?.teama?.scores}
                  </span>
                </div>
              </div>

              {/* Team B Details */}
              <div className={styles.matchDetails}>
                <div className={styles.teamInfo}>
                  <Image
                    height={20}
                    width={20}
                    src={match_info?.teamb?.logo_url}
                    alt="team2"
                    className={styles.teamIcon}
                  />
                  <span className={styles.teamName}>
                    {match_info?.teamb?.name}
                  </span>
                </div>
                <div className={styles.scoreDetails}>
                  <span className={styles.overs}>
                    ({match_info?.teamb?.overs} ov)
                  </span>
                  <span className={styles.score}>
                    {match_info?.teamb?.scores}
                  </span>
                </div>
              </div>
            </div>

            {/* Who Will Win Poll */}
            <div className={styles.poll}>
              <div className={styles.question}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Winimogi.svg"
                  alt="emoji"
                  className={styles.emoji}
                />
                <span className={styles.pollText}>WHO WILL WIN?</span>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.voteButton}
                  onClick={() => submitVote(match_info?.teama?.short_name)}
                >
                  {match_info?.teama?.short_name}
                </button>
                <button
                  className={styles.voteButton}
                  onClick={() => submitVote(match_info?.teamb?.short_name)}
                >
                  {match_info?.teamb?.short_name}
                </button>
              </div>
              {/* Poll Results */}
              {pollResults && pollResults.length > 0 && (
                <div className={styles.compactResults}>
                  {pollResults.map((result) => {
                    const isTeamA = result.team_id === match_info?.teama?.team_id;
                    const teamName = isTeamA
                      ? match_info?.teama?.short_name
                      : match_info?.teamb?.short_name;

                    return (
                      <div
                        key={result.team_id}
                        style={{
                          color: isTeamA ? "blue" : "red",
                          fontWeight: "bold",
                          marginTop: "8px",
                          fontSize: "14px",
                        }}
                      >
                        {teamName}: {result.percentage}% votes
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Key Prediction Link with match_id */}
            <div className={styles.poll}>
              <div className={styles.question}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Winimogi.svg"
                  alt="emoji"
                  className={styles.emoji}
                />
                <span
                  className={styles.pollText}
                  onClick={() =>
                    handleRedirect(
                      `/key-prediction?match_id=${match_info?.match_id}`
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  KEY PREDICTION IN TWO MINUTES
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <Nav menu={menu_items} active={active} currentUrl={currentUrl} />
      </div>
    </>
  );
};

export default LiveSection;
