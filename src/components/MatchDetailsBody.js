import React from "react";
import MatchDetailsMenuItem from "./MatchDetailsMenuItem";
import { MdPinDrop } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineSportsCricket } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

const MatchDetailsBody = ({ match_url }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 px-4 mt-4">
        <MatchDetailsMenuItem
          title={"Squad"}
          icon={<FaPeopleGroup size={50} />}
          link={"squad"}
          match_url={match_url}
        />
        <MatchDetailsMenuItem
          title={"Venue/Pitch Report"}
          icon={<MdPinDrop size={50} />}
          link={"venue"}
          match_url={match_url}
        />
        <MatchDetailsMenuItem
          title={"Head To Head"}
          icon={<MdPinDrop size={50} />}
          link={"head-to-head"}
          match_url={match_url}
        />
        <MatchDetailsMenuItem
          title={"Team stats"}
          icon={<IoIosStats size={50} />}
          link={"tvt"}
          match_url={match_url}
        />
        {/* <MatchDetailsMenuItem
          title={"Player vs Team"}
          icon={<IoIosStats size={50} />}
          link={"pvt"}
          match_url={match_url}
        /> */}
        {/* <MatchDetailsMenuItem
          title={"Match Insights"}
          icon={<MdOutlineSportsCricket size={50} />}
          link={"match-insight"}
          match_url={match_url}
        /> */}
        {/* <MatchDetailsMenuItem title={''} /> */}
      </div>
    </>
  );
};

export default MatchDetailsBody;
