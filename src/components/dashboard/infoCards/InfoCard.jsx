import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import SvgIcon from "@mui/joy/SvgIcon";
import Counter from "../Counter";
import "./InfoCards.css";

const InfoCard = ({
  value,
  text,
  bgColor,
  icon: Icon,
  style,
  showCounter,
  subtext1,
}) => {
  console.log("qwerty", subtext1);
  return (
    <Card
      variant='solid'
      className='dashboard__card glass_bg'
      sx={{
        height: "100%",
        padding: 0,
        backgroundColor: "transparent",
        color: "red",
        ...style,
      }}
    >
      <div
        className='ag-courses-item_bg'
        style={{ backgroundColor: bgColor }}
      ></div>
      <CardContent orientation='horizontal' className='card-content'>
        <div className='card--left'>
          {/* {string === true ? (

          ) : (
            <h2>{value}e</h2>
          )} */}
          {showCounter ? (
            <>
              <Counter
                className='counter-value'
                value={value}
                fontSize='2.5rem'
              />
              <Typography level='body-md'>{text}</Typography>
            </>
          ) : (
            <>
              <Counter
                className='counter-value'
                value={value}
                fontSize='2.5rem'
              />
              <Typography level='body-lg'>{text}</Typography>
              <Typography level='body-sm' className='card-subtext'>
                {subtext1}
              </Typography>
            </>
          )}
        </div>
        <div className='card--right'>
          {/* <CircularProgress size='lg' determinate value={0}> */}
          {/* <div className='circle'> */}
          {Icon && <Icon sx={{ fontSize: "3rem", color: "rgb(5, 233, 80)" }} />}
          {/* </div> */}
          {/* </CircularProgress> */}
        </div>
      </CardContent>
    </Card>
    // <div class='ag-format-container'>
    // <div class='ag-courses_box'>
    // <div class='ag-courses_item'>
    //   <a href='#' class='ag-courses-item_link'>
    //     <div class='ag-courses-item_bg'></div>

    //     <div class='ag-courses-item_title'>
    //       UI/Web&amp;Graph design for teenagers 11-17&#160;years old
    //     </div>

    //     <div class='ag-courses-item_date-box'>
    //       Start:
    //       <span class='ag-courses-item_date'>04.11.2022</span>
    //     </div>
    //   </a>
    // </div>
    // {/* </div> */}
    // {/* </div> */}
  );
};

export default React.memo(InfoCard);
