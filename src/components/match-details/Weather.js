import React from "react";
import styles from "../../app/[match-details]/matchDetails.module.css";
import Image from "next/image";

const Weather = (props) => {
  return (
    <>
      <div className={`${styles.weathercontainer}`}>
        <div className={`${styles.header3}`}>
          <h2>Venue Weather</h2>
          <a href="#" className={`${styles.viewlink}`}>
            View full →
          </a>
        </div>
        <div className={`${styles.weatherinfo}`}>
          <div className={`${styles.leftside}`}>
            <div className={`${styles.weatherblock}`}>
              <Image
                height={20}
                width={20}
                src="/static/Sun.png"
                alt="Sunny"
                className={`${styles.weathericon}`}
              />
              <div>
                <p className={`${styles.temperature}`}>{props?.temp}°C</p>
                <p className={`${styles.description}`}>{props?.weather_desc}</p>
              </div>
            </div>
          </div>
          <div className={`${styles.divider}`} />
          <div className={`${styles.rightside}`}>
            <div className={`${styles.weatherblock}`}>
              <div>
                <p className={`${styles.temperature}`}>{props?.humidity}%</p>
              </div>
              <div className={`${styles.humiditybottom}`}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Humidity.svg"
                  alt="Humidity"
                  className={`${styles.weathericon}`}
                />
                <p className={`${styles.description}`}>Humidity</p>
              </div>
            </div>
            <div className={`${styles.divider1}`} />
            <div className={`${styles.weatherblock}`}>
              <div>
                <p className={`${styles.temperature}`}>
                  {props?.wind_speed} meter/sec
                </p>
              </div>
              <div className={`${styles.humiditybottom}`}>
                <Image
                  height={20}
                  width={20}
                  src="/static/Wind.svg"
                  alt="Wind"
                  className={`${styles.weathericon}`}
                />
                <p className={`${styles.description}`}>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
