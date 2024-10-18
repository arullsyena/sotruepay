import React, { useState, useEffect } from "react";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";

const Counter = ({ value, fontSize, text }) => {
  const formatCurrency = (value) => {
    return `${
      text === "Wallet's money" || text === "Total Amount Today" ? "₹" : ""
    } ${
      text === "Wallet's money" || text === "Total Amount Today"
        ? value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        : value.toLocaleString(undefined, {})
    }`;
  };

  const [counter, setCounter] = useState(0);
  const targetValue = value; // Target value as a number

  useEffect(() => {
    const duration = 1000; // Animation duration in milliseconds
    const stepTime = 50; // Update interval in milliseconds
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    let currentValue = 0;

    const interval = setInterval(() => {
      currentValue = Math.min(currentValue + increment, targetValue);

      // Check if we are close to the target value, use the actual targetValue in that case
      if (currentValue >= targetValue) {
        setCounter(targetValue); // Set the final value including decimals
        clearInterval(interval); // Stop the interval once the target is reached
      } else {
        setCounter(Math.floor(currentValue)); // Show only whole numbers during the animation
      }
    }, stepTime);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetValue]);

  return (
    <Typography level='h2' sx={{ fontSize }}>
      {formatCurrency(counter)}
    </Typography>
  );
};

export default Counter;
