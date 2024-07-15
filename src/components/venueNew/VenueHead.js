import React from "react";
import Image from "next/image";
import styles from "../../app/[match-details]/venue-overview/venueOverview.module.css";
import Link from "next/link";

const VenueHead = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <Link href={`/${props?.currentPath}`}>
          <button className={styles.backbutton}>
            <span className={styles.arrow}>
              <Image
                height={20}
                width={20}
                src="/static/Backbutton.svg"
                alt=""
              />
            </span>
          </button>
        </Link>
        <div className={styles.title}>
          Venue &amp; Pitch Report
          <span>{props?.match_short_title}</span>
        </div>
        <div className={styles.placeholder} />
      </div>

      <div className={styles.venuecontent}>
        <Image height={20} width={20} src="/static/Venue IMG.svg" alt="" />
        <span>{props.match_venue}</span>
      </div>
    </>
  );
};

export default VenueHead;
