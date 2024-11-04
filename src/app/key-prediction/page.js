"use client";

import React from "react";
import Image from "next/image";

const KeyInsight = () => {
  return (
    <>
      <div className="bg-[#0A1A4B] flex items-center justify-center w-full px-4 py-5">
        <div className="w-full max-w-[550px] mx-auto flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  alt="Flag of India"
                  src="https://storage.googleapis.com/a1aa/image/oUIIrBEezP1AJ681fb3dWXXvKrpQu5dhnZAfyYdMzaAg5UNnA.jpg"
                  width={48} // Specify the actual width of the image
                  height={48} // Specify the actual height of the image
                  className="w-12 h-12"
                />
              </div>
              <span className="text-white mt-2">IND</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  alt="Flag of India"
                  src="https://storage.googleapis.com/a1aa/image/oUIIrBEezP1AJ681fb3dWXXvKrpQu5dhnZAfyYdMzaAg5UNnA.jpg"
                  width={48} // Specify the actual width of the image
                  height={48} // Specify the actual height of the image
                  className="w-12 h-12"
                />
              </div>
              <span className="text-white mt-2">BAN</span>
            </div>
          </div>
          <div className="text-center text-white">
            <div className="text-lg font-semibold mb-2">09 OCT 07:00 PM</div>
            <div className="mt-2 text-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <span>• Arun Jaitley Stadium</span>
              <span>• Bangladesh tour of India</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto"
        style={{ maxWidth: "1012px", padding: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-0 md:mt-4">
          <div className="sm:bg-white p-4 rounded-lg col-span-2">
            <h1
              className="text-2xl font-bold mb-4"
              style={{ fontWeight: 600, lineHeight: "2.25rem" }}
            >
              IND vs BAN Dream11 Team Prediction Today Match | Best Fantasy Tips
              | Dream11 Team Prediction For Bangladesh tour of India | Fantasy
              Cricket Tips
            </h1>

            {/* WIN PROBABILITY */}
            <div className="max-w-4xl mx-auto mb-4">
              <div className="flex gap-2">
                <div>
                  <h1
                    className="text-lg font-bold w-full whitespace-nowrap"
                    style={{ fontWeight: 700 }}
                  >
                    WIN PROBABILITY
                  </h1>
                </div>
                <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
              </div>

              <div className="relative flex space-x-4 w-full justify-center mt-4">
                <div className="absolute left-0">
                  <Image
                    // className="rounded-full w-10 h-10"
                    width={48} // Specify the actual width of the image
                    height={48} //
                    src="Images/Team1_flag.svg"
                    alt=""
                  />
                </div>
                <div className="absolute right-0">
                  <Image
                    // className="rounded-full w-10 h-10"
                    width={48} // Specify the actual width of the image
                    height={48} //
                    src="Images/Team2_flag.svg"
                    alt=""
                  />
                </div>

                <div className="flex items-center space-x-2 w-full">
                  <div className="bg-red-600 text-white text-center py-2 px-4 rounded w-full">
                    42.1%
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full">
                  <div className="bg-gray-800 text-white text-center py-2 px-4 rounded w-full">
                    28.4%
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full">
                  <div className="bg-blue-600 text-white text-center py-2 px-4 rounded w-full mr-4">
                    29.5%
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-4">
              <div className="flex gap-2">
                <div>
                  <h1
                    className="text-lg font-bold w-full whitespace-nowrap"
                    style={{ fontWeight: 700 }}
                  >
                    GROUND CONDITIONS
                  </h1>
                  <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">
                    (LAST 5 T20’S)
                  </p>
                </div>
                <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:flex md:flex-nowrap">
                <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                  <p className="text-lg font-bold leading-6">197</p>
                  <p className="text-gray-600">Avg. Score</p>
                </div>
                <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                  <p className="text-lg font-bold leading-6">7</p>
                  <p className="text-gray-600">Avg. Wkts</p>
                </div>
                <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                  <p className="text-lg font-bold leading-6">1</p>
                  <p className="text-gray-600">&lt;140</p>
                </div>
                <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                  <p className="text-lg font-bold leading-6">2</p>
                  <p className="text-gray-600">140-180</p>
                </div>
                <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[80px]">
                  <p className="text-lg font-bold leading-6">7</p>
                  <p className="text-gray-600">180+</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-4">
              <div className="flex gap-2">
                <div>
                  <h1
                    className="text-lg font-bold w-full whitespace-nowrap"
                    style={{ fontWeight: 700 }}
                  >
                    WEATHER REPORT
                  </h1>
                </div>
                <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
              </div>
              <div
                className="bg-white rounded-lg p-4 flex items-center space-x-4 w-full max-w-4xl border mt-4"
                style={{ borderColor: "#E9ECEF" }}
              >
                <Image
                  className="w-24 h-24"
                  height="100"
                  src="Images/Weather.svg"
                  alt=""
                  width="100"
                />
                <div className="gap-2 grid">
                  <div className="text-2xl font-bold">7°C</div>
                  <div className="text-gray-600">HUMIDITY: 86%</div>
                  <div className="text-gray-600">WIND: 7.99% m/s</div>
                </div>
              </div>

              {/* TOSS TRENDS */}
              <div className="max-w-4xl mx-auto mb-4">
                <div className="flex gap-2">
                  <div>
                    <h1
                      className="text-lg font-bold w-full whitespace-nowrap"
                      style={{ fontWeight: 700 }}
                    >
                      TOSS TRENDS
                    </h1>
                    <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">
                      (At this venue)
                    </p>
                  </div>
                  <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
                </div>
                <div className="w-full mt-3">
                  <h1
                    className="text-base font-semibold leading-6 tracking-normal text-left"
                    style={{ fontVariationSettings: "'opsz' auto" }}
                  >
                    DECISION AFTER WINNING THE TOSS
                  </h1>
                </div>
                <div className="w-full max-w-4xl mt-3">
                  {/* First Progress Bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium text-sm leading-6">
                      Choose to Bat First
                    </span>
                    <span className="text-black font-medium text-sm leading-6">
                      Choose to Chase
                    </span>
                  </div>
                  <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden mb-8">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                      style={{ width: "0%" }}
                    >
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                        0%
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                      100%
                    </span>
                  </div>

                  {/* Second Progress Bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-medium text-sm leading-6">
                      Wins Batting First
                    </span>
                    <span className="text-black font-medium text-sm leading-6">
                      Wins Chasing
                    </span>
                  </div>
                  <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                      style={{ width: "60%" }}
                    >
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                        60%
                      </span>
                    </div>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">
                      100%
                    </span>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <h1
                    className="text-base font-semibold leading-6 tracking-normal text-left"
                    style={{ fontVariationSettings: "'opsz' auto" }}
                  >
                    WINS AFTER WINNING TOSS
                  </h1>
                </div>
                <div className="mt-4 flex flex-wrap md:flex-nowrap gap-4">
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[50px]">
                    <p className="text-lg font-bold leading-6">40%</p>
                    <p className="text-gray-600">Win</p>
                  </div>
                  <div className="bg-white custom-shadow rounded-lg p-4 text-center flex-1 min-w-[50px]">
                    <p className="text-lg font-bold leading-6">60%</p>
                    <p className="text-gray-600">Loss</p>
                  </div>
                </div>
              </div>



              <div className="max-w-4xl mx-auto mb-4">
  <div className="flex gap-2">
    <div>
      <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>PITCH TRENDS</h1>
    </div>
    <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
  </div>
  <div className="w-full mt-3">
    <h1 className="text-base font-semibold leading-6 tracking-normal text-left" style={{ fontVariationSettings: "'opsz' auto" }}>Batting vs Bowling</h1>
  </div>
  <div className="w-full max-w-4xl mt-3">
    {/* First Progress Bar */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-black font-medium text-sm leading-6">Batting Fpts</span>
      <span className="text-black font-medium text-sm leading-6">Bowling Fpts</span>
    </div>
    <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden mb-3">
      <div className="absolute left-0 top-0 h-full bg-gray-400 rounded-full" style={{ width: '0%' }}>
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">0%</span>
      </div>
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">100%</span>
    </div>
    <div className="w-full mt-3">
      <h1 className="text-base font-semibold leading-6 tracking-normal text-left mb-3" style={{ fontVariationSettings: "'opsz' auto" }}>Pace vs Spin</h1>
    </div>
    {/* Second Progress Bar */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-black font-medium text-sm leading-6">Pace FPts</span>
      <span className="text-black font-medium text-sm leading-6">Spin FPts</span>
    </div>
    <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden">
      <div className="absolute left-0 top-0 h-full bg-gray-400 rounded-full" style={{ width: '60%' }}>
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">60%</span>
      </div>
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-medium text-sm leading-6">100%</span>
    </div>
  </div>

  {/* SUGGESTED PLAYERS */}
  <div className="max-w-4xl mx-auto mb-4">
    <div className="flex gap-2">
      <div>
        <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>SUGGESTED PLAYERS</h1>
      </div>
      <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
    </div>
    <div className="flex space-x-4 w-full max-w-screen-lg mt-3">
      {/* Card 1 */}
      <div className="bg-white rounded-lg custom-shadow p-4 flex flex-col items-center w-full">
        <div className="bg-[#EEEEF0] rounded-full p-2 w-[144px] flex justify-center items-center mb-2">
          <Image className="h-7 w-12" height="50" src="Images/team1_jerrcy.svg" alt="" width="50" />
        </div>
        <div className="text-center">
          <p className="text-[16px] font-semibold leading-[16px] text-center tracking-normal mb-2">R Sharma</p>
          <p className="text-gray-600 text-[14px] font-normal leading-[20px] text-center tracking-normal">WK|ENG</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-lg custom-shadow p-4 flex flex-col items-center w-full">
        <div className="bg-[#EEEEF0] rounded-full p-2 w-[144px] flex justify-center items-center mb-2">
          <Image className="h-7 w-12" height="50" src="Images/team2_jeercy.svg" alt="" width="50" />
        </div>
        <div className="text-center">
          <p className="text-[16px] font-semibold leading-[16px] text-center tracking-normal mb-2">V Kohli</p>
          <p className="text-gray-600 text-[14px] font-normal leading-[20px] text-center tracking-normal">WK|ENG</p>
        </div>
      </div>
    </div>
  </div>

  {/* PLAYER IN TOP FORM */}
  <div className="max-w-4xl mx-auto mb-4">
    <div className="flex gap-2">
      <div>
        <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>PLAYER IN TOP FORM</h1>
        <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">(LAST 5 T20’S)</p>
      </div>
      <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
    </div>
    <div className="space-y-3 w-full mt-3">
      <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
        <div className="flex items-center">
          <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
            <Image className="h-7 w-7" height="50" src="Images/team1_jerrcy.svg" alt="" width="50" />
          </div>
          <div className="ml-4">
            <div className="text-lg font-bold">R Sharma</div>
            <div className="text-gray-500">WK | ENG</div>
          </div>
        </div>
        <div className="text-lg font-bold">80 fpts</div>
      </div>
      <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
        <div className="flex items-center">
          <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
            <Image className="h-7 w-7" height="50" src="Images/team2_jeercy.svg" alt="" width="50" />
          </div>
          <div className="ml-4">
            <div className="text-lg font-bold">V Kohli</div>
            <div className="text-gray-500">WK | ENG</div>
          </div>
        </div>
        <div className="text-lg font-bold">75 fpts</div>
      </div>
    </div>
  </div>
</div>


{/* TOP PERFORMERS AT THIS VENUE */}
<div className="max-w-4xl mx-auto mb-4">
  <div className="flex gap-2">
    <div>
      <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>TOP PERFORMERS AT THIS VENUE</h1>
      <p className="text-gray-600 text-sm font-medium leading-6 whitespace-nowrap">(LAST 5 T20’S)</p>
    </div>
    <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
  </div>
  <div className="space-y-3 w-full mt-3">
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team1_jerrcy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">R Sharma</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">80 fpts</div>
    </div>
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team2_jeercy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">V Kohli</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">75 fpts</div>
    </div>
  </div>
</div>

{/* POWER PLAYS (BATTERS) */}
<div className="max-w-4xl mx-auto mb-4">
  <div className="flex gap-2">
    <div>
      <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>POWER PLAYS (BATTERS)</h1>
    </div>
    <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
  </div>
  <div className="space-y-3 w-full mt-3">
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team1_jerrcy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">R Sharma</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">80 fpts</div>
    </div>
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team2_jeercy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">V Kohli</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">75 fpts</div>
    </div>
  </div>
</div>

{/* POWER PLAYS (BOWLERS) */}
<div className="max-w-4xl mx-auto mb-4">
  <div className="flex gap-2">
    <div>
      <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>POWER PLAYS (BOWLERS)</h1>
    </div>
    <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
  </div>
  <div className="space-y-3 w-full mt-3">
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team1_jerrcy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">R Sharma</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">80 fpts</div>
    </div>
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team2_jeercy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">V Kohli</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">75 fpts</div>
    </div>
  </div>
</div>

{/* DEATH OVERS (BOWLERS) */}
<div className="max-w-4xl mx-auto mb-4">
  <div className="flex gap-2">
    <div>
      <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>DEATH OVERS (BOWLERS)</h1>
    </div>
    <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
  </div>
  <div className="space-y-3 w-full mt-3">
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team1_jerrcy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">R Sharma</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">80 fpts</div>
    </div>
    <div className="bg-white rounded-lg py-2 px-3 flex items-center justify-between custom-shadow mt-0">
      <div className="flex items-center">
        <div className="bg-[#EEEEF0] rounded-full p-2 justify-center items-center">
          <Image className="h-7 w-7" height="50" src="Images/team2_jeercy.svg" alt="" width="50" />
        </div>
        <div className="ml-4">
          <div className="text-lg font-bold">V Kohli</div>
          <div className="text-gray-500">WK | ENG</div>
        </div>
      </div>
      <div className="text-lg font-bold">75 fpts</div>
    </div>
  </div>
</div>

<div className="max-w-4xl mx-auto">
  <div className="max-w-4xl mx-auto mb-5">
    <div className="flex gap-2">
      <div>
        <h1 className="text-lg font-bold w-full whitespace-nowrap" style={{ fontWeight: 700 }}>
          CHOOSE TEAM
        </h1>
      </div>
      <div className="border-t border-dotted border-customGray w-full mt-auto"></div>
    </div>

    <div className="flex space-x-4 mb-6 mt-4">
      <button
        id="team1-tab"
        onClick={(event) => openTab(event, 'team1')}
        className="tab-button bg-[#394150] text-white font-semibold py-2 px-4 rounded-full focus:outline-none w-full md:w-auto"
      >
        Team 1
      </button>

      <button
        id="team2-tab"
        onClick={(event) => openTab(event, 'team2')}
        className="tab-button bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-full focus:outline-none w-full md:w-auto"
      >
        Team 2
      </button>
    </div>

    <div id="team1" className="tab-content block">
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <span className="font-bold">Keeper</span> – Amy Jones, Sinola Jafta
        </li>
        <li>
          <span className="font-bold">Batsmen</span> – Laura Wolvaardt, Daniel Wyatt Hodge, Tazmin Brits, Miah Bouchier
        </li>
        <li>
          <span className="font-bold">All-rounders</span> – Marizanne Kapp <span className="text-custom-green">(c)</span>, Natalie Sciver Brunt <span className="text-custom-red">(vc)</span>, Chloe Tryon, Alice Capsey
        </li>
        <li>
          <span className="font-bold">Bowlers</span> – Sophie Ecclestone
        </li>
      </ul>
      <div
        className="bg-cover bg-center bg-no-repeat p-2 md:p-8 rounded-lg mt-3"
        style={{ backgroundImage: "url('Images/Dream_back.svg')" }}
      >
        <div className="grid grid-cols-5 gap-4 text-center place-content-center">
          <div className="col-span-5 text-center mb-10">
            <h2 className="text-white font-bold mb-4">WICKET-KEEPERS</h2>
            <div className="relative inline-block">
              <Image className="mx-auto" height="100" width="100" src="Images/Player_pro.svg" alt="" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-red-500 font-bold rounded-full w-6 h-6 flex items-center justify-center">C</div>
              <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">R Sharma</div>
              <div className="text-white">8.5 cr</div>
            </div>
          </div>

          {/* Batsmen */}
          <div className="col-span-5 text-center mb-10">
            <h2 className="text-white font-bold mb-4">BATSMEN</h2>
            <div className="flex justify-center items-center">
              <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="text-center">
                    <Image className="mx-auto" height="100" width="100" src="Images/Player_pro.svg" alt="" />
                    <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">R Sharma</div>
                    <div className="text-white">8.5 cr</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All-Rounders */}
          <div className="col-span-5 text-center mb-10">
            <h2 className="text-white font-bold mb-4">ALL-ROUNDER</h2>
            <div className="flex justify-center items-center">
              <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-center">
                    <Image className="mx-auto" height="100" width="100" src="Images/Player_pro.svg" alt="" />
                    <div className="bg-blue-100 text-black font-bold truncate max-w-[100px] mx-auto px-2 rounded">R Sharma</div>
                    <div className="text-white">8.5 cr</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bowlers */}
          <div className="col-span-5 text-center mb-10">
            <h2 className="text-white font-bold mb-4">BOWLERS</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
              <div className="text-center">
                <Image className="mx-auto" height="100" width="100" src="Images/Player_pro.svg" alt="" />
                <div className="bg-black text-white font-bold rounded">R Sharma</div>
                <div className="text-white">8.5 cr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="team2" className="tab-content hidden">
      {/* Team 2 details, similar to team 1 */}
    </div>
  </div>

  {/* DISCLAIMER */}
  <div className="w-full mx-auto p-4 bg-[#F8F9FD] rounded-lg">
    <div className="flex items-center mb-2 text-black">
      <i className="fas fa-exclamation-triangle text-black text-xl mr-2"></i>
      <h2 className="font-bold text-lg">Disclaimer</h2>
    </div>
    <hr className="border-gray-300 mb-2" />
    <p className="text-gray-700">
      This team is based on the understanding, analysis, and instinct of the author. While selecting your team,
      consider the points mentioned and make your own decision.
    </p>
  </div>
</div>





























             </div>
          </div>
        </div>
      </div>

      <script>
        {`
        function openTab(evt, tabName) {
          var i, tabcontent, tabbuttons;
          tabcontent = document.getElementsByClassName("tab-content");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add("hidden");
          }
          tabbuttons = document.getElementsByClassName("tab-button");
          for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].className = "tab-button bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded-full focus:outline-none w-full md:w-auto";
          }
          document.getElementById(tabName).classList.remove("hidden");
          evt.currentTarget.className = "tab-button bg-[#394150] text-white font-semibold py-2 px-4 rounded-full focus:outline-none w-full md:w-auto";
        }
        `}
      </script>
    </>
  );
};

export default KeyInsight;
