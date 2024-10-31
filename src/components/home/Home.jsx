import "./Home.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
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
    <div className="">
      <main>
        <div className="full-screen-section">
          <ScrollDown />
          <div className="welcomDiv ">
            <div className="welcome-section row">
              <div className="welcome-img floating col-md-4 col-sm-12">
                <img src={rn2} className="rupee-note item" alt="Rupees Image" />
              </div>
              <div className="welcome-title col-md-8 col-sm-12 ">
                <div className="home-page__text">
                  <h5 className="line-1 animate-charcter2">Welcome To</h5>
                  <h5 className="line-2 animate-charcter1">So-True Pay</h5>
                </div>
                <p className="subheading">
                  Play Chess, Rummy, and Ludo with exciting skins and win rewards!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-gameScreen-section">
          <PopularGames />
        </div>
        <div className="full-WhyChooseUsScreen-section">
          <WhyChooseUs />
        </div>
        <div className="full-RobustSecurityScreen-section">
          <RobustSecurity />
        </div>
        <div className="full-ContactSupportScreen-section">
          <ContactSupport />
        </div>
      </main>
      <footer className="home-page__footer">
        <p className="home-page__footer-text">© 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
  
};
export default Home;
