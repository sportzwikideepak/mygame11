import React from "react";

const TabButtons = ({ activeTab, setActiveTab }) => {
  const tabButtons = [
    { id: "simple", label: "Simple" },
    { id: "advanced", label: "Advanced" },
  ];

  return (
    <div className="tabs-slider inline-flex gap-3 mb-5 text-sm overflow-auto bg-light-primary rounded-full py-2 px-2 max-w-full">
      {tabButtons.map((tab) => (
        <div className="tabs-item" key={tab.id}>
          <button
            className={`font-semibold rounded-full py-1 px-5 whitespace-nowrap w-full ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "text-primary bg-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabButtons;
