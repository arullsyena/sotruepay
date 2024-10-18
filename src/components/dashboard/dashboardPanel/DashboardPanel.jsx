import InfoCard from "../infoCards/InfoCard";
import "./DashboardPanel.css";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import PaymentsIcon from "@mui/icons-material/Payments";
import SavingsIcon from "@mui/icons-material/Savings";

import Table from "../../Table/Table";

const DashboardPanel = () => {
  const cardData = [
    {
      value: 450,
      text: `Wallet's money`,
      bgColor: "#22781a",
      loadPos: 0,
      icon: SavingsIcon,
    },
    {
      value: 90,
      text: `Today's sent users`,
      bgColor: "#22781a",
      loadPos: 25,
      icon: SettingsAccessibilityIcon,
    },
    {
      value: 87,
      text: `New receivers`,
      bgColor: "#22781a",
      loadPos: 50,
      icon: CallReceivedIcon,
    },
    {
      value: 900,
      text: `Total Amount Today`,
      bgColor: "#22781a",
      loadPos: 99,
      icon: PaymentsIcon,
    },
  ];

  return (
    <div className='dashboard-panel'>
      <div className='info-card-container'>
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            value={card.value}
            text={card.text}
            bgColor={card.bgColor}
            loadPos={card.loadPos}
            icon={card.icon}
            style={{ height: "20vh", width: { xs: "90%", md: "19vw" } }}
          />
        ))}
      </div>
      <div className='graph-container'></div>

      <div className='transaction-table-1'>
        <Table />
      </div>
    </div>
  );
};

export default DashboardPanel;
