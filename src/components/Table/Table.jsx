import "./Table.css";
import { AgGridReact } from "ag-grid-react";
// import { faker } from "@faker-js/faker";
import Chip from "@mui/material/Chip";
import React, { createContext, useContext, useState } from "react";

// import "./styles.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import { ThemeContext } from "../../config/ThemeContext";

import "@ag-grid-community/styles/ag-grid.css"; // Ensure this is the correct path
import "@ag-grid-community/styles/ag-theme-alpine.css"; // Use your preferred theme
import { themeQuartz } from "@ag-grid-community/theming";

// Function to generate fake data
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

const GridExample = ({ flag }) => {
  const theme = "light";
  //   const { theme, toggleTheme } = useContext(ThemeContext);
  const [rowData] = useState(() => makeData(15));
  console.log(rowData);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for light/dark mode
  //   const myTheme = themeQuartz.withParams({
  //     backgroundColor: "#1f2836",
  //     borderColor: "#14D6FF26",
  //     browserColorScheme: "light",
  //     foregroundColor: "#FFF",
  //     headerFontSize: 14,
  //   });

  const [columnDefs] = useState([
    {
      field: "changed_at",
      filter: true, // Enable filtering for this column
      // cellRenderer: (params) => {
      //   return (
      //     <div>
      //       <Chip label='Success' color='success' />
      //     </div>
      //   );
      // },
    },
    { field: "transaction_id", filter: true },
    { field: "transaction_type", filter: true },
    { field: "old_value", filter: true, width: 130 },
    { field: "new_value", filter: true, width: 130, cellClass: "table-cell" },

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
              <ReceiptLongIcon fontSize='medium' sx={{ color: "#2050a8" }} />
            </IconButton>
          );
        },
      }),
    },
    {
      field: "status",
      width: 180,
      filter: true, // Enable filtering for this column
      cellRenderer: (params) => {
        let label = "Success";
        let color = "success";
        if (!params.data.status) {
          label = " Failure ";
          color = "error";
        }
        return (
          <div>
            <Chip label={label} color={color} sx={{}} />
          </div>
        );
      },
    },
  ]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 1 && theme === "light") {
      // Style odd rows
      return { background: "#bef3cf" }; // Light gray background for odd rows
    }
    return null; // Default for even rows
  };

  return (
    <div>
      {/* <div
        className={`ag-theme-alpine ${
          isDarkMode ? "dark-theme" : "light-theme"
        }`}
        style={{ height: 600, width: "100%" }}
      > */}

      <div
        className={`${
          theme === "light" ? "ag-theme-alpine" : "ag-theme-alpine-dark"
        }`}
        style={{ height: 600, width: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          enableFilter={true} // Enable filtering for the entire grid
          pagination={true} // Enable pagination if needed
          getRowStyle={getRowStyle}
          // gridOptions={{
          //   theme: myTheme, // Pass your custom theme to the grid options
          // }}
        />
      </div>
    </div>
  );
};

export default GridExample;
