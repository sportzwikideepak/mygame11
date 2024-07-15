import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import TableInner from "./TableInner";

const PerfTable = (props) => {
  return (
    <>
      <div>
        {props?.team_a_previous_matches?.length > 0 && (
          <>
            <div className={`${styles.header2}`}>
              <h2>Recent Performance</h2>
              <span>(Last 5 Matches)</span>
            </div>
            <TableInner
              teamName={props?.team_a_name}
              logo={props?.team_a_logo}
              previous_matches={props?.team_a_previous_matches}
            />
            <TableInner
              teamName={props?.team_b_name}
              logo={props?.team_b_logo}
              previous_matches={props?.team_b_previous_matches}
            />
          </>
        )}
      </div>
    </>
  );
};

export default PerfTable;
