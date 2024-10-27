import InfoCard from "../infoCards/InfoCard";
import "./DashboardPanel.css";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import PaymentsIcon from "@mui/icons-material/Payments";
import SavingsIcon from "@mui/icons-material/Savings";
import { PieChart } from "@mui/x-charts/PieChart";

import Table from "../../Table/Table";
import BarsDataset from "../../graphs/BarDataSet";
import ComponentTitle from "../componentTitle/ComponentTitle";

//

import Chip from "@mui/material/Chip";
import React from "react";

// import "./styles.css";
import IconButton from "@mui/material/IconButton";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ThemePanel from "../../themePanel/ThemePanel";

const DashboardPanel = () => {
  const cardData = [
    {
      value: 450,
      text: `Wallet's money`,
      bgColor: "#ff000085",
      loadPos: 0,
      icon: SavingsIcon,
    },
    {
      value: 90,
      text: `Today's sent users`,
      bgColor: "#0b0beba1",
      loadPos: 25,
      icon: SettingsAccessibilityIcon,
    },
    {
      value: 87,
      text: `New receivers`,
      bgColor: "#0fe00fb5",
      loadPos: 50,
      icon: CallReceivedIcon,
    },
    {
      value: 900,
      text: `Total Amount Today`,
      bgColor: "#ffa515a6",
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
  const makeData = (rowsToMake) => {
    let data = [
      {
        changed_at: "Fri, 27 Sep 2024 14:36:27 GMT",
        new_value: "258.40",
        old_value: "272.20",
        transaction_id: "55403280",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Fri, 27 Sep 2024 14:36:35 GMT",
        new_value: "272.20",
        old_value: "258.40",
        transaction_id: "55403280",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Fri, 27 Sep 2024 15:05:05 GMT",
        new_value: "250.40",
        old_value: "272.20",
        transaction_id: "30366435",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Sat, 28 Sep 2024 04:32:11 GMT",
        new_value: "228.60",
        old_value: "250.40",
        transaction_id: "18192806",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Sun, 29 Sep 2024 06:37:12 GMT",
        new_value: "206.80",
        old_value: "228.60",
        transaction_id: "45867153",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Sun, 29 Sep 2024 08:57:44 GMT",
        new_value: "216.80",
        old_value: "206.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 08:58:04 GMT",
        new_value: "226.80",
        old_value: "216.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:01:19 GMT",
        new_value: "236.80",
        old_value: "226.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:01:25 GMT",
        new_value: "246.80",
        old_value: "236.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:05:39 GMT",
        new_value: "256.80",
        old_value: "246.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:06:31 GMT",
        new_value: "266.80",
        old_value: "256.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:07:58 GMT",
        new_value: "276.80",
        old_value: "266.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:13:12 GMT",
        new_value: "286.80",
        old_value: "276.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:14:21 GMT",
        new_value: "296.80",
        old_value: "286.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:18:11 GMT",
        new_value: "246.80",
        old_value: "296.80",
        transaction_id: "TXN12443246",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:22:22 GMT",
        new_value: "256.80",
        old_value: "246.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:23:17 GMT",
        new_value: "266.80",
        old_value: "256.80",
        transaction_id: "1000238",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:23:32 GMT",
        new_value: "256.80",
        old_value: "266.80",
        transaction_id: "1000238",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Sun, 29 Sep 2024 09:24:38 GMT",
        new_value: "266.80",
        old_value: "256.80",
        transaction_id: "100024448",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Tue, 01 Oct 2024 04:43:16 GMT",
        new_value: "245.00",
        old_value: "266.80",
        transaction_id: "NBZhPRMPO9knhG",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Tue, 01 Oct 2024 12:34:57 GMT",
        new_value: "223.20",
        old_value: "245.00",
        transaction_id: "NBZWWEJGU91u4U",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Tue, 01 Oct 2024 12:47:52 GMT",
        new_value: "201.40",
        old_value: "223.20",
        transaction_id: "NBZI8SHBImBZvb",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Tue, 01 Oct 2024 13:52:42 GMT",
        new_value: "301.40",
        old_value: "201.40",
        transaction_id: "10147548",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Tue, 01 Oct 2024 13:55:33 GMT",
        new_value: "311.40",
        old_value: "301.40",
        transaction_id: "91246713",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Tue, 01 Oct 2024 13:59:10 GMT",
        new_value: "321.40",
        old_value: "311.40",
        transaction_id: "68655366",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Tue, 01 Oct 2024 15:45:07 GMT",
        new_value: "299.60",
        old_value: "321.40",
        transaction_id: "NBZA1NSGiek4Gg",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Tue, 01 Oct 2024 15:50:16 GMT",
        new_value: "309.60",
        old_value: "299.60",
        transaction_id: "10610499",
        transaction_type: "Credit",
        transaction_amount: "1750",
      },
      {
        changed_at: "Wed, 02 Oct 2024 04:46:44 GMT",
        new_value: "295.80",
        old_value: "309.60",
        transaction_id: "NBZKg9i8ZTnDYD",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Wed, 02 Oct 2024 04:53:35 GMT",
        new_value: "184.00",
        old_value: "295.80",
        transaction_id: "NBZinSRTb1tcE6",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
      {
        changed_at: "Wed, 02 Oct 2024 05:35:03 GMT",
        new_value: "162.20",
        old_value: "184.00",
        transaction_id: "NBZCsoEu7L9klc",
        transaction_type: "Debit",
        transaction_amount: "250",
        status: "success",
      },
    ];

    return data;
  };

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

  const flag = false;

  const columnDefs = [
    {
      field: "changed_at",
      filter: true,
      flex: 1.5,
      // Enable filtering for this column
      // cellRenderer: (params) => {
      //   return (
      //     <div>
      //       <Chip label='Success' color='success' />
      //     </div>
      //   );
      // },
    },
    { field: "transaction_id", filter: true, flex: 1 },
    { field: "transaction_type", filter: true, flex: 1 },
    { field: "old_value", filter: true, width: 230, flex: 1 },
    {
      field: "new_value",
      filter: true,
      // width: isSmallScreen ? 100 : 300,
      flex: 1,
      cellClass: "table-cell",
    },

    {
      field: flag ? "Actions" : "transaction_amount",
      filter: true,
      ...(flag && {
        cellRenderer: (params) => {
          let label = "Success";
          let color = "success";
          if (!params.data.status) {
            label = "Failure";
            color = "error";
          }
          return (
            <IconButton aria-label='delete' size='large'>
              <ReceiptLongIcon fontSize='medium' sx={{ color: "#ff000085" }} />
            </IconButton>
          );
        },
      }),
    },
    {
      field: "status",
      flex: 1,
      filter: true, // Enable filtering for this column
      cellRenderer: (params) => {
        let label = "Success";
        let color = "success";
        let bgColor = "#17cf97";
        if (!params.data.status) {
          label = " Failure ";
          color = "error";
          bgColor = "#FF5733";
        }
        return (
          <div>
            <Chip
              label={label}
              sx={{ backgroundColor: bgColor, color: "#FFFFFF" }} // Custom background and text color
            />
          </div>
        );
      },
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
    <>
      {/* <PanelTitle title={"Dashboard"} /> */}
      <div className='dashboard-panel'>
        iuhiuhuih
        <div className='dp-fp'>
          <div className='info-card-container'>
            {cardData.map((card, index) => (
              <InfoCard
                key={index}
                value={card.value}
                text={card.text}
                bgColor={card.bgColor}
                loadPos={card.loadPos}
                icon={card.icon}
                style={{ height: "20vh", width: { xs: "90%" } }}
                showCounter={true}
              />
            ))}
          </div>
          <div className='graph-container'>
            <div className='graph-container'>
              <div className='graph-1 glass_bg '>
                <ComponentTitle title={"Graph1"} />
                <div className='graph-space'>
                  <BarsDataset />
                </div>
              </div>
              <div className='graph-1 glass_bg '>
                {/* <ResponsiveChartContainer> */}
                {/* <div className='graph-1--title'>
                <h2>dkjenbkijbh</h2>
              </div> */}
                <ComponentTitle title={"Graph2"} />
                <div className='graph-space'>
                  <PieChart
                    height={240}
                    series={[
                      {
                        data: mobileAndDesktopOS
                          .slice(0, 5)
                          .map((item, index) => ({
                            ...item, // Spread the existing properties of the item (id, value, label)
                            color: [
                              "rgba(255, 0, 0, 0.52)",
                              "rgba(11, 11, 235, 0.63)",
                              "rgba(15, 224, 15, 0.71)",
                              "rgba(255, 165, 21, 0.65)",
                              "#8857a5",
                            ][index], // Assign a color based on the index
                            arcLabel: (params) => params,
                          })),
                        innerRadius: 50,

                        arcLabelMinAngle: 20,
                        valueFormatter,
                      },
                    ]}
                    skipAnimation={false}
                  />
                </div>
                {/* </ResponsiveChartContainer> */}
              </div>
            </div>
          </div>
        </div>
        <div className='transaction-table-1 glass_bg '>
          <ComponentTitle title={"table"} />
          <Table columnDefs={columnDefs} rows={makeData()} />
        </div>
      </div>
    </>
  );
};

export default DashboardPanel;
