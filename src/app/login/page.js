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
  const [canResend, setCanResend] = useState(false); // Track when to show Resend OTP button
  const [showDidNotGetOtp, setShowDidNotGetOtp] = useState(true); // Track visibility of the "Didn't get OTP?" button

  const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

  // Handle the timer countdown (only runs when timer > 0)
  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId); // Clear the interval on component unmount
    } else if (timer === 0 && !showDidNotGetOtp) {
      setCanResend(true); // Allow Resend OTP after the timer reaches 0
    }
  }, [timer, showDidNotGetOtp]);

  // Function to handle sending OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch(`https://hammerhead-app-jkdit.ondigitalocean.app/sendOtp`, {
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
        setShowDidNotGetOtp(true); // Ensure "Didn't get OTP?" button is shown again after sending OTP
        setCanResend(false); // Hide Resend OTP button until needed
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
      const response = await fetch(`https://hammerhead-app-jkdit.ondigitalocean.app/verifyOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('OTP verified successfully.');
        setSuccessMessage('OTP verified successfully.');
        localStorage.setItem('token', data.token); // Store the JWT token in localStorage
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user details if needed
        // Redirect to the dashboard or any other protected route
        window.location.href = '/'; // Update this URL as needed
      } else {
        setErrorMessage(data.message || 'Invalid OTP.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while verifying OTP.');
    } finally {
      setLoading(false);
    }
  };

  // Function to start the 55-second timer when "Didn't get OTP?" is clicked
  const handleDidNotGetOtpClick = () => {
    setTimer(55); // Start the timer for 55 seconds
    setShowDidNotGetOtp(false); // Hide the "Didn't get OTP?" button
    setCanResend(false); // Ensure "Resend OTP" is not shown yet
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
            <form className={styles.form1} onSubmit={sendOtp}>
              <input
                className={styles.input01}
                placeholder="1 (702) 123-4567"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                autoComplete="off"
                required
              />
              <button className={styles.loginBtn} type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          ) : (
            <>
              <form className={styles.form1} onSubmit={verifyOtp}>
                <input
                  className={styles.input01}
                  placeholder="Enter OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  autoComplete="off"
                  required
                />
                <button className={styles.loginBtn} type="submit" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </form>

              {/* Display the "Didn't get OTP?" button */}
              {showDidNotGetOtp && (
                <button
                  className={styles.didNotGetOtpBtn} // Styling similar to the "Verify OTP" button
                  onClick={handleDidNotGetOtpClick}
                >
                  Didn't get OTP?
                </button>
              )}

              {/* Show the Resend OTP button with countdown timer */}
              {canResend ? (
                <button
                  className={styles.resendBtn} // Styled similarly to "Verify OTP" button
                  onClick={sendOtp}
                  disabled={loading}
                >
                  Resend OTP
                </button>
              ) : (
                !showDidNotGetOtp && (
                  <button
                    className={`${styles.resendBtn} ${styles.disabled}`} // Add the 'disabled' style if not yet clickable
                    disabled
                  >
                    Resend OTP in {timer} seconds
                  </button>
                )
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
