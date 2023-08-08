import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import {  useNavigate } from "react-router-dom";

import {
  AddProduct,
  Customers,
  Orders,
  OrderTemplate,
  ProductCategories,
  ProductIngredients,
  AddProductIngredients,
  Offer,
  OfferAdd,
  Products,
  ProductSales,
  Reviews,
  SalesAnalytics,
  Settings,
  SingleCustomer,
  SingleOrder,
  SingleProduct,
  Transactions,
  EditProduct,
  Recept,
  EditCategory,
  Offeredit,
  Login
} from "./pages";
import { useSelector } from 'react-redux';

const sideBarWidth = 250;

function App() {
  const navigate = useNavigate(); // Get the history object for navigation

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const onLoginPage = location.pathname === '/';
  React.useEffect(() => {
    if(    localStorage.getItem('token')==undefined ||localStorage.getItem('token')==null||localStorage.getItem('token')==''){
      navigate("/");
    }
    else{
      console.log('you may enter')
      console.log("token "+localStorage.getItem('token'))
    }
  //  console.log(token ? "true" : "false");
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {onLoginPage ? null : (
        <>
          <Navbar
         
            sideBarWidth={sideBarWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Sidebar
            sideBarWidth={sideBarWidth}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 1, md: 2 },
          width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
        }}
      >
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
         {/** <Route path="/Dashboard" element={<Dashboard />} />
          */}
          <Route path="/products" element={<Products />} />
          <Route path="/Recept" element={<Recept />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/categories" element={<ProductCategories />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/categories/edit/:id" element={<EditCategory />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/offer/add" element={<OfferAdd />} />
          <Route path="/offer/edit/:id" element={<Offeredit />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<SingleCustomer />} />
          <Route path="/sales/analysis" element={<SalesAnalytics />} />
          <Route path="/sales" element={<ProductSales />} />
          <Route path="/orders/template" element={<OrderTemplate />} />
          <Route path="/orders/:id" element={<SingleOrder />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;