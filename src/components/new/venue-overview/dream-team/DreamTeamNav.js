import Link from "next/link";
import React from "react";

const DreamTeamNav = ({ active = 0, currentPath, teamIdA, teamIdB }) => {
  return (
    <>
      <div className="tabs-slider flex gap-3 mb-6 text-sm overflow-auto bg-light-primary rounded-full py-2 px-2 justify-center">
        <div className="tabs-item w-auto">
          <Link href={`/${currentPath}/venue-overview/dream-team`}>
            <button
              className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap ${
                active === 0 ? "bg-[#001240] text-white" : "bg-white text-black"
              }`}
            >
              Overview
            </button>
          </Link>
        </div>
        <div className="tabs-item w-auto">
          <Link href={`/${currentPath}/venue-overview/dream-team/scorecard`}>
            <button
              className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap ${
                active === 1 ? "bg-[#001240] text-white" : "bg-white text-black"
              }`}
            >
              Scorecard
            </button>
          </Link>
        </div>
        <div className="tabs-item w-auto">
          <Link
            href={`/${currentPath}/venue-overview/dream-team/fantasy-${teamIdA}-${teamIdB}`}
          >
            <button
              className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap ${
                active === 2 ? "bg-[#001240] text-white" : "bg-white text-black"
              }`}
            >
              Fantasy
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DreamTeamNav;
