import Image from "next/image";
import React from "react";

const WeatherNew = ({ weatherData }) => {
  //   console.log(weatherData, "weatherDataefrnj");
  return (
    <>
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg mt-5 mx-1 mb-1">
        <div className="py-3 px-4 flex items-center gap-[10px] border-b border-gray-200">
          <div className="icon">
            <Image
              height={20}
              width={20}
              src="/static/icons/stadium-outline.svg"
              alt=""
            />
          </div>
          <h4 className="text-title-gray font-bold">VENUE WEATHER</h4>
          {/* <a
            className="ms-auto flex items-center gap-2 text-title-gray text-sm font-bold"
            href=""
          >
            View All
            <Image
              height={20}
              width={20}
              src="/static/icons/long-arrow-right.svg"
              alt=""
            />
          </a> */}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <div className="col-span-1 text-center py-8 px-8">
            <div className="icon-sun">
              <Image
                height={20}
                width={20}
                src="/static/icons/sun.svg"
                className="mx-auto mb-2"
                alt=""
              />
            </div>
            <h6 className="text-black font-bold text-sm">
              {weatherData?.temp}*c
            </h6>
            <span className="text-gray-500 text-sm">
              {weatherData?.weather_desc}
            </span>
          </div>
          <div className="flex flex-col divide-y divide-gray-200 text-center">
            <div className="flex-1 flex flex-col justify-center items-center p-4">
              <h6 className="text-black font-bold text-sm">
                {weatherData?.humidity}%
              </h6>
              <span className="text-gray-500 text-sm">Humidity</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center p-4">
              <h6 className="text-black font-bold text-sm">
                {weatherData?.wind_speed} meter/sec
              </h6>
              <span className="text-gray-500 text-sm">Wind</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherNew;
