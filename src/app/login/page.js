"use client"; // Ensures this component is client-side

import React, { useState, useEffect } from 'react';
import styles from './login.module.css'; // Assuming you have the styles defined
import Image from 'next/image';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [otp, setOtp] = useState('');
  const [sessionId, setSessionId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0); // Timer in seconds (starts at 0)
  const [resendAttempts, setResendAttempts] = useState(0); // Track resend attempts
  const [canResend, setCanResend] = useState(false); // Track when to show Resend OTP button

  // Initialize resend count from localStorage on component mount
  useEffect(() => {
    const attempts = localStorage.getItem('resendAttempts');
    if (attempts) {
      setResendAttempts(Number(attempts));
    }
  }, []);

  // Handle the timer countdown (only runs when timer > 0)
  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId); // Clear the interval on component unmount
    } else if (timer === 0 && sessionId) {
      setCanResend(true); // Allow Resend OTP after 30 seconds
    }
  }, [timer, sessionId]);

  // Function to handle sending OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Check if resend limit is reached
    if (resendAttempts >= 3) {
      setErrorMessage('You have reached the OTP resend limit for today.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/sendOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setSessionId(data.sessionId);
        setSuccessMessage('OTP sent successfully.');
        setTimer(30); // Start the timer for 30 seconds
        setCanResend(false); // Hide Resend OTP button
        setResendAttempts((prev) => {
          const newAttempts = prev + 1;
          localStorage.setItem('resendAttempts', newAttempts); // Store attempts in localStorage
          return newAttempts;
        });
      } else {
        setErrorMessage(data.message || 'Failed to send OTP.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while sending OTP.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle OTP verification
  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:8000/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('OTP verified successfully.');
      } else {
        setErrorMessage(data.message || 'Failed to verify OTP.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while verifying OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageColumn}>
        <div style={{ width: '50%' }}>
          <Image
            src="/static/logo2.svg" // Use a local path in the 'public' folder or an external URL
            alt="Background"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className={styles.formColumn}>
        <div className={styles.loginForm}>
          <div className={styles.h211}>LOGIN</div>
          <div className={styles.second11}>An OTP will be sent to this number.</div>
          
          {!sessionId ? (
            // Show send OTP form
            <form className={styles.form1} onSubmit={sendOtp}>
              <input
                className={styles.input01}
                placeholder="1 (702) 123-4567"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} // Update phone number state
                autoComplete="off"
                required
              />
              <button className={styles.loginBtn} type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          ) : (
            // Show verify OTP form
            <>
              <form className={styles.form1} onSubmit={verifyOtp}>
                <input
                  className={styles.input01}
                  placeholder="Enter OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)} // Update OTP state
                  autoComplete="off"
                  required
                />
                <button className={styles.loginBtn} type="submit" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </form>

              {/* Resend OTP button, shown after 30 seconds */}
              {canResend && (
                <button
                  className={styles.resendBtn}
                  onClick={sendOtp}
                  disabled={resendAttempts >= 3 || loading}
                >
                  Resend OTP
                </button>
              )}
            </>
          )}

          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
