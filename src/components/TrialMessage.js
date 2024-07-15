import React from "react";
import styles from "./TrialMessage.module.css";

const TrialMessage = () => {
  return (
    <>
      <div
        className={`trial font-bold text-center flex justify-center items-center ${styles.trialContainer}`}
      >
        <p className="flex justify-center items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-600 text-green-500"></span>
          9 days left to expire trial
        </p>
      </div>
    </>
  );
};

export default TrialMessage;
