import "./ScrollDown.css";
import React, { useEffect, useState } from "react";
import image from "../../../assets/image.png";

import { motion } from "framer-motion";
const ScrollDown = () => {
  const [yValue, setYValue] = useState(0);

  const handleScroll = () => {
    setYValue(window.scrollY);
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className='coin-container'
      animate={{
        // x: 800,
        y: yValue + 400,
        scale: 1,
        rotate: yValue,
      }}
    >
      <img
        src={image}
        alt='My Animated Image'
        style={{
          width: "40%",
          height: "80%",
        }}
      />
    </motion.div>
  );
};
export default ScrollDown;
