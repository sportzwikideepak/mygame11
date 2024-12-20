// import { fetchData } from "@/hooks/fetchData";
import React from "react";
const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
// const entity_base_url_v4 = process.env.ENTITY_BASE_URL_V4;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchData = async (match_id) => {
  const res = await fetch(
    `
    ${entity_base_url_v2}/matches/${match_id}/newpoint2?token=${entity_api_key}`,
    { next: { revalidate: 3000 } }
  );
  const data = await res.json();
  // console.log(data.response.teama.name, "janvo");

  // Add a teamName property to each player in teama.playing11
  const teamAPlayers = data.response.points.teama.playing11.map((player) => ({
    ...player,
    teamName: data.response.teama.name, // Using the team name from the teama object
  }));

  // Add a teamName property to each player in teamb.playing11
  const teamBPlayers = data.response.points.teamb.playing11.map((player) => ({
    ...player,
    teamName: data.response.teamb.name, // Using the team name from the teamb object
  }));

  const playersData = [...teamAPlayers, ...teamBPlayers];

  return playersData;
};

const page = async () => {
  const playersData = await fetchData(73793);
  // console.log(playersData, "fuADFFaufkdfGJKHJFAHKfshKAFSGHKahsJAFJA");

  return (
    <>
      <table
        style={{
          overflow: "scroll",
          position: "absolute",
          background: "white",
        }}
      >
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Team</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Fantasy Points</th>
            {/* <th>Value</th> */}
            {/* <th>Number of Stats</th> */}
            <th>Runs</th>
            <th>Century</th>
            <th>Half Century</th>
            <th>thirty</th>

            <th>Sixes</th>
            <th>Fours</th>
            <th>Wickets</th>
            <th>Ducks</th>
            <th> Bonus Bowled LBW</th>
            {/* <th>LBW</th> */}
            <th>Catches</th>
            <th>Maiden Overs</th>
            <th>Run Out Catch</th>
            <th>Run Out Throw</th>
            <th>Stumpings</th>
            {/* <th>Average Economy</th> */}
            {/* <th>Average Strike Rate</th> */}
          </tr>
        </thead>
        <tbody>
          {playersData?.map((player) => {
            return (
              <tr key={player.pid}>
                <td>{player.name}</td>
                <td>{player.teamName}</td>
                <td>{player.role}</td>
                <td>{player.rating}</td>
                <td>{player.point}</td>
                {/* <td>player.value</td> */}
                {/* <td>player.numberOfStats</td> */}
                <td>{player.run}</td>
                <td>{player.run >= 50 && player.run < 100 ? 1 : 0}</td>
                <td>{player.run >= 100 ? Math.floor(player.run / 100) : 0}</td>
                <th>{player.thirty}</th>

                <td>{player.six}</td>
                <td>{player.four}</td>
                <td>{player.wkts}</td>
                <td>{player.duck}</td>
                <td>{player.bonusbowedlbw}</td>

                {/* <td>player.bowled</td> */}
                {/* <td>player.lbw</td> */}
                <td>{player.catch}</td>
                <td>{player.maidenover}</td>
                <td>{player.runoutcatcher}</td>
                <td>{player.runoutthrower}</td>
                <td>{player.stumping}</td>
                {/* <td>player.averageEconomy</td> */}
                {/* <td>player.averageStrikeRate</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default page;
