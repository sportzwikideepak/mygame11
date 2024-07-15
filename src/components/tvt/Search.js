import React from "react";
import styles from "../../app/[match-details]/tvt/teamvsteam.module.css";

const Search = () => {
  return (
    <>
      <div className={styles.searchcontainer}>
        <div className={styles.searchtab}>
          <input
            type="text"
            className={styles.searchinput}
            placeholder="Search..."
          />
          <button className={styles.searchbtn}>
            <img src="/CricketaddictorDreamTeam/Upcoming/Search.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
