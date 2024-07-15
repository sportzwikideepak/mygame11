import React from "react";

const PlayerPageHead = () => {
  return (
    <>
      <div className="">
        <select name="match_type" id="">
          <option value="odi">ODI</option>
          <option value="test">TEST</option>
          <option value="t20">T20</option>
        </select>
      </div>
    </>
  );
};

export default PlayerPageHead;
