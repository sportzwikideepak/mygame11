import Image from "next/image";
import React, { useState } from "react";

const AdvancedTeam = ({
  numberOfTeams,
  setNumberOfTeams,
  numberOfBow,
  setNumberOfBow,
  numberOfAr,
  setNumberOfAr,
  numberOfBat,
  setNumberOfBat,
  numberOfWk,
  setNumberOfWk,
}) => {
  const [teamFormation, setTeamFormation] = useState({
    wk: numberOfWk,
    bat: numberOfBat,
    ar: numberOfAr,
    bow: numberOfBow,
  });
  const [teamSelection, setTeamSelection] = useState("none");
  const [teamVariation, setTeamVariation] = useState(1);
  const [captainViceCaptainSetting, setCaptainViceCaptainSetting] = useState(1);

  const handleTeamFormationChange = (role, value) => {
    const newValue = parseInt(value);
    const totalPlayers =
      teamFormation.wk +
      teamFormation.bat +
      teamFormation.ar +
      teamFormation.bow +
      newValue -
      teamFormation[role];

    if (totalPlayers <= 11) {
      setTeamFormation((prev) => ({
        ...prev,
        [role]: newValue,
      }));

      switch (role) {
        case "wk":
          setNumberOfWk(newValue);
          break;
        case "bat":
          setNumberOfBat(newValue);
          break;
        case "ar":
          setNumberOfAr(newValue);
          break;
        case "bow":
          setNumberOfBow(newValue);
          break;
        default:
          break;
      }
    } else {
      alert("Total players cannot exceed 11");
    }
  };

  return (
    <div>
      <div className="bg-light-blue p-4 rounded-lg mb-5">
        <div className="flex-1 flex items-center relative mb-5">
          <div className="flex-1 border-b border-dashed border-primary"></div>
          <div className="p-2">
            <h4 className="text-primary font-black text-sm uppercase">
              3. (PICK TEAM FORMATION)
            </h4>
          </div>
          <div className="flex-1 border-b border-dashed border-primary"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["wk", "bat", "ar", "bow"].map((role) => (
            <div
              key={role}
              className="col-span-2 md:col-span-1 bg-white rounded-lg border border-gray-200 px-4 py-2"
            >
              <div className="flex items-center mx-auto gap-2">
                <span className="text-primary text-sm font-bold">
                  {role.toUpperCase()}
                </span>
                <input
                  type="range"
                  className="range-control w-full accent-current text-primary"
                  name={role}
                  value={teamFormation[role]}
                  min="0"
                  max="8"
                  onChange={(e) =>
                    handleTeamFormationChange(role, e.target.value)
                  }
                />
                <span className="text-gray-500 whitespace-nowrap text-sm font-bold">
                  1-8({teamFormation[role]})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-light-blue p-4 rounded-lg mb-5">
        <div className="flex-1 flex items-center relative mb-5">
          <div className="flex-1 border-b border-dashed border-primary"></div>
          <div className="p-2">
            <h4 className="text-primary font-black text-sm uppercase">
              7. (Number Of Teams)
            </h4>
          </div>
          <div className="flex-1 border-b border-dashed border-primary"></div>
        </div>

        <div className="text-center overflow-auto">
          <div className="flex max-w-lg items-center mx-auto gap-2 mb-2">
            <span className="text-primary text-sm font-bold">
              {numberOfTeams}
            </span>
            <input
              type="range"
              className="w-100 range-control w-full accent-current text-primary"
              name="numberOfTeams"
              value={numberOfTeams}
              min="0"
              max="100"
              onChange={(e) => setNumberOfTeams(parseInt(e.target.value))}
            />
            <span className="text-primary text-sm font-bold">100</span>
          </div>
          <span className="text-sm font-bold text-gray-500">
            Generate {numberOfTeams} Teams
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTeam;
