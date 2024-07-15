import React, { useState } from "react";
import Image from "next/image";
import styles from "../../app/[match-details]/stats-playground/statsPlayground.module.css";

const StatsPlaygroundFilter = ({ data, handleChange, name, head }) => {
  const [selectedItemKey, setSelectedItemKey] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="accordion-item bg-light-blue rounded-lg">
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="py-3 px-4 flex items-center justify-between gap-2 w-full relative"
        >
          <span className="floating-label text-xs text-gray-500 font-semibold absolute top-0 start-4 -translate-y-1/2">
            {head || "Select"}
          </span>
          <span className="text-primary font-bold text-sm">
            {name || "Stats Type"}
          </span>
          <div className="icon shrink-0 w-5 h-5 bg-white rounded-full grid place-content-center">
            <Image
              height={20}
              width={20}
              src="/static/icons/arrow-down.svg"
              alt=""
            />
          </div>
        </button>
        {isOpen && (
          <div className="px-4 flex flex-col gap-1">
            {data?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleChange(item.key);
                  setSelectedItemKey(item.key);
                }}
                className={`w-full py-3 px-4 rounded-lg text-start text-sm font-semibold ${
                  selectedItemKey === item.key
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-500"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default StatsPlaygroundFilter;

// import React, { useState } from "react";
// import styles from "../../app/[match-details]/stats-playground/statsPlayground.module.css";

// const StatsPlaygroundFilter = ({ data, handleChange, name, head }) => {
//   const [selectedItemKey, setSelectedItemKey] = useState(null);
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       <div className={styles.card}>
//         <div className={styles.cardheader}>
//           <span className={styles.titletext}>{head || ""}</span>
//           <button
//             onClick={() => setIsOpen((prevState) => !prevState)}
//             className={styles.headerbutton}
//           >
//             <span className={styles.headertitle}>{name}</span>
//             <svg
//               className={styles.headericon}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//         </div>
//         {isOpen === true && (
//           <div className={styles.cardbody}>
//             <ul className={styles.listitems}>
//               {data?.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => {
//                     handleChange(item.key);
//                     setSelectedItemKey(item.key);
//                   }}
//                   style={{
//                     backgroundColor:
//                       selectedItemKey === item.key ? "#b91c1c" : "transparent",
//                     color: selectedItemKey === item.key ? "#fff" : "black",
//                   }}
//                 >
//                   {item.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default StatsPlaygroundFilter;
