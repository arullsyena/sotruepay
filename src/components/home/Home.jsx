import "./Home.css";
import rn2 from "../../assets/rn2.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import Cards from "../cards/Cards";

const Home = () => {
  const constraintsRef = useRef(null);
  return (
    <div className='home-page'>
      {/* <header className='home-page__header'></header> */}
      <main className='home-page__content'>
        <motion.div className='home-container__animation' ref={constraintsRef}>
          <section className='home-page__section home-page__section--intro'>
            <p className='home-page__text animate-charcter'>
              <span className='line-1'>welcome to</span> <br />
              <span className='line-2'>So-True Pay</span>
            </p>
            <motion.div className='item' drag dragConstraints={constraintsRef}>
              <img src={rn2} className='rupee-note' alt='Rupees Image' />
            </motion.div>
          </section>
          <section className='home-page__section home-page__section--service'>
            <h2 className='title'>Popular Games</h2>
            <div className='cards-container'>
              <Cards />
              {/* <Cards />
              <Cards /> */}
            </div>
          </section>
        </motion.div>
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
