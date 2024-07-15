"use client";
import React from "react";
import StatsPlaygroundDataVisual from "./StatsPlaygroundDataVisual";
import { useSearchParams } from "next/navigation";

const StatsPlaygroundDataMain = (props) => {
  const searchParams = useSearchParams();
  const statType = searchParams.get("statType");
  const timeFrame = searchParams.get("timeFrame");

  // console.log(props, "7igbibk");
  return (
    <>
      {statType === "TotalFantasyPoints" ? (
        <StatsPlaygroundDataVisual
          dataType="Total Fantasy Points"
          data={props?.TotalFantasyPointsStats}
          stats_type="total_points"
          stats_type_suffix="P"
          divisor={200}
        />
      ) : statType === "DreamTeamAppearances" ? (
        <StatsPlaygroundDataVisual
          dataType="Dream Team Appearance"
          data={props?.DreamTeamAppearancesStats}
          stats_type="dream_team_appearances"
          stats_type_suffix="T"
          divisor={20}
        />
      ) : statType === "WicketsTaken" ? (
        <StatsPlaygroundDataVisual
          dataType="Wicket Taken stats"
          data={props?.WicketsTakenStats}
          stats_type="wickets_taken"
          stats_type_suffix="W"
          divisor={20}
        />
      ) : statType === "RunsScored" ? (
        <StatsPlaygroundDataVisual
          dataType="Runs scored stats"
          data={props?.RunsScoredStats}
          stats_type="total_runs"
          stats_type_suffix="Runs"
          divisor={300}
        />
      ) : statType === "StrikeRate" ? (
        <StatsPlaygroundDataVisual
          dataType="Strike rate stats"
          data={props?.StrikeRateStats}
          stats_type="average_strike_rate"
          stats_type_suffix="SR"
          divisor={500}
        />
      ) : statType === "EconomyRate" ? (
        <StatsPlaygroundDataVisual
          dataType="Average economy rate stats"
          data={props?.EconomyRateStats}
          stats_type="average_economy_rate"
          stats_type_suffix="ECO"
          divisor={20}
        />
      ) : statType === "FieldingPoints" ? (
        <StatsPlaygroundDataVisual
          dataType="Fielding points stats"
          data={props?.FieldingPointsStats}
          stats_type="fielding_points"
          stats_type_suffix="P"
          divisor={50}
        />
      ) : statType === "AverageFantasyPoints" ? (
        <StatsPlaygroundDataVisual
          dataType="average fantasy points stats"
          data={props?.AverageFantasyPointsStats}
          stats_type="avg_fantasy_points"
          stats_type_suffix="P"
          divisor={400}
        />
      ) : null}
    </>
  );
};

export default StatsPlaygroundDataMain;
