import { Box, Chip, Grid, Paper, Rating, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../redux/slices/productsSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch product data using the showProduct thunk action
  useEffect(() => {
    dispatch(showProduct(id));
  }, [dispatch]);

  // Access the product data from the Redux store
  const product = useSelector((state) => state.products.data);
  console.log('product', product);

  if (!product) {
    // Handle loading state here if needed
    return <Typography>Loading...</Typography>;
  }

  const { category_id, Image, price, instock, product_name, short_description,ingredients,name } =
    product;

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h4">Product Details</Typography>
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <img
              src={Image}
              alt={product_name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="h5">
              <span
                style={{
                  opacity: 0.7,
                  textDecoration: "line-through",
                  fontSize: "13px",
                }}
              >
               
              </span>{" "}
              ${price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2"></Typography>
            
            </Box>
            <Typography variant="subtitle2">{short_description}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">Category</Typography>
              <Chip label={category_id} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">ingredients</Typography>
              <Chip
                label={ingredients }
                color={instock ? "success" : "error"}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SingleProduct;
