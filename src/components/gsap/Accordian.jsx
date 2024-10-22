import { motion } from "framer-motion";
import "./Accordian.css";

const Accordian = () => {
  // Variants for animation
  const cardVariants = {
    offscreen: { y: 300 },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // Data array for accordion items
  const accordionData = [
    {
      title: "01 Top-Notch Security",
      text: "Implementing cutting-edge encryption, secure authentication, and real-time fraud detection to protect user data and financial transactions.",
    },
    {
      title: "02 Advanced Wallet Solutions",
      text: "Robust wallet management systems that include balance tracking, transaction history, and easy deposits and withdrawals, all designed to enhance user convenience.",
    },
    {
      title: "03 Customizable Security Features",
      text: "Tailor security measures to meet specific needs and regulatory requirements, ensuring compliance and peace of mind.",
    },
    {
      title: "04 Continuous Monitoring",
      text: "Regularly updated security protocols and continuous monitoring to detect and prevent potential threats, keeping your platform secure.",
    },
  ];

  return (
    <motion.div
      className='row'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* <div className='accordian-content'>
        <div className='accordions'> */}
        
          {accordionData.map((item, index) => (
            
            // <motion.div key={index} variants={cardVariants}>
              <div class="col-lg-6 col-md-6 col-sm-12">
              <div className='accordion'>
                <div className='section--title accordion--title'>
                  {item.title}
                </div>
                <div className='text'>{item.text}</div>
              </div>
              </div>
              
            // </motion.div>
           
          ))}
        {/* </div> */}
        {/* <div className='spacer'></div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Accordian;
