import Image from "next/image";
import React from "react";

const ThisRecentMatches = ({ team_matches }) => {
  //   console.log(team_matches, "ih3fnolugb4eog");
  return (
    <>
      {team_matches?.response?.items?.map((match) => {
        return (
          <>
            <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="text-gray-500 text-xs font-semibold mb-3 text-center">
                  {new Date(match?.date_start).toLocaleDateString()}{" "}
                  {match?.competition?.title}
                </p>
                <div className="flex items-center gap-3 justify-between mb-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flag shrink-0">
                        <Image
                          height={20}
                          width={20}
                          src={match?.teama?.logo_url}
                          alt=""
                        />
                      </div>
                      <span className="text-black text-sm font-bold">
                        {match?.teama?.short_name}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Image
                      height={20}
                      width={20}
                      src={"/static/icons/vs.svg"}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <div className="flag shrink-0">
                        <Image
                          height={20}
                          width={20}
                          src={match?.teamb?.logo_url}
                          alt=""
                        />
                      </div>
                      <span className="text-black text-sm font-bold">
                        {match?.teamb?.short_name}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-primary text-xs font-semibold text-center">
                  {match?.status_note}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ThisRecentMatches;
