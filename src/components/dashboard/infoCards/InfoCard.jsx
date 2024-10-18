import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import SvgIcon from "@mui/joy/SvgIcon";
import Counter from "../Counter";
import "./InfoCards.css";

const InfoCard = ({ value, text, bgColor, icon: Icon, style }) => {
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
          <Counter className='counter-value' value={value} fontSize='2.5rem' />
          <Typography level='body-md'>{text}</Typography>
        </div>
        <div className='card--right'>
          {/* <CircularProgress size='lg' determinate value={0}> */}
          <div className='circle'>
            {Icon && <Icon sx={{ fontSize: "1.6rem", color: "white" }} />}
          </div>
          {/* </CircularProgress> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(InfoCard);
