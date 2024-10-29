import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import SvgIcon from "@mui/joy/SvgIcon";
import Counter from "../Counter";
import "./InfoCards.css";
import styled, { ThemeProvider } from "styled-components";

const InfoCard = ({
  rupees,
  value,
  text,
  bgColor,
  icon: Icon,
  style,
  showCounter,
  subtext1,
}) => {
  console.log("rupesss", rupees, "value ", value);

  const PComponent = styled.p`
    color: ${(props) => props.theme.subFontColor1};
    margin-bottom: 0.3rem;
  `;

  const P2Component = styled.p`
    color: ${(props) => props.theme.subFontColor2};
  `;

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
                rupees={rupees}
                className='counter-value'
                value={value}
                fontSize='2.5rem'
              />
              <PComponent level='body-md'>{text}</PComponent>
            </>
          ) : (
            <>
              <Counter
                rupees={rupees}
                className='counter-value'
                value={value}
                fontSize='2.5rem'
              />
              <PComponent level='body-lg'>{text}</PComponent>
              <P2Component level='body-sm' className='card-subtext'>
                {subtext1}
              </P2Component>
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
  );
};

export default React.memo(InfoCard);
