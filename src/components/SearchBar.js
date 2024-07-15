import React from "react";
import Image from "next/image";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={styles.searchtab}>
        <div className={styles.searchleft}>
          <Image height={20} width={20} src="/static/Search.svg" alt="" />
          <span>Search Matches</span>
        </div>
        <div className={styles.searchright}>
          <Image height={20} width={20} src="/static/Filter.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
