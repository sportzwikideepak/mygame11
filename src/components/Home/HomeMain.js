import React from "react";
// import Carousel from "../Carousel";
// import HomeHeader from "../HomeHeader";
// import MatchDetailsCard from "../MatchDetailsCard";
import styles from "../../app/home.module.css";
// import NavMenu from "./NavMenu";
// import { useAppSelector } from "@/lib/hooks";
// import { filterMatchBySeries } from "@/utils/filterMatchBySeries";
import Image from "next/image";
import LiveCarousal from "../new/home/LiveCarousal";
import VideoGallery from "../new/home/VideoGallery";
import FantasyVideo from "../new/common/FantasyVideo";

const HomeMain = ({ data, completed_matches }) => {
  console.log(completed_matches,data,"safdjfafdfasjdfasfdhjfsajdfjsafdjfsajfdjasfdsjh")
  return (
    <>
      <div>
        <div className={styles.background}>
          <div className={styles.Headcontent}>
            <div className={styles.topbar}>
              <div className={styles.leftsection}>
                <div className={styles.iconbg}>
                  <Image
                    height={20}
                    width={20}
                    src="static/Company Logo.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.rightsection}>
                <Image
                  height={20}
                  width={20}
                  src="static/Language Icon.svg"
                  alt="globe"
                />
                <Image
                  height={20}
                  width={20}
                  src="static/Notification Icon.svg"
                  alt="bell"
                />
                <Image
                  height={20}
                  width={20}
                  src="static/Search Icon.svg"
                  alt="search"
                />
                <Image
                  height={20}
                  width={20}
                  src="static/Login Icon.svg"
                  alt="user"
                />
              </div>
            </div>
            <div className={styles.buttons}>
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
            <div className={styles.content}>
              <div className={styles.matchinfo}>
                <p className={styles.league}>
                  Cricket - Indian premier league 2024
                </p>
                <h1 className={styles.matchtitle}>
                  CSK <span className={styles.versus}>vs</span> DC
                </h1>
                <button className={styles.livebutton}>
                  <div className={styles.iconplay}>
                    <Image
                      height={20}
                      width={20}
                      src="static/Banner link icon.svg"
                      alt="play"
                      className={styles.playicon}
                    />
                  </div>
                  <span>Live Score</span>
                </button>
                <p className={styles.schedule}>
                  2/5
                  <a href="#">Schedule → </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ...........Live-Section........... */}
        <div className={styles.live1}>
          <LiveCarousal data={data} completed_matches={completed_matches} />
        </div>
        {/* .........Main-Content......... */}
        <div className={styles.maincontent}>
          <VideoGallery title="LIVE STREAMING TOURS (POPULAR)" />
          <VideoGallery title="TRENDING SHORTS" />

          <FantasyVideo />
          <FantasyVideo />

          <FantasyVideo />
        </div>
      </div>

      {/* Old code */}
      {/* {currentMenuStatus === true ? (
        <NavMenu />
      ) : (
        <div className={`${styles.container}`}>
          <HomeHeader active="live" />
          <div className={`${styles.mainContent}`}>
            <Carousel />
            <div className={styles.livetabs}>
              {props?.data?.map((match) => (
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
                  status_str={match.status_str}
                  match_id={match.match_id}
                  showHeadTitle={true}
                />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default HomeMain;
