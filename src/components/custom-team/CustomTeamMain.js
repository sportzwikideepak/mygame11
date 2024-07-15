"use client";
import Image from "next/image";
import React, { useState } from "react";
import SimpleTeam from "./SimpleTeam";
import AdvancedTeam from "./AdvancedTeam";
import TabButtons from "./TabButtons";
import PlatformButtons from "./PlatformButtons";
import TeamBasisButtons from "./TeamBasisButtons";
import Link from "next/link";

const CustomTeamMain = ({ currentPath, match_id }) => {
  const [activeTab, setActiveTab] = useState("simple");
  const [selectedPlatform, setSelectedPlatform] = useState(1);
  const [teamBasis, setTeamBasis] = useState("lineupPrediction");
  const [numberOfTeams, setNumberOfTeams] = useState(0);
  const [numberOfWk, setNumberOfWk] = useState(0);
  const [numberOfBat, setNumberOfBat] = useState(0);
  const [numberOfAr, setNumberOfAr] = useState(0);
  const [numberOfBow, setNumberOfBow] = useState(0);

  return (
    <main>
      <section className="py-6">
        <div className="container max-w-[1048px] mx-auto px-3">
          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-center mb-4">
                <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>

              <div className="bg-light-blue p-4 rounded-lg mb-5">
                <div className="flex-1 flex items-center relative mb-5">
                  <div className="flex-1 border-b border-dashed border-primary" />
                  <div className="p-2">
                    <h4 className="text-primary font-black text-sm uppercase">
                      1. (Create Teams For)
                    </h4>
                  </div>
                  <div className="flex-1 border-b border-dashed border-primary" />
                </div>
                <PlatformButtons
                  selectedPlatform={selectedPlatform}
                  setSelectedPlatform={setSelectedPlatform}
                />
              </div>

              <div className="bg-light-blue p-4 rounded-lg mb-5">
                <div className="flex-1 flex items-center relative mb-5">
                  <div className="flex-1 border-b border-dashed border-primary" />
                  <div className="p-2">
                    <h4 className="text-primary font-black text-sm uppercase">
                      2. (Create Teams On The Basis Of)
                    </h4>
                  </div>
                  <div className="flex-1 border-b border-dashed border-primary" />
                </div>
                <TeamBasisButtons
                  teamBasis={teamBasis}
                  setTeamBasis={setTeamBasis}
                />
              </div>

              {activeTab === "simple" ? (
                <SimpleTeam
                  setNumberOfTeams={setNumberOfTeams}
                  numberOfTeams={numberOfTeams}
                />
              ) : (
                <AdvancedTeam
                  setNumberOfTeams={setNumberOfTeams}
                  numberOfTeams={numberOfTeams}
                  numberOfBow={numberOfBow}
                  setNumberOfBow={setNumberOfBow}
                  numberOfAr={numberOfAr}
                  setNumberOfAr={setNumberOfAr}
                  numberOfBat={numberOfBat}
                  setNumberOfBat={setNumberOfBat}
                  numberOfWk={numberOfWk}
                  setNumberOfWk={setNumberOfWk}
                />
              )}

              <p className="text-gray-500 font-bold text-xs text-center mb-5">
                NOTE: PerfectLineup does not have any association with Dream
                11*. We are a fantasy research and team generator tool assisting
                players with making teams for Dream11*.
              </p>
              <div className="text-end">
                <Link
                  href={`/${currentPath}/custom-team/team-lineups?match-id=${match_id}&team-basis=${teamBasis}&platform=${selectedPlatform}&team-count=${numberOfTeams}&wk-count=${numberOfWk}&bat-count=${numberOfBat}&ar-count=${numberOfAr}&bow-count=${numberOfBow}&team-type=${activeTab}`}
                >
                  <button className="text-white font-bold bg-brand-red hover:bg-red-700 active:bg-brand-red rounded-full py-2 px-4 inline-flex items-center gap-2 text-sm">
                    Next
                    <Image
                      height={20}
                      src="/static/icons/arrow-next.svg"
                      width={14}
                      alt=""
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomTeamMain;
