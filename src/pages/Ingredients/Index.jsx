import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../../components/Table";
import { ingredients, IngredientsColumns } from "../../data/Ingredients";

const ProductIngredients = () => {

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Ingredients</Typography>

        <Button
          href="/products/ingredients/add"         
          variant="contained"
          color="primary"
          startIcon={<FiPlus />}
          sx={{ borderRadius: "20px" }}
        >
          Add Ingredients
        </Button>
      </Box>
      <Table
        data={ingredients}
        fields={IngredientsColumns}
        numberOfRows={ingredients.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview
        routeLink="products/ingredients"
      />
    </Box>
  );
};

export default ProductIngredients;
