import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CircularBar from "./CircularBar";
import { FiInfo } from "react-icons/fi";

const CircleBar = ({title, percentage, time, color}) => {
  return (
      <Box 
        sx={{
          // background:"#FFF",
          display: "flex",
          alignItems: "center",
          marginTop: 2,
          justifyContent: "center",
          pb: 2,
          flexWrap: { xs: "wrap", md: "no-wrap" },
          border:"1px solid #C4C4C4",
          borderRadius:"10px",
          padding:{xs: '60px 20px', md: '40px 20px'},
          boxShadow:"3px 2px 6px #C4C4C4",
          width: { xs: '100%', md: 'auto' },
        }}
      >

        <Box sx={{ display: "flex", alignItems: "center", gap:{ xs: '60px', md:'30px'} , justifyContent:"space-between" }}>
          <Box  sx={{ display: "flex", flexDirection:"column" }}>
          <Typography variant="h6" component="h2" sx={{fontSize:" 10px", fontWeight: "700"}}>
            {title}
          </Typography>
          <Typography variant="h6" component="h2" sx={{fontSize:" 16px", fontWeight: "700"}}>
            {time}
          </Typography>
          </Box>
        
          <CircularBar sx={{padding:"50%", width:"30%"}} percentage={percentage} pathColor={color} />
        </Box>
      <Divider />
      </Box>


  );
};

export default CircleBar;
