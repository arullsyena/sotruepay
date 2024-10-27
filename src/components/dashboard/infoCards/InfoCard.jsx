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
      className='dashboard__card'
      sx={{
        height: "100%",
        padding: 0,
        backgroundColor: bgColor,
        color: "red",
        ...style,
      }}
    >
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
          <div className='circle flip'>
            {Icon && (
              <Icon sx={{ fontSize: "1.5rem", color: "rgb(5, 233, 80)" }} />
            )}
          </div>
          {/* </CircularProgress> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(InfoCard);
