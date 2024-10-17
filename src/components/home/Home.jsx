import "./Home.css";
import rn2 from "../../assets/rn2.png";
import { useRef } from "react";
import Testimonials from "../Testimonials/Testimonials";
import PopularGames from "./PopularGames";
import WhyChooseUs from "./WhyChooseUs";
import RobustSecurity from "./RobustSecurity";

const Home = () => {
  return (
    <div className='home-page'>
      <main className='home-page__content'>
        <section className='home-page__section home-page__section--intro'>
          <div className='welcome-section'>
            <div className='welcome-title'>
              <p className='home-page__text '>
                <span className='line-1 animate-charcter2'>Welcome To</span>
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
