import { gsap } from "gsap-trial";
import "./Accordian.css";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Accordian = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  //   const scrollerSmoother = ScrollSmoother.create({
  //     content: "#content",
  //     wrapper: "#wrapper",
  //     smooth: true,
  //     effects: false,
  //     normalizeScroll: true,
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".accordions",
  //       pin: true,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       ease: "linear",
  //     },
  //   });

  //   tl.to(".accordion .text", {
  //     height: 0,
  //     paddingBottom: 0,
  //     opacity: 0,
  //     stagger: 0.5,
  //   });
  //   tl.to(
  //     ".accordion",
  //     {
  //       marginBottom: -15,
  //       stagger: 0.5,
  //     },
  //     "<"
  //   );

  return (
    <>
      {" "}
      <motion.div
        className='card-container'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* <div className="splash" style={{ background }} /> */}

        <div className='accordian-content'>
          {/* <div className='spacer'></div> */}
          <div className='accordions'>
            <motion.div variants={cardVariants}>
              <div className='accordion'>
                <div className='title'>01 Top-Notch Security</div>
                <div className='text'>
                  Implementing cutting-edge encryption, secure authentication,
                  and real-time fraud detection to protect user data and
                  financial transactions.
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <div className='accordion '>
                <div className='title'> 02 Advanced Wallet Solutions</div>
                <div className='text'>
                  Robust wallet management systems that include balance
                  tracking, transaction history, and easy deposits and
                  withdrawals, all designed to enhance user convenience.
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <div className='accordion'>
                <div className='title'>03 Customizable Security Features</div>
                <div className='text'>
                  Tailor security measures to meet specific needs and regulatory
                  requirements, ensuring compliance and peace of mind.
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <div className='accordion'>
                <div className='title'>04 Continuous Monitoring </div>
                <div className='text'>
                  Regularly updated security protocols and continuous monitoring
                  to detect and prevent potential threats, keeping your platform
                  secure.
                </div>
              </div>
            </motion.div>
          </div>

          <div className='spacer'></div>
        </div>
      </motion.div>
    </>
  );
};

export default Accordian;
