import "./Home.css";
import rn2 from "../../assets/rn2.png";
import { useRef } from "react";
import Testimonials from "../Testimonials/Testimonials";
import PopularGames from "./PopularGames";
import ContactSupport from "../ContactSupport/contactSupport";
import WhyChooseUs from "./WhyChooseUs";
import RobustSecurity from "./RobustSecurity";
import ScrollDown from "../../components/animation/scrollDown/ScrollDown";


const Home = () => {
  return (
    <div className='container'>
      
      <main className='home-page__content'>
      <ScrollDown />
        <section className='home-page__section home-page__section--intro'>
          <div className='welcome-section'>
            <div className='welcome-title col-lg-8 col-md-8 col-sm-8'>
              <p className='home-page__text '>
                <span className='line-1 animate-charcter2'>Welcome To</span>
                <span className='line-2 animate-charcter1'>So-True Pay</span>
              </p>
              <p className='subheading'>
                Play Chess, Rummy, and Ludo with exciting skins and win rewards!
              </p>
            </div>

            <div className='welcome-img floating col-lg-4 col-md-4 col-sm-4'>
              <img src={rn2} className='rupee-note item ' alt='Rupees Image' />
            </div>
          </div>
        </section>
        <PopularGames />
        <WhyChooseUs />
        <RobustSecurity />
        {/* <Testimonials /> */}
        <ContactSupport/>
      </main>
      {/* <footer className='home-page__footer'>
        <p className='home-page__footer-text'>
          © 2024 Our Website. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};
export default Home;
