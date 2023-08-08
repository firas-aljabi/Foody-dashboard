import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import AddCategory from "../components/AddCategory";
import Table from "../components/Table";
import { fetchCategories,deleteCategory } from "../redux/slices/categoriesSlice";
import {  useNavigate } from "react-router-dom";

const ProductCategories = () => {
  const navigate = useNavigate(); // Get the history object for navigation
  const handleEnableEditing = (productId) => {
    // Redirect to the "/edit/:id" route with the appropriate productId
    navigate(`/categories/edit/${productId}`);
  };
  const categoriesColumns = [
    // {
    //   field: "id",
    //   header: "ID",
    // },
    { 
      field: "name",
      header: "Name",
    },
    { 
      field: "name_trans",
      header: "Name In Arabic",
    },
    {
      field: "position",
      header: "Position",
    },
    {
      field: "imageurl",
      header: "Image",
      Cell: function (params) {
        //console.log(params.row.original.Image);
       return(<img src={params.row.original.imageurl} />);
      },
    },
    {
      header: "ACTIONS",
      accessorKey: "actions",
      Cell: function (params) {
        return (
          <div className="flex justify-between">
          <Button variant="outlined" color="primary" onClick={() => handleEnableEditing(params.row.original.id)}>
            Edit
          </Button>
          <Button variant="outlined" className="text-red-700 bg-red-600 mr-3" onClick={() => handleDeleteCategory(params.row.original.id)}>
            Delete
          </Button>
        </div>
        );
      },
    },
  ];
  
  const newCategoriesColumns = categoriesColumns.map((column) => ({
    accessorKey: column.field,
    header: column.header,
    Cell: column.Cell,
  }));
  
  //console.log(newCategoriesColumns);
  

 const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
 useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const   categories  = useSelector(
    (state) => state.categories.data
  );


 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleDeleteCategory = (categoryId) => {
  dispatch(deleteCategory(categoryId)).then(() => {
    // Handle successful deletion if needed
    console.log("Product deleted successfully!");
  })
  .catch((error) => {
    // Handle errors if needed
    console.error("Error deleting product:", error);
  });
};

  return (
    <Box sx={{ pt: "80px", pb: "20px" ,overflow:"auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Categories</Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FiPlus />}
          sx={{ borderRadius: "20px" }}
          onClick={handleClickOpen}
        >
          Add Category
        </Button>
      </Box>
      <AddCategory open={open} handleClose={handleClose} />
      {
        categories.length >= 1 ?
      (<Table
        data={categories}
        fields={newCategoriesColumns} 
        numberOfRows={categories.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
     //   enableEditing={true}
        enableColumnDragging={true}
        routeLink="categories"
      //  onDelete={(categoryId) => handleDeleteCategory(categoryId)}
      /> ) : ""
      }
    </Box>
  );
};

export default ProductCategories;

