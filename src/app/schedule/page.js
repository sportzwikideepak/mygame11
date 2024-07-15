import React from "react";

import ScheduleMain from "@/components/schedule/ScheduleMain";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

function getDateRange() {
  // Get today's date
  const today = new Date();

  // Calculate the date one week later
  const oneWeekLater = new Date();
  oneWeekLater.setDate(today.getDate() + 7);

  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Format both dates
  const formattedToday = formatDate(today);
  const formattedOneWeekLater = formatDate(oneWeekLater);

  // Return the formatted dates joined by an underscore
  return `${formattedToday}_${formattedOneWeekLater}`;
}

// Example usage
// console.log(getDateRange());

const fetchMatchesList = async () => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches?token=${entity_api_key}&per_page=80&date=${getDateRange()}`,
      { next: { revalidate: 0 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err, "#hiu4eougfhoe4igh80");
  }
};

const page = async () => {
  const matches = await fetchMatchesList();

  //   console.log(matches, "4u9hnfugb9ogu");
  return (
    <>
      <ScheduleMain matches={matches} />
    </>
  );
};

export default page;
