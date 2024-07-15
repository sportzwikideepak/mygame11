"use client";
import React, { useState } from "react";
import PlayerVsPlayerMain from "./PlayerVsPlayerMain";
import PlayerVsTeamMain from "./PlayerVsTeamMain";

const ComparisonMain = ({ player_list, data }) => {
  const [selectedComparisonType, setComparisonType] = useState(0);

  const handleComparisonTypeChange = (type) => {
    setComparisonType(type);
  };

  return (
    <>
      {selectedComparisonType == 0 ? (
        <PlayerVsPlayerMain
          selected_comparison_type={selectedComparisonType}
          set_comparison_type_handler={handleComparisonTypeChange}
          player_list={player_list}
          data={data}
        />
      ) : (
        <PlayerVsTeamMain
          selected_comparison_type={selectedComparisonType}
          set_comparison_type_handler={handleComparisonTypeChange}
          player_list={player_list}
          data={data}
        />
      )}
    </>
  );
};

export default ComparisonMain;
