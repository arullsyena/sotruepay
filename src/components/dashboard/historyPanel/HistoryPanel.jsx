import "./HistoryPanel.css";
import Table from "../../Table/Table";
import ComponentTitle from "../componentTitle/ComponentTitle";
import Button from "react-bootstrap/Button";
import PanelTitle from "../panelTitle/PanelTitle";

// import "./DashboardPanel.css";

// import ComponentTitle from "../componentTitle/ComponentTitle";
import Chip from "@mui/material/Chip";
import React from "react";

import IconButton from "@mui/material/IconButton";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import PanelTitle from "../panelTitle/PanelTitle";

const HistoryPanel = ({ theme }) => {
  const flag = false;

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
  const columnDefs = [
    {
      field: "changed_at",
      filter: true,
      width: 160,
    },
    { field: "transaction_id", filter: true, width: 130 },
    { field: "transaction_type", filter: true, width: 150 },
    { field: "old_value", filter: true, width: 230, width: 130 },
    {
      field: "new_value",
      filter: true,
      // width: isSmallScreen ? 100 : 300,
      width: 130,
      cellClass: "table-cell",
    },

    {
      field: flag ? "Actions" : "transaction_amount",
      width: 150,
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
      width: 130,

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
  return (
    <>
      <PanelTitle title={"History"} />
      <div className='history-container'>
        {/* <div className='history-title'>
        <h2>Transaction Table</h2>
      </div> */}
        <div className='spacer'></div>
        <ComponentTitle title={"Transaction Table"} />

        {/* <div id='date-range-picker' date-rangepicker className='flex items-center'>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </div>
          <input
            id='datepicker-range-start'
            name='start'
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Select date start'
          />
        </div>
        <span className='mx-4 text-gray-500'>to</span>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </div>
          <input
            id='datepicker-range-end'
            name='end'
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Select date end'
          />
        </div>
      </div> */}

        <div className='transaction-table-1 glass_bg '>
          <div className='date-picker-container'>
            <div className='date-pickers'>
              <div className='date-picker'>
                <p className='dp-input'>From:</p>
                <input
                  type='date'
                  className='date-input'
                  id='date'
                  name='date'
                />
                {/* <label for='date' className='date-label'></label> */}
              </div>
              <div className='date-picker'>
                <p className='dp-input'>To:</p>
                <input
                  type='date'
                  className='date-input'
                  id='date'
                  name='date'
                />
                {/* <label for='date' className='date-label'></label> */}
              </div>
            </div>
            <Button id='green-btn'>Submit</Button>
            <Button id='yellow-btn'>Download</Button>
          </div>

          {/* <Table></Table> */}
          <Table columnDefs={columnDefs} rows={makeData()} theme={theme} />
        </div>
      </div>
    </>
  );
};

export default HistoryPanel;
