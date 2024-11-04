"use client";
import React from "react";
import Image from "next/image";
import styles from "./head.module.css";
import { usePathname, useRouter } from "next/navigation";

const HeadNav = ({ title = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  const copyText = (currentUrl) => {
    const text = `https://demo.oncric.com${currentUrl}/`;
    navigator.clipboard.writeText(text);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <button className={styles.iconButton} onClick={handleBack}>
          <Image
            height={20}
            width={20}
            src="/static/BACK.svg"
            alt="left arrow"
          />
        </button>
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
  );
};

export default HeadNav;
