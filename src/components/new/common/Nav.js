import React from "react";
import styles from "../overview/LiveSection.module.css";
import Link from "next/link";

const Nav = ({ menu, active, currentUrl }) => {
  return (
    <>
      <div className={styles.linksButton}>
        <div className={styles.buttonContainer}>
          {menu?.map((item) => {
            return (
              <>
                <Link href={`/${currentUrl}/${item?.url}`}>
                  <button
                    key={item?.id}
                    className={`${styles.button} ${
                      active == item?.id ? styles.firstButton : ""
                    }`}
                  >
                    {item?.name}
                  </button>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
