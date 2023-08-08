import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BarChart from "../components/home/charts/BarChart";
import Stats from "../components/home/stats/Stats";
import Table from "../components/Table";
import { orders, ordersColumns } from "../data/orders";
import CircleBar from "../components/sales/CircleBar";

const Dashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <ComponentWrapper>
        <Stats />
      </ComponentWrapper>

      <ComponentWrapper
        sx={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexDirection: { xs: "column",sm:"column", md: "column" ,lg:"row"},
        }}
      >
        <CircleBar
          title={"Average Time to Delivery Food"}
          time={"5Min 2sec"}
          color={"#99d1a6"}
          percentage={46}
          sx={{ flex: 1 }}
        />
        <CircleBar
          title={"Average Time to Delivery Food"}
          time={"5Min 2sec"}
          color={"#99d1a6"}
          percentage={46}
          sx={{ flex: 1 }}
        />
        <CircleBar
          title={"Average Time to Delivery Food"}
          time={"5Min 2sec"}
          color={"#99d1a6"}
          percentage={46}
          sx={{ flex: 1 }}
        />
        <CircleBar
          title={"Average Time to Delivery Food"}
          time={"5Min 2sec"}
          color={"#99d1a6"}
          percentage={46}
          sx={{ flex: 1 }}
        />
      </ComponentWrapper>

      <ComponentWrapper>
        <BarChart />
      </ComponentWrapper>

      <ComponentWrapper>
        <Typography variant="h5" sx={{ my: 3 }}>
          Latest Orders
        </Typography>
        <Table
          data={orders}
          fields={ordersColumns}
          numberOfRows={5}
          enableTopToolBar={false}
          enableBottomToolBar={false}
          enablePagination={false}
          enableRowSelection={false}
          enableColumnFilters={false}
          enableEditing={false}
          enableColumnDragging={false}
        />
      </ComponentWrapper>
    </Box>
  );
};

export default Dashboard;