import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchMatchInfo = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  return data;
};

const MatchDetailsHead = async (props) => {
  const data = await fetchMatchInfo(props.match_id);
  // console.log(data, "data");
  const time = data?.response?.timestamp_start * 1000;
  const date = new Date(time).toLocaleString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <>
      <div
        style={{ backgroundColor: "#F6F8FF" }}
        className="px-5 py-5 flex flex-col items-center gap-4"
      >
        <div className="teamNames flex justify-between w-full">
          <div className="teamA flex gap-2 font-semibold">
            <Image
              src={data?.response?.teama?.logo_url}
              height={20}
              width={20}
              alt=""
              style={{ width: "auto", height: "30px" }}
            />
            {data?.response?.teama?.short_name}
          </div>
          <div
            style={{ backgroundColor: "#E4453B" }}
            className="matchStatus text-white px-4 py-1 rounded-full flex gap-2 items-center"
          >
            <div className="p-1 bg-white h-1 w-1 rounded-full"></div>
            {data?.response?.status_str}
          </div>
          <div className="teamB flex gap-2 font-semibold">
            <Image
              src={data?.response?.teamb?.logo_url}
              height={20}
              width={20}
              alt=""
              style={{ width: "auto", height: "30px" }}
            />
            {data?.response?.teamb?.short_name}
          </div>
        </div>

        <div className="scoreCardButton">
          <Link href={`${props?.match_url}/fantasy-team`}>
            <button className="p-2 border-2 rounded-full px-5 flex justify-center items-center gap-2">
              Fantasy Team <FaArrowRight />
            </button>
          </Link>
        </div>

        <div className="matchTimeStart font-semibold">{date}</div>
      </div>
    </>
  );
};

export default MatchDetailsHead;
