import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrevMatchReport = ({
  matchDetails,
  data,
  status_note,
  currentPath,
  match_id,
  venue_id,
  matchInfo,
  // currentPath,
}) => {
  //   const thisMatchData = data?.filter((match) => match?.match_id == match_id);

  //   console.log(data, ":data");
  //   console.log(matchDetails, "match_id");

  //   console.log(thisMatchData, "thisMatchData");
  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <div className="mb-5">
          <p className="text-gray-500 text-xs font-semibold mb-3 text-center">
            {new Date(matchDetails[0]?.response?.date_start).toDateString()}{" "}
            {matchDetails[0]?.response?.competition?.title}
          </p>
          <div className="flex items-center gap-3 justify-between mb-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flag shrink-0">
                  <Image
                    height={20}
                    width={20}
                    src={matchDetails[0]?.response?.teama?.logo_url}
                    alt=""
                  />
                </div>
                <span className="text-black text-sm font-bold">
                  {matchDetails[0]?.response?.teama?.short_name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-black text-sm font-bold">
                  {matchDetails[0]?.response?.teama?.scores}
                </span>
                <span className="text-gray-500 text-sm font-bold">
                  ({matchDetails[0]?.response?.teama?.overs} ov)
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <Image height={20} width={20} src="/static/icons/vs.svg" alt="" />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="flag shrink-0">
                  <Image
                    height={20}
                    width={20}
                    src={matchDetails[0]?.response?.teamb?.logo_url}
                    alt=""
                  />
                </div>
                <span className="text-black text-sm font-bold">
                  {matchDetails[0]?.response?.teamb?.short_name}
                </span>
              </div>
              <div className="flex items-center gap-1 flex-row-reverse">
                <span className="text-black text-sm font-bold">
                  {matchDetails[0]?.response?.teamb?.scores}
                </span>
                <span className="text-gray-500 text-sm font-bold">
                  ({matchDetails[0]?.response?.teamb?.overs} ov)
                </span>
              </div>
            </div>
          </div>
          <p className="text-primary text-xs font-semibold text-center">
            {matchDetails[0]?.response?.status_note}
          </p>
        </div>

        <h4 className="text-primary text-sm mb-2 font-bold">
          Total Fanatasy Points 
        </h4>
        <div className="bg-primary relative rounded-lg p-4 isolate">
          <Image
            height={20}
            width={20}
            src="/static/card-bg.png"
            className="w-full h-full start-0 top-0 absolute object-cover -z-10 pointer-events-none"
            alt=""
          />
          <div className="relative mb-5">
            <div className="flex flex-col gap-5 mb-5">
              {matchInfo?.top_players?.map((player, index) => {
                return (
                  <div key={index} className="progress-item">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm font-semibold block">
                        {player?.player_short_name} ({player?.player_role}
                        {/* -{" "}
                        {player?.team_short_name} */}
                        )
                      </span>
                      <span className="text-white text-sm font-semibold block">
                        {player?.fantasy_points} pts
                      </span>
                    </div>
                    <div className="bg-white rounded-full flex">
                      <div
                        className="bg-red-700 h-0.5"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-white text-xs">T - Times, pts - Points</p>
          </div>

          <div className="text-center">
            <Link href={`/${currentPath}/venue-overview/dream-team`}>
              <button className="bg-white py-1 px-5 text-primary font-semibold rounded-full text-xs">
                Match Report
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrevMatchReport;
