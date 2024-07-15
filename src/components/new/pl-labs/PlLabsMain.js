import Image from "next/image";
import React from "react";
import PlayerVsPlayer from "../data-analytics/PlayerVsPlayer";
import Link from "next/link";

const PlLabsMain = ({ top_players, currentUrl }) => {
  return (
    <>
      <main class="">
        <section class="py-6">
          <div class="container max-w-[1048px] mx-auto px-3">
            <div class="flex items-center gap-2 mb-6">
              <div class="flex-1 border-b border-gray-200"></div>
              <div class="flex items-center gap-2">
                <Image
                  height={20}
                  width={20}
                  src="/static/icons/saucelabs.svg"
                  class="shrink-0"
                  alt=""
                />
                <span class="text-sm text-gray-500 font-semibold">PL LABS</span>
              </div>
              <div class="flex-1 border-b border-gray-200"></div>
            </div>
            <div class="grid grid-cols-12 gap-4 2xl:gap-6">
              <div class="col-span-12">
                <div class="">
                  <div class="bg-light-blue py-3 px-4 rounded-lg">
                    <div class="grid grid-cols-2 sm:grid-cols-1 gap-4">
                      <Link
                        href={`/${currentUrl}/pl-labs/score-win-prediction`}
                      >
                        <div class="bg-white rounded-lg p-4 text-center">
                          <div class="icon mb-2">
                            <Image
                              height={40}
                              width={40}
                              class="mx-auto"
                              src="/static/icons/predictor.svg"
                              alt=""
                            />
                          </div>
                          <h4 class="text-lg text-primary font-black mb-2">
                            Score and Win Predictor
                          </h4>
                          <p class="text-sm font-bold text-gray-500">
                            Get forecasts of match scores and victory margins
                            with our AI-driven, user friendly tools
                          </p>
                        </div>
                      </Link>

                      <Link href={`/${currentUrl}/pl-labs/pl-coverage`}>
                        <div class="bg-white rounded-lg p-4 text-center">
                          <div class="icon mb-2">
                            <Image
                              height={40}
                              width={40}
                              class="mx-auto"
                              src="/static/icons/coverage.svg"
                              alt=""
                            />
                          </div>
                          <h4 class="text-lg text-primary font-black mb-2">
                            PL Coverage Index
                          </h4>
                          <p class="text-sm font-bold text-gray-500">
                            Discover high impact players easily based on
                            potential for significant game involvement
                          </p>
                        </div>
                      </Link>

                      <div class="bg-white rounded-lg p-4 text-center">
                        <div class="icon mb-2">
                          <Image
                            height={40}
                            width={40}
                            class="mx-auto"
                            src="/static/icons/combination.svg"
                            alt=""
                          />
                        </div>
                        <h4 class="text-lg text-primary font-black mb-2">
                          Player Combination
                        </h4>
                        <p class="text-sm font-bold text-gray-500">
                          This guide is super useful for identifying player
                          combinations that are likely to score big.
                        </p>
                      </div>

                      <div class="bg-white rounded-lg p-4 text-center">
                        <div class="icon mb-2">
                          <Image
                            height={40}
                            width={40}
                            class="mx-auto"
                            src="/static/icons/suggestions.svg"
                            alt=""
                          />
                        </div>
                        <h4 class="text-lg text-primary font-black mb-2">
                          Caption Suggestions
                        </h4>
                        <p class="text-sm font-bold text-gray-500">
                          Identify the perfect caption pick for your fantasy
                          team by answering 5 quick questions on your team
                          strategy and match conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PlayerVsPlayer top_players={top_players} />
          </div>
        </section>

        {/* <section class="py-6">
          <div class="container max-w-[1048px] px-3 mx-auto">
            <div class="bg-white shadow-sm border border-gray-200 rounded-lg">
              <div class="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
                <div class="icon">
                  <Image
                    height={20}
                    width={20}
                    src="/static/icons/compare.svg"
                    alt=""
                  />
                </div>
                <h4 class="text-title-gray font-bold">
                  TOP PLAYER COMPARISION
                </h4>

                <a
                  class="ms-auto flex items-center gap-2 text-title-gray text-sm font-bold"
                  href=""
                >
                  View All
                  <Image
                    height={20}
                    width={20}
                    src="/static/icons/long-arrow-right.svg"
                    alt=""
                  />
                </a>
              </div>
              <div class="p-4">
                <div class="grid grid-cols-12 gap-3">
                  <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-light-blue text-center border border-gray-50/50 rounded-lg">
                    <div class="bg-primary rounded-lg p-3 flex gap-2">
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full1.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            R SHARMA
                          </span>
                        </div>
                      </div>
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full2.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            V Kohli
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul class="compare-list divide-y divide-gray-200">
                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">15</span>
                        <span class="text-gray-500">Matches</span>
                        <span class="text-black">15</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">8</span>
                        <span class="text-gray-500">Win</span>
                        <span class="text-brand-red">7</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">156.1</span>
                        <span class="text-gray-500">Avg Runs</span>
                        <span class="text-black">158.2</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">205</span>
                        <span class="text-gray-500">Max Runs</span>
                        <span class="text-black">219</span>
                      </li>
                    </ul>
                    <div class="py-4">
                      <a
                        class="ms-auto inline-flex items-center gap-2 text-title-gray text-sm font-bold"
                        href=""
                      >
                        View All
                        <Image
                          height={20}
                          width={20}
                          src="/static/icons/long-arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-light-blue text-center border border-gray-50/50 rounded-lg">
                    <div class="bg-primary rounded-lg p-3 flex gap-2">
                      <div class="w-1/2 bg-white rounded-t-lg text-center">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full3.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            MS DHONI
                          </span>
                        </div>
                      </div>
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full4.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate block w-full">
                            David Warner
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul class="compare-list divide-y divide-gray-200">
                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">15</span>
                        <span class="text-gray-500">Matches</span>
                        <span class="text-black">15</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">8</span>
                        <span class="text-gray-500">Win</span>
                        <span class="text-brand-red">7</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">156.1</span>
                        <span class="text-gray-500">Avg Runs</span>
                        <span class="text-black">158.2</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">205</span>
                        <span class="text-gray-500">Max Runs</span>
                        <span class="text-black">219</span>
                      </li>
                    </ul>
                    <div class="py-4">
                      <a
                        class="ms-auto inline-flex items-center gap-2 text-title-gray text-sm font-bold"
                        href=""
                      >
                        View All
                        <Image
                          height={20}
                          width={20}
                          src="/static/icons/long-arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-light-blue text-center border border-gray-50/50 rounded-lg">
                    <div class="bg-primary rounded-lg p-3 flex gap-2">
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full2.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            V KOHLI
                          </span>
                        </div>
                      </div>
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full3.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            MS DHONI
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul class="compare-list divide-y divide-gray-200">
                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">15</span>
                        <span class="text-gray-500">Matches</span>
                        <span class="text-black">15</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">8</span>
                        <span class="text-gray-500">Win</span>
                        <span class="text-brand-red">7</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">156.1</span>
                        <span class="text-gray-500">Avg Runs</span>
                        <span class="text-black">158.2</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">205</span>
                        <span class="text-gray-500">Max Runs</span>
                        <span class="text-black">219</span>
                      </li>
                    </ul>
                    <div class="py-4">
                      <a
                        class="ms-auto inline-flex items-center gap-2 text-title-gray text-sm font-bold"
                        href=""
                      >
                        View All
                        <Image
                          height={20}
                          width={20}
                          src="/static/icons/long-arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-light-blue text-center border border-gray-50/50 rounded-lg">
                    <div class="bg-primary rounded-lg p-3 flex gap-2">
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full1.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            R SHARMA
                          </span>
                        </div>
                      </div>
                      <div class="w-1/2 bg-white rounded-t-lg text-center flex-grow-0">
                        <Image
                          height={20}
                          width={20}
                          src="/static/players/player-full2.png"
                          class="mx-auto"
                          alt=""
                        />
                        <div class="border-t border-gray-200 px-3 py-1">
                          <span class="text-black text-sm font-bold uppercase truncate">
                            V Kohli
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul class="compare-list divide-y divide-gray-200">
                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">15</span>
                        <span class="text-gray-500">Matches</span>
                        <span class="text-black">15</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-black">8</span>
                        <span class="text-gray-500">Win</span>
                        <span class="text-brand-red">7</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">156.1</span>
                        <span class="text-gray-500">Avg Runs</span>
                        <span class="text-black">158.2</span>
                      </li>

                      <li class="py-2 px-4 text-sm font-bold flex items-center justify-between">
                        <span class="text-brand-red">205</span>
                        <span class="text-gray-500">Max Runs</span>
                        <span class="text-black">219</span>
                      </li>
                    </ul>
                    <div class="py-4">
                      <a
                        class="ms-auto inline-flex items-center gap-2 text-title-gray text-sm font-bold"
                        href=""
                      >
                        View All
                        <Image
                          height={20}
                          width={20}
                          src="/static/icons/long-arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default PlLabsMain;
