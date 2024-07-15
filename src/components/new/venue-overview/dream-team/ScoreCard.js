"use client";
import Image from "next/image";
import React, { useState } from "react";

const ScoreCard = ({ scorecardData }) => {
  const [accordion1Open, setAccordion1Open] = useState(true);
  const [accordion2Open, setAccordion2Open] = useState(false);

  const renderBatsmen = (batsmen) => (
    <tbody className="divide-y divide-gray-200">
      {batsmen.map((batsman, index) => (
        <tr key={index}>
          <td className="py-3 px-3">
            <p className="text-sky-600 font-bold">{batsman.name}</p>
            <span className="text-gray-500">{batsman.how_out}</span>
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {batsman.runs}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {batsman.balls_faced}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {batsman.fours}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {batsman.sixes}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {batsman.strike_rate}
          </td>
        </tr>
      ))}
    </tbody>
  );

  const renderBowlers = (bowlers) => (
    <tbody className="divide-y divide-gray-200">
      {bowlers.map((bowler, index) => (
        <tr key={index}>
          <td className="py-3 px-3">
            <p className="text-sky-600 font-bold">{bowler.name}</p>
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {bowler.overs}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {bowler.maidens}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {bowler.runs_conceded}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {bowler.wickets}
          </td>
          <td className="text-center py-3 px-3 text-black font-semibold">
            {bowler.econ}
          </td>
        </tr>
      ))}
    </tbody>
  );

  const innings1 = scorecardData.response.innings[0];
  const innings2 = scorecardData.response.innings[1];

  return (
    <>
      <div>
        <div className="accordion flex flex-col gap-3">
          <div className="accordion-item bg-white shadow border border-gray-100 rounded-lg">
            <button
              onClick={() => setAccordion1Open(!accordion1Open)}
              className="flex justify-between items-center gap-2 p-4 w-full"
            >
              <span className="text-gray-600 text-sm font-bold">
                {innings1.name}
              </span>
              <Image
                height={20}
                width={20}
                src="/static/icons/arrow-down.svg"
                className="shrink-0"
                alt=""
              />
            </button>
            {accordion1Open && (
              <div className="px-4 pb-4 divide-y divide-gray-200">
                <div className="overflow-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-start text-black py-3 px-3 bg-light-blue">
                          BATSMEN
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          R
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          B
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          4s
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          6s
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          S/R
                        </th>
                      </tr>
                    </thead>
                    {renderBatsmen(innings1.batsmen)}
                  </table>
                </div>
                <div className="flex items-center justify-between py-6">
                  <span className="text-sm text-black font-bold">Extras</span>
                  <p className="text-sm text-black font-bold">
                    {innings1.extra_runs.total}
                    <span className="font-semibold">
                      (b {innings1.extra_runs.byes}, lb{" "}
                      {innings1.extra_runs.legbyes}, nb{" "}
                      {innings1.extra_runs.noballs}, w{" "}
                      {innings1.extra_runs.wides}, p{" "}
                      {innings1.extra_runs.penalty})
                    </span>
                  </p>
                </div>
                <div className="overflow-auto pt-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-start text-black py-3 px-3 bg-light-blue">
                          BOWLER
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          O
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          M
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          R
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          W
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          ECO
                        </th>
                      </tr>
                    </thead>
                    {renderBowlers(innings1.bowlers)}
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="accordion-item bg-white shadow border border-gray-100 rounded-lg">
            <button
              onClick={() => setAccordion2Open(!accordion2Open)}
              className="flex justify-between items-center gap-2 p-4 w-full"
            >
              <span className="text-gray-600 text-sm font-bold">
                {innings2.name}
              </span>
              <Image
                height={20}
                width={20}
                src="/static/icons/arrow-down.svg"
                className="shrink-0"
                alt=""
              />
            </button>
            {accordion2Open && (
              <div className="px-4 pb-4 divide-y divide-gray-200">
                <div className="overflow-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-start text-black py-3 px-3 bg-light-blue">
                          BATSMEN
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          R
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          B
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          4s
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          6s
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          S/R
                        </th>
                      </tr>
                    </thead>
                    {renderBatsmen(innings2.batsmen)}
                  </table>
                </div>
                <div className="flex items-center justify-between py-6">
                  <span className="text-sm text-black font-bold">Extras</span>
                  <p className="text-sm text-black font-bold">
                    {innings2.extra_runs.total}
                    <span className="font-semibold">
                      (b {innings2.extra_runs.byes}, lb{" "}
                      {innings2.extra_runs.legbyes}, nb{" "}
                      {innings2.extra_runs.noballs}, w{" "}
                      {innings2.extra_runs.wides}, p{" "}
                      {innings2.extra_runs.penalty})
                    </span>
                  </p>
                </div>
                <div className="overflow-auto pt-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="text-start text-black py-3 px-3 bg-light-blue">
                          BOWLER
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          O
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          M
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          R
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          W
                        </th>
                        <th className="text-center text-black py-3 px-3 bg-light-blue">
                          ECO
                        </th>
                      </tr>
                    </thead>
                    {renderBowlers(innings2.bowlers)}
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
