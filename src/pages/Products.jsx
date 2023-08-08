import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts ,editStatus} from "../redux/slices/productsSlice";
import Switch from '@mui/material/Switch'
import {  useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate(); // Get the history object for navigation
  const handleEnableEditing = (productId) => {
    // Redirect to the "/edit/:id" route with the appropriate productId
    navigate(`/products/edit/${productId}`);
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  console.log('products', products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsColumns = [
    // {
    //   header: "ID",
    //   accessorKey: "id",
    // },
    
    {
      header: "English Name",
      accessorKey: "name",
    },
    {
      header: "اسم المنتج",
      accessorKey: "name_trans",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "taste",
      accessorKey: "taste",
    },
    {
      header: "حساسية الطعم",
      accessorKey: "taste_trans",
    },
    {
      header: "calories",
      accessorKey: "calories",
    },
    // {
    //   header: "Description",
    //   accessorKey: "description",
    // },
    {
      header: "Ingredients",
      accessorKey: "ingredients",
    },
    {
      header: "المكونات",
      accessorKey: "ingredients_trans",
    },
    {
      header: "Image",
      accessorKey: "image",
      Cell: function (params) {
       
       return(<img src={params.row.original.image} />);
      },
    },
    // {
    //   header: "Estimated Time",
    //   accessorKey: "estimated_time",
    // },
    // {
    //   header: "Category ID",
    //   accessorKey: "category_id",
    // },
    // {
    //   header: "Position",
    //   accessorKey: "position",
    // },
    {
      header: "ACTIONS",
      accessorKey: "actions",
      Cell: function (params) {
        return (
          <div className="flex justify-between">
            <Button variant="outlined" color="primary" onClick={() => handleEnableEditing(params.row.original.id)}>
              Edit
            </Button>
            <Button variant="outlined" className="text-red-700 bg-red-600 mr-3" onClick={() => handleDeleteProduct(params.row.original.id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      Cell: function (params) {
      
//console.log(params.row.original.status)
        // Pass the productId to the handleToggleStatus function
    

       
        let Checked= false
        if(params.row.original.status == '1'){
          Checked= true   }
        else {
          Checked= false }
       
            return <Switch onClick={() =>{ handleToggleStatus(params.row.original.id)}} checked={Checked} />;
          
       
      },
    },
  ];

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId)) .then(() => {
      // Handle successful deletion if needed
      console.log("Product deleted successfully!");
    })
    .catch((error) => {
      // Handle errors if needed
      console.error("Error deleting product:", error);
    });
};
  const handleToggleStatus = (productId) => {
    console.log(productId)
    dispatch(editStatus(productId))
      .then(() => {
        console.log("Status changed successfully!");
        window.location.reload()
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error changing status:", error);
      });
  };

  return (
    <Box sx={{ pt: "80px", pb: "20px" ,overflow:"auto"}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Products</Typography>
        <Link to="/products/add" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FiPlus />}
            sx={{ borderRadius: "20px" }}
          >
            Add Product
          </Button>
        </Link>
      </Box>
      {
        products.length >= 1 ? 
      (<Table
        data={products}
        fields={productsColumns}
        numberOfRows={products.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
     //   enableEditing={true}
        enableColumnDragging={true}
       // showPreview={true}
     //   routeLink="products"
   //     onDelete={(productId) => handleDeleteProduct(productId)}
      />) : ''
}
      
    </Box> 
  );
};

export default Products;
