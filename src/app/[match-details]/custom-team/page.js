import CustomTeamMain from "@/components/custom-team/CustomTeamMain";
import React from "react";

const page = ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];
  return (
    <>
      <CustomTeamMain currentPath={currentPath} match_id={match_id} />
    </>
  );
};

export default page;
