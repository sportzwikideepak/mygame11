import Image from "next/image";
import React from "react";

const TeamBasisButtons = ({ teamBasis, setTeamBasis }) => {
  const teamBasisButtons = [
    {
      id: "lineupPrediction",
      label: "CA Lineup Prediction",
      icon: "/static/radio.svg",
    },
    {
      id: "recentPerformance",
      label: "Recent Performance",
      icon: "/static/time.svg",
    },
    {
      id: "dreamPoints",
      label: "According Dream Points",
      icon: "/static/dream11.svg",
    },
    // { id: "custom", label: "Custom", icon: "/static/note.svg" },
  ];

  return (
    <div className="text-center overflow-auto">
      <div className="inline-flex gap-3 text-sm">
        {teamBasisButtons.map((basis) => (
          <button
            key={basis.id}
            className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap border flex items-center gap-2 ${
              teamBasis === basis.id
                ? "bg-primary text-white border-primary"
                : "text-gray-500 bg-white border-gray-200"
            }`}
            onClick={() => setTeamBasis(basis.id)}
          >
            <Image
              height={20}
              width={20}
              alt=""
              className={teamBasis === basis.id ? "invert" : ""}
              src={basis.icon}
            />
            {basis.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamBasisButtons;
