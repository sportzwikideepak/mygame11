"use client";
import React, { useState } from "react";
import styles from "./scheduleMain.module.css";
import Image from "next/image";
import ScheduleFilters from "./ScheduleFilters";
import MatchCard from "./MatchCard";
import Link from "next/link";

const ScheduleMain = ({ matches }) => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const matchesGroupedByDate = matches?.response?.items?.reduce((acc, curr) => {
    const dateStr = new Date(curr.date_start_ist).toDateString();
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(curr);
    return acc;
  }, {});

  const allFormats = [
    ...new Set(matches?.response?.items?.map((match) => match.format_str)),
  ];

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredMatchesGroupedByDate = Object.entries(
    matchesGroupedByDate
  ).reduce((acc, [date, matches]) => {
    const filteredMatches = matches.filter((match) => {
      const matchesFormat =
        !selectedFormat || match.format_str === selectedFormat;
      const matchesSearchQuery =
        match.title.toLowerCase().includes(searchQuery) ||
        match.short_title.toLowerCase().includes(searchQuery) ||
        match.subtitle.toLowerCase().includes(searchQuery);

      return matchesFormat && matchesSearchQuery;
    });

    if (filteredMatches.length > 0) {
      acc[date] = filteredMatches;
    }
    return acc;
  }, {});

  return (
    <>
      <div>
        <ScheduleFilters
          formats={allFormats}
          selectedFormat={selectedFormat}
          onFormatChange={handleFormatChange}
          onSearch={handleSearchChange}
        />

        <div className={`${styles.Totalcontanor}`}>
          <div className={`${styles.allContainor}`}>
            <div className={`${styles.leftcontainor}`}>
              {Object?.entries(filteredMatchesGroupedByDate)?.map(
                ([date, matches]) => (
                  <div className={styles.container} key={date}>
                    <h2 className={styles.title}>{date}</h2>
                    <div className={styles.grid}>
                      {matches?.map((match, index) => (
                        <MatchCard key={index} match={match} />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className={styles.rightcontainor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMain;
