import React from "react";
import Link from "next/link";

const MatchDetailsMenuItem = (props) => {
  return (
    <>
      <Link href={`/${props?.match_url}/${props?.link}`}>
        <button className="rounded-md shadow-xl p-6 flex flex-col items-center w-full aspect-square justify-center">
          {props?.icon}
          {props?.title}
        </button>
      </Link>
    </>
  );
};

export default MatchDetailsMenuItem;
