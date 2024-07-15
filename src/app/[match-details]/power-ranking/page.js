import React from "react";
import Image from "next/image";
import styles from "./powerRanking.module.css";
import PowerHead from "@/components/power-ranking/PowerHead";
const LOCAL_SW_API_BASE_URL = process.env.LOCAL_SW_API_BASE_URL;

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchMatchInfo = async (match_id) => {
  const res = await fetch(
    `${entity_base_url_v2}/matches/${match_id}/info?token=${entity_api_key}`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const match_id =
    params["match-details"].split("-")[
      params["match-details"].split("-").length - 1
    ];

  const currentPath = params["match-details"];

  const matchInfo = await fetchMatchInfo(match_id);
  //   console.log(matchInfo, "8439thyoifh30pi");
  return (
    <>
      <div className={styles.page}>
        <div style={{ paddingBottom: "70px" }} className={styles.main}>
          <PowerHead
            title={matchInfo?.response?.short_title}
            currentPath={currentPath}
          />
          <div className={styles.announcementcontent}>
            <div className={styles.lines} />
            <div className={styles.announcement}>
              Playing 11 is not announced
            </div>
            <div className={styles.lines} />
          </div>
          <div className={styles.Playerrank}>
            <span>Rank/Player</span>
            <span>Rating</span>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>1</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>2</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>3</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>4</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>5</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>6</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>7</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>8</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.flexcontainer}>
              <div className={styles.circle}>9</div>
              <div className={styles.info}>
                <div className={styles.upperbar}>
                  <div className={styles.name}>
                    S Langa <span>(Bow - IND)</span>
                  </div>
                  <div className={styles.score}>95.45</div>
                </div>
                <div className={styles.progressbar}>
                  <div
                    className={styles.progress}
                    style={{ width: "90.45%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
