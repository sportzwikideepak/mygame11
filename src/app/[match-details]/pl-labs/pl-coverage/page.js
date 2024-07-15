import Image from "next/image";
import React from "react";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;
const local_sw_api_url = process.env.LOCAL_SW_API_BASE_URL;

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

  return (
    <>
      <section className="py-6">
        <div className="container max-w-[1048px] mx-auto px-3">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1 border-b border-gray-200"></div>
            <div className="flex items-center gap-2">
              <Image
                src="/static/icons/saucelabs.svg"
                width={16}
                height={20}
                className="shrink-0"
                alt=""
              />
              <span className="text-sm text-gray-500 font-semibold">
                PL LABS
              </span>
            </div>
            <div className="flex-1 border-b border-gray-200"></div>
          </div>

          <div className="text-center mb-8">
            <h2 className="font-black text-primary text-5xl font-Noto max-w-lg mx-auto leading-snug">
              Impact Players For {data?.response?.title} Match
            </h2>
          </div>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-bold text-gray-500 mb-4">
                The Player Comprehensive Involvement Index (PLCI) evaluates a
                player’s game impact by analyzing both batting and bowling
                performances.
              </p>
              <p className="text-primary font-black text-sm mb-4">
                Interpreting the Numbers
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    100% Batting Coverage
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Player is an opener and has the potential to face the
                    maximum number of deliveries.
                  </p>
                </li>

                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    100% Bowling Coverage
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Bowler consistently contributes the maximum number of overs.
                    In the last few matches, the bowler has been bowling full
                    quota of overs.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="tabs-slider inline-flex gap-3 mb-5 text-sm overflow-auto bg-light-primary rounded-full py-2 px-2 max-w-full">
                <div className="tabs-item">
                  <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                    Overall
                  </button>
                </div>
                <div className="tabs-item">
                  <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                    MI
                  </button>
                </div>
                <div className="tabs-item">
                  <button className="font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full text-primary bg-white">
                    CSK
                  </button>
                </div>
              </div>

              <div className="overflow-auto">
                <table className="w-full border-collapse text-sm divide-y divide-gray-200 border border-gray-200 bg-white">
                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th className="text-start text-white py-3 px-3 bg-primary">
                        Players
                      </th>
                      <th className="text-center text-white py-3 px-3 bg-primary whitespace-nowrap">
                        BAT CI
                      </th>
                      <th className="text-center text-white py-3 px-3 bg-primary whitespace-nowrap">
                        Bowl CI
                      </th>
                      <th className="text-center text-white py-3 px-3 bg-primary whitespace-nowrap">
                        Overall CI
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <tr key={index} className="divide-x divide-gray-200">
                        <td className="py-3 px-3 bg-white">
                          <div className="flex items-center gap-2">
                            <div className="thumb">
                              <Image
                                src="/static/players/player1.png"
                                width={38}
                                height={20}
                                alt=""
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-primary mb-0.5">
                                R Sharma
                              </h4>
                              <p className="text-xs text-gray-500 font-medium">
                                IND/BAT
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-3 px-3 font-semibold bg-gray-50">
                          <h6 className="text-sm font-semibold text-primary">
                            100%
                          </h6>
                        </td>
                        <td className="text-center py-3 px-3 font-semibold bg-gray-50">
                          <h6 className="text-sm font-semibold text-primary">
                            100%
                          </h6>
                        </td>
                        <td className="text-center py-3 px-3 font-semibold bg-gray-50">
                          <h6 className="text-sm font-semibold text-primary">
                            100%
                          </h6>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <p className="text-primary font-black text-sm mb-4">
              HOW IT WORKS?
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-3 text-gray-500">
              <li>
                <p className="text-sm font-bold">
                  PLCI helps you assess the potential involvement of a player in
                  the game
                </p>
              </li>
              <li>
                <p className="text-sm font-bold">
                  PLCI Player = Batting Coverage + Bowling Coverage
                </p>
              </li>
              <li>
                <p className="text-sm font-bold">
                  Bowling coverage is calculated based on the potential number
                  of overs bowled by the bowler.
                </p>
              </li>
              <li>
                <p className="text-sm font-bold">
                  A higher PLCI means greater potential of a player to
                  contribute significantly to your team&apos;s performance.
                </p>
              </li>
            </ul>
          </div>

          <p className="text-primary text-sm font-bold mb-4">
            PerfectLineup Coverage Index is a comprehensive metric designed to
            help you assess the potential impact of a player on your fantasy
            cricket team. It considers both the batting and bowling aspects,
            providing a complete view of a player&apos;s involvement in the
            game. The higher the value, the more involved a player is.
          </p>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-primary font-black text-sm mb-4 uppercase">
                UNDERSTANDING THE VALUES
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Batting Coverage
                  </p>
                  <p className="text-gray-500 text-sm font-bold mb-2">
                    Reflects a player&apos;s potential involvement in the
                    batting aspect of the game.
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Higher values indicate a player who has the potential to
                    face more deliveries.
                  </p>
                </li>
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Overall Coverage
                  </p>
                  <p className="text-gray-500 text-sm font-bold mb-2">
                    Averages the batting and bowling coverage to provide a total
                    view.
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    A higher overall coverage suggests a player actively
                    contributing to both facets of the game.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-primary font-black text-sm mb-4 uppercase">
                WHY IT MATTERS
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Strategic Lineup Building
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Helps you build a balanced lineup with players actively
                    involved in both batting and bowling.
                  </p>
                </li>
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Informed Decision-Making
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Enables you to make choices based on a player&apos;s recent
                    performance and involvement on the field.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-primary font-black text-sm mb-4 uppercase">
                TIPS FOR USE
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Balancing Act
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Look for players with a good balance of batting and bowling
                    coverage for a well-rounded team.
                  </p>
                </li>
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Consistency is Key
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Players with consistently high overall coverage may be
                    strong choices.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-light-blue py-3 px-4 rounded-lg mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-primary font-black text-sm mb-4 uppercase">
                NOTE
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  <p className="text-primary text-sm font-bold mb-2">
                    Values based on the last 5 matches:
                  </p>
                  <p className="text-gray-500 text-sm font-bold mb-1">
                    Recent performance is a key factor in determining a
                    player&apos;s coverage.
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    By considering these coverage values, you can strategically
                    construct a fantasy cricket team poised for success.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
