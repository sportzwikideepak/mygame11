import Image from "next/image";
import React from "react";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;
const local_sw_api_url = process.env.LOCAL_SW_API_BASE_URL;

const fetchPlStats = async (teamId) => {
  try {
    const res = await fetch(
      `${local_sw_api_url}/team-last-5-matches?teamId=${teamId}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchMatchInfo = async (match_id) => {
  try {
    const res = await fetch(
      `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const Page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const data = await fetchMatchInfo(match_id);
  const plStatsTeamA = await fetchPlStats(data?.response?.teama?.team_id);
  const plStatsTeamB = await fetchPlStats(data?.response?.teamb?.team_id);

  const renderForm = (last5Matches) => {
    return last5Matches.map((result, index) => (
      <div
        key={index}
        className={`shrink-0 w-6 h-6 rounded-full ${
          result === "W" ? "bg-green-500" : "bg-brand-red"
        } text-white grid place-content-center text-xs font-bold`}
      >
        {result}
      </div>
    ));
  };

  const renderScores = (
    teamScores,
    opponentScores,
    teamName,
    opponentName,
    last5Matches
  ) => {
    return teamScores.map((score, index) => (
      <li
        key={index}
        className="flex flex-wrap justify-between items-center gap-2 px-4 py-4 rounded-lg shadow-sm bg-white"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <div
            className={`shrink-0 w-6 h-6 rounded-full ${
              last5Matches[index] === "W" ? "bg-green-500" : "bg-brand-red"
            } text-white grid place-content-center text-xs font-bold`}
          >
            {last5Matches[index]}
          </div>
          <span className="font-black text-primary">Vs {opponentName}</span>
        </div>
        <span className="text-gray-500 text-sm font-medium">
          {teamName} {score} | {opponentName} {opponentScores[index]}
        </span>
      </li>
    ));
  };

  return (
    <>
      <main>
        <section className="py-6">
          <div className="container max-w-[1048px] mx-auto px-3">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 border-b border-gray-200" />
              <div className="flex items-center gap-2">
                <Image
                  height={20}
                  src="/static/icons/saucelabs.svg"
                  width={16}
                  className="shrink-0"
                  alt=""
                />
                <span className="text-sm text-gray-500 font-semibold">
                  PL LABS
                </span>
              </div>
              <div className="flex-1 border-b border-gray-200" />
            </div>
            <div className="text-center mb-8">
              <h2 className="font-black text-primary text-5xl font-Noto">
                {data?.response?.title} Score Predictions Today Match
              </h2>
            </div>
            <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="flex items-center bg-light-blue rounded-lg mb-1">
                  <span className="text-sm font-bold text-gray-500 px-3">
                    To bat first
                  </span>
                  <div className="flex-1 border-b border-dashed border-primary" />
                  <div className="px-3 py-2 bg-primary rounded-lg text-white">
                    MI
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-center">
                    <h4 className="text-sm font-bold text-gray-500 max-w-28 mb-3">
                      AI Projected Score Of
                    </h4>
                    <div className="text-primary font-extrabold uppercase text-2xl bg-light-blue p-2 rounded-2xl inline-block">
                      MI
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between relative max-w-2xl mx-auto">
                  <div className="h-1/2 border-l border-dashed border-primary absolute left-1/2 -translate-x-1/2 top-0" />
                  <div className="bg-light-blue border border-primary rounded-lg py-4 px-12 text-center">
                    <div className="w-7 h-7 rounded-full border border-primary inline-grid place-content-center bg-white mb-2">
                      <Image
                        height={20}
                        src="/static/icons/bat-dark.svg"
                        width={15}
                        alt=""
                      />
                    </div>
                    <h5 className="text-3xl font-extrabold text-primary mb-1">
                      170
                    </h5>
                    <span className="text-sm font-semibold text-primary">
                      Runs
                    </span>
                  </div>
                  <div className="flex-1 flex items-center relative">
                    <div className="flex-1 border-b border-dashed border-primary" />
                    <div className="p-2 bg-white shrink-0">
                      <Image
                        height={20}
                        src="/static/icons/open-ai.svg"
                        width={32}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 border-b border-dashed border-primary" />
                  </div>
                  <div className="bg-light-blue border border-primary rounded-lg py-4 px-12 text-center">
                    <div className="w-7 h-7 rounded-full border border-primary inline-grid place-content-center bg-white mb-2">
                      <Image
                        height={20}
                        src="/static/icons/cricket-ball.svg"
                        width={15}
                        alt=""
                      />
                    </div>
                    <h5 className="text-3xl font-extrabold text-primary mb-1">
                      7
                    </h5>
                    <span className="text-sm font-semibold text-primary">
                      Wickets
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="text-base text-primary text-center uppercase font-extrabold mb-4">
                  1st Innings Score When
                </h4>
                <div className="tabs-slider inline-flex gap-3 mb-5 text-sm overflow-auto bg-light-primary rounded-full py-2 px-2 max-w-full">
                  <div className="tabs-item">
                    <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                      Head to Head
                    </button>
                  </div>
                  <div className="tabs-item">
                    <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                      MI Bats First
                    </button>
                  </div>
                  <div className="tabs-item">
                    <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                      RCB Bowls First
                    </button>
                  </div>
                  <div className="tabs-item">
                    <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                      At This Venue
                    </button>
                  </div>
                </div>
                <div className="bg-light-primary p-4 rounded-lg grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 col-span-1 gap-4">
                  <div className="col-span-1 p-6 rounded-lg border border-primary/40 bg-white text-center">
                    <div className="flex gap-3 items-center max-w-24 mx-auto mb-4">
                      <div className="shrink-0 flag">
                        <Image
                          height={20}
                          src="/static/england.png"
                          width={22}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 border-b border-dashed border-primary" />
                      <div className="shrink-0 flag">
                        <Image
                          height={20}
                          src="/static/mumbai-indians.png"
                          width={22}
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="text-black font-bold text-sm">MI vs CSK</h4>
                    <h4 className="text-black font-bold text-sm mb-2">180/5</h4>
                    <h4 className="text-gray-500 font-bold text-sm">
                      16 Jun 06:00 am
                    </h4>
                  </div>
                  {/* Repeat the above block for other match items */}
                </div>
              </div>
            </div>
            <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <h6 className="text-base font-black text-primary mb-4">
                  STATS
                </h6>
                <div className="accordion flex flex-col gap-4">
                  <div className="accordion-item bg-light-blue rounded-lg px-4 py-3">
                    <button className="flex items-center justify-between w-full">
                      <span className="text-primary font-bold text-sm">
                        {plStatsTeamA?.team_name}’s Form
                      </span>
                      <div className="flex items-center gap-2">
                        {renderForm(plStatsTeamA?.last_5_matches)}
                        <div className="icon shrink-0">
                          <Image
                            height={20}
                            src="/static/icons/chevron-down.svg"
                            width={12}
                            alt=""
                          />
                        </div>
                      </div>
                    </button>
                    <div className="pt-3">
                      <ul className="flex flex-col gap-3 border-t border-dashed border-primary pt-3">
                        {renderScores(
                          plStatsTeamA?.team_1_scores,
                          plStatsTeamA?.team_2_scores,
                          plStatsTeamA?.team_name,
                          plStatsTeamB?.team_name,
                          plStatsTeamA?.last_5_matches
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="accordion-item bg-light-blue rounded-lg px-4 py-3">
                    <button className="flex items-center justify-between w-full">
                      <span className="text-primary font-bold text-sm">
                        {plStatsTeamB?.team_name}’s Form
                      </span>
                      <div className="flex items-center gap-2">
                        {renderForm(plStatsTeamB?.last_5_matches)}
                        <div className="icon shrink-0">
                          <Image
                            height={20}
                            src="/static/icons/chevron-down.svg"
                            width={12}
                            alt=""
                          />
                        </div>
                      </div>
                    </button>
                    <div className="pt-3">
                      <ul className="flex flex-col gap-3 border-t border-dashed border-primary pt-3">
                        {renderScores(
                          plStatsTeamB?.team_1_scores,
                          plStatsTeamB?.team_2_scores,
                          plStatsTeamB?.team_name,
                          plStatsTeamA?.team_name,
                          plStatsTeamB?.last_5_matches
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
