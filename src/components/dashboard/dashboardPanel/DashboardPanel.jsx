import InfoCard from "../infoCards/InfoCard";
import "./DashboardPanel.css";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import PaymentsIcon from "@mui/icons-material/Payments";
import SavingsIcon from "@mui/icons-material/Savings";
import { PieChart } from "@mui/x-charts/PieChart";

import Table from "../../Table/Table";
import BarsDataset from "../../graphs/BarDataSet";

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
  //
  const desktopOS = [
    {
      label: "Windows",
      value: 72.72,
      color: "#bef3cf",
    },
    {
      label: "OS X",
      value: 16.38,
      color: "#3fc169",
    },
    {
      label: "Linux",
      value: 3.83,
      color: "#1a6c34",
    },
    {
      label: "Chrome OS",
      value: 2.42,
      color: "#5dab76",
    },
    {
      label: "Other",
      value: 4.65,
    },
  ];

  const mobileOS = [
    {
      label: "Monday",
      value: 70.48,
      // color: "#5dab76",
      // color: '2e7d32'
    },
    {
      label: "Tuesday",
      value: 28.8,
      // color: "rgb(93, 171, 118);",
    },
    {
      label: "Wednesday",
      value: 0.71,
      color: "rgb(67 124 85)",
    },
  ];

  const platforms = [
    {
      label: "Thursday",
      value: 59.12,
    },
    {
      label: "Friday",
      value: 40.88,
    },
  ];

  const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

  const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
      ...v,
      label: v.label === "Other" ? "Other (Mobile)" : v.label,
      value: normalize(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
      ...v,
      label: v.label === "Other" ? "Other (Desktop)" : v.label,
      value: normalize(v.value, platforms[1].value),
    })),
  ];

  const valueFormatter = (item) => `${item.value}%`;

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
      <div className='graph-container'>
        <div className='graph-container'>
          <div className='graph-1'>
            <BarsDataset />
          </div>
          <div className='graph-1'>
            {/* <ResponsiveChartContainer> */}
            <PieChart
              height={240}
              width={600}
              series={[
                {
                  data: mobileAndDesktopOS.slice(0, 5),
                  innerRadius: 50,
                  arcLabel: (params) => "xx",
                  arcLabelMinAngle: 20,
                  valueFormatter,
                  color: [
                    "#2e7d32",
                    "#66bb6a",
                    "#388e3c",
                    "#81c784",
                    "#a5d6a7",
                  ], // Green-based colors
                },
              ]}
              skipAnimation={false}
            />
            {/* </ResponsiveChartContainer> */}
          </div>
        </div>
      </div>

      <div className='transaction-table-1'>
        <Table />
      </div>
    </div>
  );
};

export default DashboardPanel;
