import React, { useState } from "react";
import Image from "next/image";
import styles from "./FiltersTabCompleted.module.css";
import Link from "next/link";

function formatDate(dateString) {
  const date = new Date(dateString);

  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(date.getTime() + istOffset);

  return istDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

const FiltersTabCompleted = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTabChange = () => {
    setActiveTab(activeTab === 0 ? 1 : 0);
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.topcontent}>
              <div className={styles.header}>
                <button
                  onClick={() => props?.handleSearchActive()}
                  className={styles.backbutton}
                >
                  <span className={styles.arrowicon}>
                    <Image
                      src="/static/Backbutton.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </span>
                </button>
                <h1 className={styles.title}>Matches Filter</h1>
              </div>

              <div>
                <div className={styles.searchbox}>
                  <span className={styles.searchicon}>
                    <Image
                      src="/static/Search.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Search Matches"
                    value={props.searchTerm}
                    onChange={props.handleSearchChange}
                    className={styles.input}
                  />
                </div>
                {props.searchTerm && (
                  <div className={styles.results}>
                    {props.filteredResults.length > 0 ? (
                      props.filteredResults.map((result) => (
                        <div
                          key={result.match_id}
                          className={styles.resultItem}
                        >
                          <Link href={`${result?.title}-${result?.match_id}`}>
                            {result.title}
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noResults}>No matches found.</div>
                    )}
                  </div>
                )}
              </div>

              <span className={styles.datetext1}>Date</span>
              <div className={styles.buttons}>
                <button>Last 7 days</button>
                <button>Last 2 weeks</button>
                <button>Last 1 month</button>
              </div>
              <div className={styles.teams}>
                <h2
                  className="cursor-pointer"
                  onClick={() => handleActiveTabChange()}
                >
                  Teams
                  <div
                    className={styles.line}
                    style={{
                      visibility: activeTab === 1 ? "hidden" : "visible",
                    }}
                  />
                  {/* {activeTab === 0 && <div className={styles.line} />} */}
                </h2>
                <h2
                  className="cursor-pointer"
                  onClick={() => handleActiveTabChange()}
                >
                  Series
                  <div
                    className={styles.line}
                    style={{
                      visibility: activeTab === 0 ? "hidden" : "visible",
                    }}
                  />
                </h2>
              </div>
            </div>
            {activeTab === 0 ? (
              props.teamList && props.teamList.length > 0 ? (
                <>
                  {props.seriesFilterActive && (
                    <div className="text-red-600 font-bold text-center text-md mt-2">
                      Series Filter Already active. Clear series filter first.
                    </div>
                  )}
                  {props.teamList.map((team) => (
                    <div key={team.tid} className={styles.team}>
                      <div className={styles.teamtabs}>
                        <Image
                          height={20}
                          width={20}
                          src={team.logo_url}
                          alt="Team Logo"
                        />
                        <span>{team.title}</span>
                      </div>
                      <input
                        className={styles.input}
                        type="checkbox"
                        checked={props.selections.teams.includes(
                          String(team.tid)
                        )}
                        onChange={(e) =>
                          props.handleSelectionChange(
                            "teams",
                            team.tid,
                            e.target.checked
                          )
                        }
                      />
                    </div>
                  ))}
                </>
              ) : (
                <div>No teams available.</div>
              )
            ) : props.seriesList && props.seriesList.length > 0 ? (
              <>
                {props.teamsFilterActive && (
                  <div className="text-red-600 font-bold text-center text-md mt-2">
                    Teams Filter Already active. Clear teams filter first.
                  </div>
                )}
                {props.seriesList.map((series) => (
                  <div key={series.cid} className={styles.team}>
                    <div className={styles.teamcontent}>
                      <span>{series.title}</span>
                      <span className={styles.datewise}>
                        {series?.datestart && series?.dateend
                          ? `${formatDate(series.datestart)} - ${formatDate(
                              series.dateend
                            )}`
                          : "Date not available"}
                      </span>
                    </div>

                    <input
                      className={styles.input}
                      type="checkbox"
                      checked={props.selections.series.includes(
                        String(series.cid)
                      )}
                      onChange={(e) =>
                        props.handleSelectionChange(
                          "series",
                          series.cid,
                          e.target.checked
                        )
                      }
                    />
                  </div>
                ))}
              </>
            ) : (
              <div>No series available.</div>
            )}

            <div className={styles.actions}>
              <button
                onClick={() => props.clearFilters()}
                className={styles.red}
              >
                Clear All
              </button>
              <button
                onClick={() => props?.handleSearchActive()}
                className={styles.blue}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersTabCompleted;
