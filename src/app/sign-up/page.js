"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./signUp.module.css";
import Input from "@/components/Input";
import { CiMail, CiMobile1, CiUser } from "react-icons/ci";
import { PiKeyholeThin } from "react-icons/pi";
import Link from "next/link";
import axios from "axios";

const register = async (phone) => {
  try {
    const res = await axios.post(
      "https://hammerhead-app-jkdit.ondigitalocean.app/register",
      {
        phoneNumber: "+918307211570", // Use the `phone` parameter here
        // otp: "047384",
      }
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error requesting OTP:",
      error.response?.data || error.message
    );
  }
};

const verifyOTP = async (phone) => {
  try {
    const res = await axios.post(
      "https://hammerhead-app-jkdit.ondigitalocean.app/verify-registration-otp",
      {
        email: "loda@gandme.deepakke",
        username: "deepak DC",
        phoneNumber: "+918307211570",
        otp: "397248",
      }
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error requesting OTP:",
      error.response?.data || error.message
    );
  }
};

const handleSubmit = async () => {
  const data = await verifyOTP();
  console.log(data, "dataa");
};

const Page = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <div className={styles.container}>
        <Image
          src={"/static/logo.svg"}
          width={100}
          height={20}
          className={styles.logo}
          alt=""
        />
        <div className={styles.title}>Welcome to CricketAddictor</div>
        <div className={styles.subTitle}>
          Login or Sign up to access your account
        </div>
        <div className={styles.mainArea}>
          <div className={styles.pageTypeBtn}>
            <Link href="/login" className={styles.btn}>
              Login
            </Link>
            <Link href="/sign-up" className={styles.btn}>
              Sign up
            </Link>
          </div>

          <div className={styles.form}>
            <Input
              onChange={handlePhoneNumberChange}
              value={phone}
              type="text"
              placeholder="Enter phone number"
              icon={CiMobile1}
            />
            <Input
              onChange={handlePhoneNumberChange}
              value={username}
              type="text"
              placeholder="Enter username"
              icon={CiUser}
            />
            <Input
              onChange={handlePhoneNumberChange}
              value={email}
              type="text"
              placeholder="Enter email"
              icon={CiMail}
            />
            <Input
              onChange={handlePhoneNumberChange}
              value={otp}
              type="password"
              placeholder="Enter OTP"
              icon={PiKeyholeThin}
            />
            <button
              onClick={() => handleSubmit()}
              className={styles.submitButton}
            >
              Send OTP
            </button>
          </div>

          <div className={styles.illu}>
            <Image
              src={"/static/login_illu1.png"}
              height={250}
              width={200}
              alt=""
              //   className={styles.illu}
            />
          </div>

          <p className={styles.privacyText}>
            By signing in with an account, you agree to SO&apos;s{" "}
            <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy.</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
