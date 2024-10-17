import "./Home.css";
import rn2 from "../../assets/rn2.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import Cards from "../cards/Cards";
import SecurityIcon from "@mui/icons-material/Security";
import Accordian from "../gsap/Accordian";
import Testimonials from "../Testimonials/Testimonials";
import chess4 from "../../assets/chess4.jpg";
import chessKing from "../../assets/chessKing.png";
import rummy1 from "../../assets/rummy1.jpg";
import rummy3 from "../../assets/rummy3.png";
import ludo1 from "../../assets/ludo1.jpg";
import ludo2 from "../../assets/ludo2.png";
import rummy from "../../assets/rummy.png";
import pig from "../../assets/pig.png";
import ludo from "../../assets/ludo.png";
import chessFont2 from "../../assets/chessFont2.png";
import WalletIcon from "@mui/icons-material/Wallet";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PopularGames from "./PopularGames";
import WhyChooseUs from "./WhyChooseUs";
import RobustSecurity from "./RobustSecurity";

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <div className='home-page'>
      <img src={pig} className='pig-img' />
      <main className='home-page__content'>
        {/* <motion.div className='home-container__animation' ref={constraintsRef}> */}
        <section className='home-page__section home-page__section--intro'>
          <div className='welcome-section'>
            <div className='welcome-title'>
              <p className='home-page__text '>
                <span className='line-1 animate-charcter2'>Welcome To</span>{" "}
                <span className='line-2 animate-charcter1'>So-True Pay</span>
              </p>
              <p className='subheading'>
                Play Chess, Rummy, and Ludo with exciting skins and win rewards!
              </p>
            </div>

            <div className='welcome-img floating'>
              <img src={rn2} className='rupee-note item ' alt='Rupees Image' />
            </div>
          </div>
        </section>
        <PopularGames />
        <WhyChooseUs />
        <RobustSecurity />
        <Testimonials />
        {/* testimonails */}
        {/* </motion.div> */}
      </main>
      <footer className='home-page__footer'>
        <p className='home-page__footer-text'>
          © 2024 Our Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
export default Home;
