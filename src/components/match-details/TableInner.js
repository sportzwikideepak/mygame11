"use client";
import React, { useState } from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";

const TableInner = (props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const WinLossStatusArray =
    props?.previous_matches?.map(
      (match) => match?.result.charAt(0).toUpperCase() || "-"
    ) || [];

  const handleAccordionOpen = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={`${styles.teamperformance}`}>
        <div
          onClick={() => handleAccordionOpen()}
          className={`${styles.toggelcontent}`}
        >
          <div className={`${styles.leftsidecontent}`}>
            <Image
              height={20}
              width={20}
              src={props?.logo}
              alt={props?.teamName}
              className={`${styles.teamflag}`}
            />
            <span className={`${styles.teamname}`}>{props?.teamName}</span>
          </div>
          <div className={`${styles.results}`}>
            {WinLossStatusArray?.map((item, index) => {
              return (
                <>
                  {item === "W" ? (
                    <span
                      key={index}
                      className={`${styles.result} ${styles.win}`}
                    >
                      W
                    </span>
                  ) : (
                    <span
                      key={index}
                      className={`${styles.result} ${styles.lose}`}
                      style={{ padding: "4px 11px" }}
                    >
                      L
                    </span>
                  )}
                </>
              );
            })}
            <Image height={20} width={20} src="/static/dropdown.svg" alt="" />
          </div>
        </div>
        {isAccordionOpen && (
          <div className={`${styles.collapse} ${styles.content}`}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>Opponent</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
                {props?.previous_matches?.map((match, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {match?.opponent_name}
                        <span style={{ color: "#e4453b" }}>
                          ({match?.status_note})
                        </span>
                      </td>
                      <td>Match {match?.match_number}</td>
                      <td>
                        {new Date(match?.date_start).toLocaleDateString(
                          "en-IN"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TableInner;
