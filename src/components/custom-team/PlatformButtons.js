import Image from "next/image";
import React from "react";

const PlatformButtons = ({ selectedPlatform, setSelectedPlatform }) => {
  const platformButtons = [
    { id: 1, label: "Dream11", icon: "/static/icons/dream-11.svg" },
    { id: 2, label: "My11Circle", icon: "/static/icons/my11circle.svg" },
    { id: 3, label: "MyTeam11", icon: "/static/icons/myteam11.svg" },
    { id: 4, label: "CrickPe", icon: "/static/icons/crickpe.svg" },
    { id: 5, label: "My Fab11", icon: "/static/icons/myfab11.svg" },
    { id: 6, label: "Real11", icon: "/static/icons/real11.svg" },
    { id: 7, label: "Others", icon: "/static/icons/others.svg" },
  ];

  return (
    <div className="flex gap-3 overflow-auto">
      {platformButtons.map((platform) => (
        <button
          key={platform.id}
          className={`bg-white py-2 px-6 flex-1 text-center shrink-0 border rounded-lg ${
            selectedPlatform === platform.id
              ? "border-primary"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedPlatform(platform.id)}
        >
          {/* <div className="icon mb-1">
            <Image
              height={20}
              src={platform.icon}
              className="mx-auto"
              width={22}
              alt={platform.label}
            />
          </div> */}
          <span className="text-sm font-bold text-primary whitespace-nowrap">
            {platform.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PlatformButtons;
