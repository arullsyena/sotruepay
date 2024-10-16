import "./Home.css";
import rn2 from "../../assets/rn2.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import Cards from "../cards/Cards";
import SecurityIcon from "@mui/icons-material/Security";
import Accordian from "../gsap/Accordian";
import Testimonials from "../Testimonials/Testimonials";
//

const Home = () => {
  const constraintsRef = useRef(null);

  //

  return (
    <div className='home-page'>
      {/* <header className='home-page__header'></header> */}
      <main className='home-page__content'>
        <motion.div className='home-container__animation' ref={constraintsRef}>
          <section className='home-page__section home-page__section--intro'>
            <div className='welcome-section'>
              <p className='home-page__text animate-charcter'>
                <span className='line-1'>welcome to</span> <br />
                <span className='line-2'>So-True Pay</span>
              </p>
              <motion.div
                className='item'
                drag
                dragConstraints={constraintsRef}
              >
                <img src={rn2} className='rupee-note' alt='Rupees Image' />
              </motion.div>
            </div>
          </section>
          <section className='home-page__section home-page__section--service'>
            <h2 className='title'>Popular Games</h2>
            <div className='cards-container'>
              <Cards />
              <Cards />
              <Cards />
              {/* <Cards />
              <Cards /> */}
            </div>
          </section>
          {/*  */}
          <section className='home-page__section home-page__section--why-choose'>
            <h2 className='title'>Popular Games</h2>
            <hr width='50%' color='green' />
            <div className='why-choose-container'>
              <div className='boxes'>
                {/* <div className='img'></div> */}
                <SecurityIcon
                  fontSize='large'
                  style={{
                    padding: "0px",

                    color: "#017bfe", // Text color
                  }}
                />
                <h5 className='title'>Bot Detection</h5>
                <p className='content'>
                  Advanced bot detection ensures fair gameplay and protects
                  players from cheating.
                </p>
              </div>
              <div className='boxes'>
                {/* <div className='img'></div> */}
                <SecurityIcon
                  fontSize='large'
                  style={{
                    padding: "0px",

                    color: "#017bfe", // Text color
                  }}
                />
                <h5 className='title'>Bot Detection</h5>
                <p className='content'>
                  Advanced bot detection ensures fair gameplay and protects
                  players from cheating.
                </p>
              </div>
              <div className='boxes'>
                {/* <div className='img'></div> */}
                <SecurityIcon
                  fontSize='large'
                  style={{
                    padding: "0px",

                    color: "#017bfe", // Text color
                  }}
                />
                <h5 className='title'>Bot Detection</h5>
                <p className='content'>
                  Advanced bot detection ensures fair gameplay and protects
                  players from cheating.
                </p>
              </div>
              <div className='boxes'>
                {/* <div className='img'></div> */}
                <SecurityIcon
                  fontSize='large'
                  style={{
                    padding: "0px",

                    color: "#017bfe", // Text color
                  }}
                />
                <h5 className='title'>Bot Detection</h5>
                <p className='content'>
                  Advanced bot detection ensures fair gameplay and protects
                  players from cheating.
                </p>
              </div>
              <div className='boxes'>
                {/* <div className='img'></div> */}
                <SecurityIcon
                  fontSize='large'
                  style={{
                    padding: "0px",

                    color: "#017bfe", // Text color
                  }}
                />
                <h5 className='title'>Bot Detection</h5>
                <p className='content'>
                  Advanced bot detection ensures fair gameplay and protects
                  players from cheating.
                </p>
              </div>
              <div className='boxes'>
                {/* <div className='img'></div> */}
                <SecurityIcon
                  fontSize='large'
                  style={{
                    padding: "0px",

                    color: "#017bfe", // Text color
                  }}
                />
                <h5 className='title'>Bot Detection</h5>
                <p className='content'>
                  Advanced bot detection ensures fair gameplay and protects
                  players from cheating.
                </p>
              </div>
            </div>
          </section>
          {/* security */}
          <section className='home-page__section home-page__section--security'>
            <h2 className='title'>
              Robust Security and Wallet Management Solutions
            </h2>
            <Accordian />
          </section>
        </motion.div>
      </main>
      <footer className='home-page__footer'>
        <Testimonials />
        <p className='home-page__footer-text'>
          © 2024 Our Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
export default Home;
