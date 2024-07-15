import Image from "next/image";
import React from "react";

const MatchInfo = ({ info }) => {
  //   console.log(info, "match info");
  return (
    <>
      <div className="container max-w-[1048px] mx-auto px-3 mt-2">
        <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
          <div className="">
            <p className="text-gray-500 text-xs font-semibold mb-3 text-center">
              {new Date(info?.date_start).toDateString()}{" "}
              {info?.competition?.title}
            </p>
            <div className="flex items-center gap-3 justify-between mb-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="flag shrink-0">
                    <Image
                      height={20}
                      width={20}
                      src={info?.teama?.logo_url}
                      alt=""
                    />
                  </div>
                  <span className="text-black text-sm font-bold">
                    {info?.teama?.short_name}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-black text-sm font-bold">
                    {info?.teama?.scores}
                  </span>
                  <span className="text-gray-500 text-sm font-bold">
                    ({info?.teama?.overs} ov)
                  </span>
                </div>
              </div>
              <div className="shrink-0">
                <Image
                  height={20}
                  width={20}
                  src="/static/icons/vs.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 items-end">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="flag shrink-0">
                    <Image
                      height={20}
                      width={20}
                      src={info?.teamb?.logo_url}
                      alt=""
                    />
                  </div>
                  <span className="text-black text-sm font-bold">
                    {info?.teamb?.short_name}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-row-reverse">
                  <span className="text-black text-sm font-bold">
                    {info?.teamb?.scores}
                  </span>
                  <span className="text-gray-500 text-sm font-bold">
                    ({info?.teamb?.overs} ov)
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary text-xs font-semibold text-center">
              {info?.status_note}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchInfo;
