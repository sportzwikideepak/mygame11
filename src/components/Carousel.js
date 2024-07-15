"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

const slidesData = [
  { id: 1, color: "red", img: "/static/image.png" },
  { id: 2, color: "blue", img: "/static/image.png" },
  { id: 3, color: "green", img: "/static/image.png" },
  { id: 4, color: "yellow", img: "/static/image.png" },
  { id: 5, color: "purple", img: "/static/image.png" },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer(); // Cleanup the interval on component unmount
  }, []);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    startSlideTimer();
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slideContainer}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            className={`${styles.slide}`}
            // style={{ backgroundColor: slide.color }}
          >
            {/* Slide {slide.id} */}
            <Image
              className="w-full h-full"
              src={slide?.img}
              height={100}
              width={300}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            className={
              currentIndex === idx
                ? `${styles.active} ${styles.button}`
                : styles.button
            }
            onClick={() => handleIndicatorClick(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

// import React from "react";
// import styles from "../app/home.module.css";
// import Image from "next/image";

// const Carousel = () => {
//   return (
//     <>
//       <div className={styles.slider}>
//         <div className={styles.slides}>
//           <Image
//             height={100}
//             width={300}
//             src="/static/image.png"
//             alt="Image 1"
//           />
//           <Image
//             height={100}
//             width={300}
//             src="/static/image.png"
//             alt="Image 2"
//           />
//           <Image
//             height={100}
//             width={300}
//             src="/static/image.png"
//             alt="Image 3"
//           />
//           <Image
//             height={100}
//             width={300}
//             src="/static/image.png"
//             alt="Image 4"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;
