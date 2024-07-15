import Image from "next/image";
import React from "react";

const TeamLineupSelectTeam = ({
  matchId,
  teamBasis,
  platform,
  teamCount,
  wkCount,
  batCount,
  arCount,
  bowCount,
  teamType,
  playing11,
  playing11Main,
  teamNames,
  stats,
  selectedTeam,
  setSelectedTeam,
  setShowResult,
}) => {
  if (!stats) {
    return <div>Loading...</div>;
  }

  const removePlayer = (playerPid) => {
    const updatedTeam = selectedTeam.filter(
      (player) => player.pid !== playerPid
    );
    setSelectedTeam(updatedTeam);
  };

  // console.log(selectedTeam, "selectedTeamselectedTeam");

  return (
    <section className="py-6">
      <div className="container max-w-[1048px] mx-auto px-3">
        <div className="bg-light-blue py-3 px-4 rounded-lg">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-center mb-4">
              <h6 className="text-primary font-black uppercase text-sm mb-2">
                3. PLAYER SELECTION
              </h6>
              <p className="text-xs text-gray-500 font-bold">
                Look or exclude players to generate your own personalized teams
              </p>
            </div>
            <div className="overflow-auto">
              <table className="w-full border-collapse text-sm divide-y divide-gray-200 bg-white">
                <thead>
                  <tr>
                    <th className="text-start text-white py-3 px-3 bg-primary">
                      Players
                    </th>
                    <th
                      width={150}
                      className="text-center text-white py-3 px-3 bg-primary whitespace-nowrap"
                    >
                      Fantasy Points
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-light-blue">
                  {selectedTeam?.map((player, index) => (
                    <tr key={index}>
                      <td className="py-3 px-3 text-left">
                        <div className="inline-flex items-center gap-2 bg-white rounded-lg relative">
                          <div className="thumb px-3 py-3 border-r border-gray-200">
                            <Image
                              height={20}
                              src="/static/players/player1.png"
                              width={38}
                              alt=""
                            />
                          </div>
                          <div className="px-4 py-3">
                            <h4 className="text-sm font-bold text-primary mb-0.5">
                              {player?.name}
                            </h4>
                            <p className="text-xs text-gray-500 font-medium">
                              {teamNames[player.team_id]}/
                              {player?.role?.toUpperCase()}
                            </p>
                          </div>
                          <button
                            className="w-5 h-5 bg-primary rounded-full grid place-content-center absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                            onClick={() => removePlayer(player.pid)}
                          >
                            <Image
                              height={20}
                              src="/static/icons/close.svg"
                              width={8}
                              alt=""
                            />
                          </button>
                        </div>
                      </td>

                      <td className="text-center py-3 px-3 font-semibold">
                        <h6 className="text-sm font-semibold text-primary">
                          {player?.player_stats?.player
                            ?.fantasy_player_rating || "N/A"}
                        </h6>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between gap-3 px-6 py-6">
              {/* <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-semibold">
                  Number of Teams
                </span>
                <button className="w-8 h-8 bg-gray-100 grid place-content-center text-primary text-xl font-black rounded-full">
                  -
                </button>
                <span className="text-primary text-xl font-black">
                  {teamCount}
                </span>
                <button className="w-8 h-8 bg-gray-100 grid place-content-center text-primary text-xl font-black rounded-full">
                  +
                </button>
              </div> */}

              <button
                onClick={() => setShowResult(true)}
                className="text-sm font-black text-white bg-primary rounded-full py-2 px-5 hover:bg-blue-950 active:bg-primary"
              >
                Generate {teamCount} Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLineupSelectTeam;
