"use client";
import React, { useCallback } from "react";
import styles from "../app/home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleMenu } from "@/lib/features/menu/menuSlice";
import { throttle } from "lodash";

const BottomNav = () => {
  const dispatch = useAppDispatch();
  const currentMenuStatus = useAppSelector((state) => state?.menu?.value);

  const handleMenuOpenClose = useCallback(
    throttle(() => {
      dispatch(toggleMenu(!currentMenuStatus));
    }, 250),
    []
  );

  return (
    <>
      <div className={styles.bottomnavbar}>
        <Link href="/" className={styles.nonactivebottom}>
          <Image height={10} width={10} src="/static/Homesvg.svg" alt="" />
          <span>HOME</span>
        </Link>
        <Link href="#" className={styles.nonactivebottom}>
          <Image height={10} width={10} src="/static/Wallet.svg" alt="" />
          <span>WALLET</span>
        </Link>
        <Link href="#" className={styles.nonactivebottom}>
          <Image height={10} width={10} src="/static/Subscription.svg" alt="" />
          <span>SUBSCRIPTION</span>
        </Link>
        <Link href="#" className={styles.nonactivebottom}>
          <Image height={10} width={10} src="/static/Privacy.svg" alt="" />
          <span>PRIVACY POLICY</span>
        </Link>
        <div
          onClick={() => handleMenuOpenClose()}
          className={styles.nonactivebottom}
        >
          <Image height={10} width={10} src="/static/More.svg" alt="" />
          <span>MORE</span>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
