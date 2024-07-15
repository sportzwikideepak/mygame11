"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const getColorByRole = (role) => {
  switch (role) {
    case "bowl":
      return "#4CAF50"; // Green
    case "bat":
      return "#2196F3"; // Blue
    case "all":
      return "#FFC107"; // Amber
    default:
      return "#9E9E9E"; // Grey for undefined roles
  }
};

const OverviewFantasyStats = (props) => {
  const [chartHeight, setChartHeight] = useState("60vh");

  useEffect(() => {
    const match = props?.fantasyPoints.filter(
      (match) => match?.match_id == props?.matchId
    );
    const itemsCount = match?.[0]?.fantasyPoints?.length || 0;
    const minHeightPerItem = 50;
    const calculatedHeight = Math.max(
      itemsCount * minHeightPerItem,
      window.innerHeight * 0.5
    );
    setChartHeight(`${calculatedHeight}px`);
  }, [props.fantasyPoints, props.matchId]);

  const match = props?.fantasyPoints.filter(
    (match) => match?.match_id == props?.matchId
  );
  const transformedData = match?.[0]?.fantasyPoints?.map((player) => ({
    name: `${player?.player_short_name}
     (${player?.playing_role.toUpperCase()} - ${player?.team_short_name})`,
    points: player?.points,
    color: getColorByRole(player?.playing_role),
    // color: "#649D5D",
  }));

  const chartSetting = {
    margin: {
      left: 100,
    },
    xAxis: [
      {
        label: "Player",
        style: { textAnchor: "end", fontSize: "0.75rem" },
      },
    ],
  };

  const valueFormatter = (value) => `${value} pts`;

  return (
    <div className="w-full" style={{ height: chartHeight, overflowX: "auto" }}>
      <BarChart
        dataset={transformedData}
        yAxis={[
          {
            scaleType: "band",
            dataKey: "name",
            padding: { top: 10, bottom: 10 },
          },
        ]}
        series={[
          {
            dataKey: "points",
            label: "Fantasy Points",
            valueFormatter,
            color: "rgba(220, 38, 38,0.7)",
          },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
};

export default OverviewFantasyStats;
