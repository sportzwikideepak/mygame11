"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import MatchesList from "./MatchesList";
import styles from "../../app/home.module.css";

const HomeMain = ({ data, live_matches, completed_matches }) => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [hydrated, setHydrated] = useState(false);
  const [category, setCategory] = useState("all");
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");
  const [userDetails, setUserDetails] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);

  console.log(userDetails,"usersdetails")


  useEffect(() => {
    // Retrieve user details from localStorage or API
    const user = JSON.parse(localStorage.getItem("usersp"));
    setUserDetails(user);

    if (user?.trial_end_date) {
      const today = new Date();
      const endDate = new Date(user.trial_end_date);
      const difference = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

      if (difference > 0) {
        setDaysLeft(difference);
      } else {
        setDaysLeft("expired");
      }
    }
  }, []);
  
  
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "completed") {
      setActiveTab("completed");
    } else if (type === "live") {
      setActiveTab("live");
    } else {
      setActiveTab("upcoming");
    }
    setHydrated(true); // Set hydrated to true after the component mounts
  }, [searchParams]);

  if (!hydrated) {
    // Render a loading state or skeleton while waiting for hydration
    return <div>Loading...</div>;
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTimeZoneChange = (e) => {
    setTimeZone(e.target.value);
  };

  const filterMatches = (matches) => {
    if (category === "all") {
      return matches;
    }
    return matches.filter((match) => match.competition.category === category);
  };

  const filteredMatches =
    activeTab === "upcoming"
      ? filterMatches(data)
      : activeTab === "live"
      ? filterMatches(live_matches)
      : filterMatches(completed_matches);

  const timeZones = [
    "UTC",
    "America/New_York",
    "Europe/London",
    "Asia/Kolkata",
    "Australia/Sydney",
    // Add more time zones as needed
  ];

  return (
    <div className={styles.container}>
      {/* <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <Image
            height={500}
            width={500}
            src="/static/logo2.svg"
            alt="logo"
            priority
          />
        </div>
        {userDetails && (
          <div className={styles.trialInfo}>
            {daysLeft === "expired" ? (
              <p className={styles.expiredText}>Trial has expired</p>
            ) : (
              <p className={styles.remainingText}>
                {daysLeft} day{daysLeft > 1 ? "s" : ""} left in trial
              </p>
            )}
          </div>
        )}
      </div> */}
      <div className={styles.rightSection}>
        <div className={styles.sticky}>
          <div className={styles.buttonContainer}>
            <a
              href="?type=upcoming"
              className={`${styles.button} ${
                activeTab === "upcoming" ? styles.active : ""
              }`}
            >
              Upcoming
            </a>
            <a
              href="?type=live"
              className={`${styles.button} ${
                activeTab === "live" ? styles.active : ""
              }`}
            >
              Live
            </a>
            <a
              href="?type=completed"
              className={`${styles.button} ${
                activeTab === "completed" ? styles.active : ""
              }`}
            >
              Completed
            </a>
            
            
          </div>
          <div className={styles.filterContainer}>
            <label htmlFor="categoryFilter" className={styles.filterLabel}>
              Filter by Category:
            </label>
            <select
              id="categoryFilter"
              value={category}
              onChange={handleCategoryChange}
              className={styles.dropdown}
            >
              <option value="all">All</option>
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
              <option value="women">Women</option>
            </select>
          </div>
          {activeTab === "upcoming" && (
            <div className={styles.filterContainer}>
              <label htmlFor="timeZoneFilter" className={styles.filterLabel}>
                Select Time Zone:
              </label>
              <select
                id="timeZoneFilter"
                value={timeZone}
                onChange={handleTimeZoneChange}
                className={styles.dropdown}
              >
                {timeZones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className={styles.matchesSection}>
          <MatchesList
            title={`${
              activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
            } Matches`}
            matches={filteredMatches}
            activeTab={activeTab}
            timeZone={timeZone}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
