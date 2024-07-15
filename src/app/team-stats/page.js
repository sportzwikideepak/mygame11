import React from "react";

const fetchTeamSquad = async () => {
  const response = await fetch(
    "https://rest.entitysport.com/v2/matches/73793/newpoint2?token=73d62591af4b3ccb51986ff5f8af5676",
    { next: { revalidate: 3000 } }
  );
  const data = await response.json();
  return data;
};

const page = async () => {
  const data = await fetchTeamSquad();

  const formattedJson = JSON.stringify(data, null, 2);
  return (
    <>
      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {formattedJson}
      </pre>
    </>
  );
};

export default page;
