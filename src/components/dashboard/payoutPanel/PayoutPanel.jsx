import Form from "react-bootstrap/Form";
import "./PayoutPanel.css";
import Button from "react-bootstrap/Button";
import InfoCard from "../infoCards/InfoCard";
import Table from "../../Table/Table";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Filter5Icon from "@mui/icons-material/Filter5";
import ComponentTitle from "../componentTitle/ComponentTitle";
import React, { useState } from "react";
//
import { Modal } from "@mui/base/Modal";

//
import Chip from "@mui/material/Chip";

// import "./styles.css";
import IconButton from "@mui/material/IconButton";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PanelTitle from "../panelTitle/PanelTitle";
import ReceiptComponent from "../../receipt/ReceiptComponent";
import ModalComponent from "../../modal/ModalComponent";
import styled from "styled-components";

const FormCardComponent = styled.div`
  color: ${(props) => props.theme.fontColor1};

  input::placeholder {
    color: grey;
    opacity: 1;
  }
`;

function PayoutPanel({ theme }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const makeData = (rowsToMake) => {
    let data = [
      {
        Name: "user1",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "654.32",
        Amount: "238.17",
        status: "success",
      },
      {
        Name: "user2",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "238.49",
        Amount: "574.81",
        status: "pending",
      },
      {
        Name: "user3",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "103.11",
        Amount: "469.29",
        status: "failed",
      },
      {
        Name: "user4",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "765.23",
        Amount: "523.90",
        status: "success",
      },
      {
        Name: "user5",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "923.55",
        Amount: "389.17",
        status: "pending",
      },
      {
        Name: "user6",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "592.22",
        Amount: "615.72",
        status: "failed",
      },
      {
        Name: "user7",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "101.49",
        Amount: "248.31",
        status: "success",
      },
      {
        Name: "user8",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "843.29",
        Amount: "193.87",
        status: "success",
      },
      {
        Name: "user9",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "372.76",
        Amount: "499.24",
        status: "pending",
      },
      {
        Name: "user10",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "159.22",
        Amount: "834.13",
        status: "failed",
      },
      {
        Name: "user11",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "456.31",
        Amount: "320.50",
        status: "success",
      },
      {
        Name: "user12",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "211.73",
        Amount: "765.13",
        status: "pending",
      },
      {
        Name: "user13",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "329.01",
        Amount: "202.56",
        status: "failed",
      },
      {
        Name: "user14",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "843.12",
        Amount: "657.45",
        status: "success",
      },
      {
        Name: "user15",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "527.90",
        Amount: "738.11",
        status: "pending",
      },
      {
        Name: "user16",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "643.59",
        Amount: "297.33",
        status: "failed",
      },
      {
        Name: "user17",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "119.44",
        Amount: "823.54",
        status: "success",
      },
      {
        Name: "user18",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "958.63",
        Amount: "483.92",
        status: "success",
      },
      {
        Name: "user19",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "376.41",
        Amount: "659.77",
        status: "pending",
      },
      {
        Name: "user20",
        Date: "Sun, 27 Oct 2024 10:45:00 GMT",
        Account_Number: "531.88",
        Amount: "714.66",
        status: "failed",
      },
    ];
    return data;
  };
  const flag = true;

  const columnDefs = [
    { field: "Name", filter: true, flex: 1 },
    { field: "Account_Number", filter: true, flex: 1 },
    { field: "Amount", filter: true, width: 230, flex: 1 },

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
            <IconButton aria-label='delete' size='large' onClick={handleOpen}>
              <ReceiptLongIcon fontSize='medium' sx={{ color: "#2050a8" }} />
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
        }
        return (
          <div>
            <Chip
              label={label}
              sx={{ backgroundColor: bgColor, color: "#FFFFFF" }}
            />
          </div>
        );
      },
    },
    {
      field: "Date",
      filter: true,
      flex: 1.5,
    },
  ];
  console.log("modll", open);
  return (
    <>
      <PanelTitle title={"Payout"} />
      <div className='payout-container'>
        {/*  */}

        {open && (
          <ModalComponent isOpen={open} onClose={handleClose}>
            <ReceiptComponent />
          </ModalComponent>
        )}
        {/*  */}

        <div className='pc-1'>
          <div className='pc-cards'>
            <InfoCard
              key={"index1"}
              value={"90"}
              text={"Last-5 Transactions"}
              bgColor={"#ff000085"}
              loadPos={"card.loadPos"}
              icon={Filter5Icon}
              style={{ height: "20vh", width: { xs: "90%" } }}
              showCounter={false}
              subtext1={"Success/Failure Amounts"}
            />
            <InfoCard
              rupees={true}
              key={"index1"}
              value={233}
              text={"Wallet"}
              bgColor={"blue"}
              loadPos={"card.loadPos"}
              icon={AccountBalanceWalletIcon}
              style={{ height: "20vh", width: { xs: "90%" } }}
              showCounter={false}
              subtext1={"Present Wallet Amount"}
            />
          </div>
          <div className='spacer'></div>
          <div className='payout-panel-forms'>
            <div className='fund-transfer-form-container'>
              <ComponentTitle title={"Transfer Funds"}></ComponentTitle>
              <div className='fund-transfer-form glass_bg'>
                {/* <h2>Transfer Funds</h2> */}

                <div className='spacer'></div>
                <FormCardComponent>
                  <Form>
                    <div className='parallel-field-not'>
                      <Form.Group
                        className='mb-3 form-f'
                        controlId='exampleForm.ControlTextarea1'
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type='textarea'
                          placeholder='Enter Name'
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3 form-f'
                        controlId='exampleForm.ControlTextarea2'
                      >
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control
                          type='textarea'
                          placeholder='Enter Account Number'
                        />
                      </Form.Group>
                    </div>
                    <div className='parallel-field-not'>
                      <Form.Group
                        className='mb-3 form-f'
                        controlId='exampleForm.ControlTextarea3'
                      >
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control
                          type='textarea'
                          placeholder='Enter IFSC Code'
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3 form-f'
                        controlId='exampleForm.ControlTextarea5'
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type='textarea'
                          placeholder='Enter Phone Number'
                        />
                      </Form.Group>
                    </div>
                    <div className='parallel-field-not'>
                      <Form.Group
                        className='mb-3 form-f'
                        controlId='exampleForm.ControlTextarea4'
                      >
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                          type='textarea'
                          placeholder='Enter Amount'
                        />
                      </Form.Group>
                    </div>
                    <div className='spacer'></div>
                    <Button
                      className='green-btn'
                      variant='primary'
                      type='submit'
                    >
                      Submit
                    </Button>
                    {/* <div className='spacer'></div> */}
                  </Form>
                </FormCardComponent>
              </div>
            </div>
            <div className='table-container'>
              <ComponentTitle title={"Transfer Details"}></ComponentTitle>
              <Table columnDefs={columnDefs} rows={makeData()} theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayoutPanel;
