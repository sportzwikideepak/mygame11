"use client";
import React from "react";
import Image from "next/image";
import styles from "./head.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeadNav = ({ title = "", prevUrl = "/" }) => {
  const pathname = usePathname();
  const copyText = (currentUrl) => {
    const text = `https://demo.oncric.com${currentUrl}/`;
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.main}>
          <Link href={prevUrl}>
            <button className={styles.iconButton}>
              <Image
                height={20}
                width={20}
                src="/static/BACK.svg"
                alt="left arrow"
              />
            </button>
          </Link>
          <span className={styles.title}>{title}</span>
          <button
            onClick={() => copyText(pathname)}
            className={styles.iconButton}
          >
            <Image
              height={20}
              width={20}
              src="/static/Share.svg"
              alt="share icon"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeadNav;
