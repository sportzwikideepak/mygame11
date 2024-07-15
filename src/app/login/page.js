"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./login.module.css";

const Page = () => {
  return (
    <>
      <div className={styles.fullscreencontainer}>
        <div className={styles.cardcontainer}>
          <div className={styles.formcontainer}>
            <div className={styles.branding}>
              <Image height={20} width={20} src="/static/logo.svg" alt="" />
            </div>
            <h2>Welcome to CricketAddictor</h2>
            <p className={styles.introtext}>
              Login or Sign up to access your account
            </p>
            <form>
              <div className={styles.inputgroup}>
                <label className={styles.Textcontent}>Phone No.</label>
                <input
                  type="text"
                  placeholder={+91}
                  className={styles.inputfield}
                />
                <div className={styles.sendotp}>
                  <a href="#" className={styles.link1}>
                    Send OTP
                  </a>
                </div>
              </div>
              <div className={styles.inputgroup}>
                <label className={styles.Textcontent}>OTP</label>
                <input
                  type="password"
                  placeholder="****"
                  className={styles.inputfield}
                />
              </div>
              <div className={styles.submittab}>
                <button type="submit" className={styles.submitbutton}>
                  Login
                </button>
              </div>
            </form>
            <p className={styles.accounttext}>
              Already have an account?
              <a href="#" className={styles.link}>
                Create Account
              </a>
            </p>
          </div>
          <div className={styles.imagecontainer}>
            <Image
              height={20}
              width={20}
              src="/static/Login Image.svg"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
