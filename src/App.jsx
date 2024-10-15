import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/Home";
import TopNav from "./components/top-nav/TopNav";
import ScrollDown from "./components/animation/scrollDown/ScrollDown";
import { motion } from "framer-motion";
import { useRef } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // const constraintsRef = useRef(null);

  return (
    <>
      <TopNav />

      <ScrollDown />

      <Home />
    </>
  );
}

export default App;
