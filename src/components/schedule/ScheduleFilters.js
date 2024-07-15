import Image from "next/image";
import React, { useState } from "react";
import styles from "./scheduleMain.module.css";

const ScheduleFilters = ({
  formats,
  selectedFormat,
  onFormatChange,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <div className={styles.searchsection}>
        <div className={styles.Headcontent}>
          <div className={styles.searchbar}>
            <input
              type="text"
              placeholder="Search by tours and teams..."
              className={styles.searchinput}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className={styles.searchbutton}>
              <Image
                height={20}
                width={20}
                src="/static/Schedule-Search.svg"
                alt="search"
              />
            </button>
          </div>
          <div className={styles.filtertab}>
            <div className={styles.filterbuttons}>
              <button className={`${styles.button} ${styles.active}`}>
                All
              </button>
              <button className={styles.button}>Cricket</button>
              <button className={styles.button}>Football</button>
              <button className={styles.button}>Kabaddi</button>
              <button className={styles.button}>WWE</button>
              <button className={styles.button}>Hockey</button>
              <button className={styles.button}>Basketball</button>
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropdownbutton}>
                <span>Tours</span>
                <Image
                  height={20}
                  width={20}
                  src="/static/Tour-Icon.svg"
                  alt="dropdown"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infosection}>
        <div className={styles.headerbottom}>
          <div className={styles.categorybuttons}>
            {formats?.map((format) => (
              <button
                key={format}
                className={`${styles.categorybutton} ${
                  selectedFormat === format
                    ? `${styles.active} ${styles.formatActive}`
                    : ""
                }`}
                onClick={() => onFormatChange(format)}
              >
                {format}
              </button>
            ))}
          </div>
          <div className={styles.datepicker}>
            <button className={styles.datebutton}>
              <Image
                height={20}
                width={20}
                src="/static/Date-Box.svg"
                alt="calendar"
              />
              <span>Today 06 May</span>
              <Image
                height={20}
                width={20}
                src="/static/Date-Icon.svg"
                alt="dropdown"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleFilters;
