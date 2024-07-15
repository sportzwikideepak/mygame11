"use client";
import React, { useState, useEffect } from "react";
import HomeHeader from "./HomeHeader";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import MatchDetailsCard from "./MatchDetailsCard";
import styles from "../app/home.module.css";
import FiltersTabCompleted from "./FiltersTabCompleted";

const CompletedPageMain = ({ data }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selections, setSelections] = useState({
    teams: [],
    series: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterResults(value);
  };
  //   console.log(data, "sdikonk");

  const filterResults = (value) => {
    const filtered = data.filter((item) => {
      //   console.log(item);
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    // console.log(filtered, "938h08ip");
    setFilteredResults(filtered);
  };

  const handleSearchActive = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSelectionChange = (type, id, isChecked) => {
    setSelections((prevSelections) => {
      const newSelections = { ...prevSelections };
      const currentSelections = new Set(newSelections[type]);

      if (isChecked) {
        currentSelections.add(String(id));
      } else {
        currentSelections.delete(String(id));
      }

      newSelections[type] = Array.from(currentSelections);
      return newSelections;
    });
  };

  const teamMap = new Map();

  data.forEach((match) => {
    // Process team A
    if (match?.teama?.team_id && !teamMap.has(match.teama.team_id)) {
      teamMap.set(match.teama.team_id, {
        tid: match.teama.team_id,
        title: match.teama.name,
        logo_url: match.teama.logo_url,
      });
    }

    // Process team B
    if (match?.teamb?.team_id && !teamMap.has(match.teamb.team_id)) {
      teamMap.set(match.teamb.team_id, {
        tid: match.teamb.team_id,
        title: match.teamb.name,
        logo_url: match.teamb.logo_url,
      });
    }
  });

  const teamList = Array.from(teamMap.values());

  const seriesMap = new Map();

  data?.forEach((match) => {
    const cid = match?.competition?.cid;
    if (cid && !seriesMap.has(cid)) {
      seriesMap.set(cid, {
        cid: cid,
        title: match?.competition?.title,
        datestart: match?.competition?.datestart,
        dateend: match?.competition?.dateend,
      });
    }
  });

  // console.log(data, "9gub09hion9u0jio");

  const seriesList = Array.from(seriesMap.values());

  const filteredData = data.filter((match) => {
    const matchesTeamFilter =
      selections.teams.length > 0 &&
      (selections.teams.includes(String(match?.teama?.team_id)) ||
        selections.teams.includes(String(match?.teamb?.team_id)));

    const matchesSeriesFilter =
      selections.series.length > 0 &&
      selections.series.includes(String(match?.competition?.cid));

    return (
      (selections.teams.length === 0 || matchesTeamFilter) &&
      (selections.series.length === 0 || matchesSeriesFilter)
    );
  });

  const clearFilters = () => {
    setSelections({
      teams: [],
      series: [],
    });
  };

  return (
    <>
      {isSearchActive == false ? (
        <div
          style={{ paddingBottom: "70px" }}
          className={`${styles.container}`}
        >
          <HomeHeader active="completed" />
          <div className={`${styles.mainContent}`}>
            <Carousel />
            <div onClick={() => handleSearchActive()} className="search">
              <SearchBar />
            </div>
            {filteredData?.map((match) => (
              <MatchDetailsCard
                key={match.match_id}
                status={match.status}
                startTime={match.timestamp_start}
                team_a_name={match.teama.short_name}
                team_b_name={match.teamb.short_name}
                team_a_logo={match.teama.logo_url}
                team_b_logo={match.teamb.logo_url}
                subtitle={match.subtitle}
                format_str={match.format_str}
                short_title={match.short_title}
                season={match.competition.season}
                status_str={match.status_note}
                match_id={match.match_id}
                showHeadTitle={false}
              />
            ))}
            );
          </div>
        </div>
      ) : (
        <FiltersTabCompleted
          handleSearchActive={handleSearchActive}
          teamList={teamList}
          seriesList={seriesList}
          handleSelectionChange={handleSelectionChange}
          selections={selections}
          seriesFilterActive={selections.series.length > 0}
          teamsFilterActive={selections.teams.length > 0}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
          filteredResults={filteredResults}
          clearFilters={clearFilters}
        />
      )}
    </>
  );
};

export default CompletedPageMain;
