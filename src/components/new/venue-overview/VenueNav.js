import Link from "next/link";
import React from "react";

const VenueNav = ({ active, teama, teamb, currentPath }) => {
  return (
    <>
      <div className="tabs-slider flex gap-3 mb-6 text-sm overflow-auto">
        <div className="tabs-item w-auto">
          <Link href={`/${currentPath}/venue-overview`}>
            <button
              className={`border border-primary font-semibold rounded-full py-1 px-4 whitespace-nowrap ${
                active === 0 ? "bg-[#001240] text-white" : "text-primary"
              }`}
            >
              Overview
            </button>
          </Link>
        </div>
        <div className="tabs-item w-auto">
          <Link href={`/${currentPath}/venue-overview/last-10-matches`}>
            <button
              className={`border border-primary font-semibold rounded-full py-1 px-4 whitespace-nowrap ${
                active === 1 ? "bg-[#001240] text-white" : "text-primary"
              }`}
            >
              Last 5 T20
            </button>
          </Link>
        </div>
        <div className="tabs-item w-auto">
          <Link href={`/${currentPath}/venue-overview/team-a`}>
            <button
              className={`border border-primary font-semibold rounded-full py-1 px-4 whitespace-nowrap ${
                active === 2 ? "bg-[#001240] text-white" : "text-primary"
              }`}
            >
              {teama} (This Venue)
            </button>
          </Link>
        </div>
        <div className="tabs-item w-auto">
          <Link href={`/${currentPath}/venue-overview/team-b`}>
            <button
              className={`border border-primary font-semibold rounded-full py-1 px-4 whitespace-nowrap ${
                active === 3 ? "bg-[#001240] text-white" : "text-primary"
              }`}
            >
              {teamb} (This Venue)
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VenueNav;
