import { Box } from "@mui/system";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircularBar = ({ percentage, pathColor }) => {
  const circularBarStyles = {
    width: "65px",
    height: "65px",
    pathTransitionDuration: "0.5s",
    strokeLinecap: "round",
    pathTransition: "stroke-dashoffset 0.5s ease 0s",
    textSize: "20px",
    pathColor: `${pathColor}`,
    textColor: "#A3AED0",
    trailColor: "#A3AED0",
    // Centering the text
    path: { transformOrigin: "center center" },
    text: { fill: "#A3AED0", dominantBaseline: "central", textAnchor: "middle" },
  };

  return (
    <Box sx={circularBarStyles}>
      <CircularProgressbar
        backgroundPadding={2}
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        className="circular-bar"
        styles={buildStyles(circularBarStyles)}
      />
    </Box>
  );
};

export default CircularBar;
