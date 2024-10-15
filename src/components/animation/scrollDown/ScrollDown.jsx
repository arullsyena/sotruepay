import "./ScrollDown.css";
import React, { useEffect, useState } from "react";
import image from "../../../assets/image.png";

import { motion } from "framer-motion";
const ScrollDown = () => {
  const [yValue, setYValue] = useState(0);

  const handleScroll = () => {
    // Update the Y-axis value with the current scroll position
    setYValue(window.scrollY);
    console.log(window.scrollY);
  };

  useEffect(() => {
    // Add an event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className='coin-container'
      //   drag
      //   dragConstraints={reference}
      animate={{
        x: 100,
        y: yValue + 500,
        scale: 1,
        rotate: yValue,
      }}
    >
      <img
        src={image}
        alt='My Animated Image'
        style={{
          width: "60%",
          height: "80%",
        }}
      />
    </motion.div>
  );
};
export default ScrollDown;
