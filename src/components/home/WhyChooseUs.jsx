import SecurityIcon from "@mui/icons-material/Security";
import WalletIcon from "@mui/icons-material/Wallet";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const features = [
  {
    icon: <SecurityIcon fontSize='large' style={{ color: "#017bfe" }} />,
    title: "Bot Detection",
    content:
      "Advanced bot detection ensures fair gameplay and protects players from cheating.",
  },
  {
    icon: <WalletIcon fontSize='large' style={{ color: "#017bfe" }} />,
    title: "Secure Wallet",
    content: "Keep your funds secure with our protected wallet features.",
  },
  {
    icon: (
      <EnhancedEncryptionIcon fontSize='large' style={{ color: "#017bfe" }} />
    ),
    title: "SSL Encryption",
    content: "Your data is safe with our industry-standard SSL encryption.",
  },
  {
    icon: <CreditCardIcon fontSize='large' style={{ color: "#017bfe" }} />,
    title: "Secure Payments",
    content:
      "Make transactions with confidence using our secure payment methods.",
  },
  {
    icon: <SupportAgentIcon fontSize='large' style={{ color: "#017bfe" }} />,
    title: "24/7 Support",
    content: "Our support team is available around the clock to assist you.",
  },
  {
    icon: <ThumbUpIcon fontSize='large' style={{ color: "#017bfe" }} />,
    title: "Fair Play",
    content: "Experience fair play with our transparent rules and practices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className='home-page__section home-page__section--why-choose'>
      <h2 className='title'>Why Choose Us</h2>
      <hr width='50%' color='#05e950' />
      <div className='spacer'></div>
      <div className='why-choose-container'>
        {features.map((feature, index) => (
          <div key={index} className='boxes'>
            {feature.icon}
            <h5 className='title'>{feature.title}</h5>
            <p className='content'>{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
