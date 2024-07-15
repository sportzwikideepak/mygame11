"use client";
import { useState } from "react";
import StatsPlaygroundFilter from "@/components/statsPlayground/StatsPlaygroundFilter";
import StatsPlaygroundHead from "@/components/statsPlayground/StatsPlaygroundHead";
import StatsPlaygroundFilterJson from "../../../seeds/statsPlaygroundFilter.json";
import styles from "./statsPlayground.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const StatsPlaygrondFilterMain = (props) => {
  const [selectedStatType, setSelectedStatType] = useState("");

  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Last5Matches");

  const handleStatTypeChange = (key) => {
    setSelectedStatType(key);
  };

  const handleTimeFrameChange = (key) => {};

  const handleBlank = (key) => {};

  return (
    <>
      <div className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-500 font-semibold mb-4 text-center">
          Find the best players by customizing data views for your fantasy
          research
        </p>
        <div className="accordion flex flex-col gap-6">
          <StatsPlaygroundFilter
            handleChange={handleStatTypeChange}
            data={StatsPlaygroundFilterJson.top_player_based_on}
            name="Stats Type"
            head="Select"
          />

          <StatsPlaygroundFilter
            handleChange={handleBlank}
            data={StatsPlaygroundFilterJson.venue}
            name="Venue"
            head="Select"
          />

          <StatsPlaygroundFilter
            handleChange={handleTimeFrameChange}
            data={StatsPlaygroundFilterJson.totalMatches}
            name="Duration"
            head="From"
          />

          <div className="text-end">
            {selectedStatType && selectedTimeFrame && (
              <Link
                href={`/${props?.currentPath}/stats-playground/data?statType=${selectedStatType}&timeFrame=${selectedTimeFrame}`}
              >
                <button className="text-sm font-semibold py-2 px-6 border border-brand-red rounded-full text-brand-red hover:bg-brand-red/5 active:bg-white">
                  Submit
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <div className={styles.page}>
        <div className={styles.main}>
          <StatsPlaygroundHead
            title={props?.title}
            currentPath={props?.currentPath}
          />
          <div className={styles.textline}>
            Find the best players by customizing data views for your fantasy
            research
          </div>
          <div className={styles.cardcontainer}>
            <StatsPlaygroundFilter
              handleChange={handleStatTypeChange}
              data={StatsPlaygroundFilterJson.top_player_based_on}
              name="Stats Type"
              head="Select"
            />

            <StatsPlaygroundFilter
              handleChange={handleBlank}
              data={StatsPlaygroundFilterJson.venue}
              name="Venue"
              head="Select"
            />

            <StatsPlaygroundFilter
              handleChange={handleTimeFrameChange}
              data={StatsPlaygroundFilterJson.totalMatches}
              name="Duration"
              head="From"
            />
          </div>

          <div className={styles.submit}>
            {selectedStatType && selectedTimeFrame && (
              <Link
                href={`/${props?.currentPath}/stats-playground/data?statType=${selectedStatType}&timeFrame=${selectedTimeFrame}`}
              >
                <button className={styles.Submitbutton}>Submit</button>
              </Link>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default StatsPlaygrondFilterMain;
