import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export const dataset = [
  { london: 80, month: "Monday" },
  { london: 350, month: "Tuesday" },
  { london: 47, month: "Wednesday" },
  { london: 540, month: "Thursday" },
  { london: 57, month: "Friday" },
  { london: 200, month: "Saturday" },
  { london: 509, month: "Sunday" },
];

function valueFormatter(value) {
  return `Rs.${value}`;
}

const chartSetting = {
  yAxis: [
    {
      label: "", // Make sure label is properly defined
      labelOffset: 10, // Adjust the offset if needed
    },
  ],
  //   sx: {
  //     [`.${axisClasses.left} .${axisClasses.label}`]: {
  //       transform: "translate(-20px, 0)", // Adjust this for label positioning
  //     },
  //   },
};

export default function BarsDataset() {
  return (
    <div style={{ width: "90vw", height: "200px" }}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          {
            dataKey: "london",
            label: "Money You Earnt",
            valueFormatter,
            color: "#bef3cf", // Green color for London
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
