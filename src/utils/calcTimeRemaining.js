import React from "react";
import moment from "moment-timezone";

export default function TimeRemaining({ status, status_str, istDate }) {
  const currentDate = moment().tz("Asia/Kolkata"); // Current time in IST
  const targetDate = moment.tz(istDate, "Asia/Kolkata"); // Target time in IST
  const difference = targetDate.diff(currentDate);

  const duration = moment.duration(difference);
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  const timeRemainingStr = `${days === 0 ? "" : `${days} days, `}${
    hours === 0 && days === 0 ? "" : `${hours} hours, `
  }${minutes} minutes`;

  return (
    <div style={{ color: status !== 3 ? "#5030e5" : "" }}>
      {status == 3 ? status_str : timeRemainingStr}
    </div>
  );
}
