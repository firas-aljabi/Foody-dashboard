import styled from "@emotion/styled";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiImageAdd } from "react-icons/bi";
import { categories } from "../data/categories";
import { storeProduct } from "../redux/slices/productsSlice";
import { fetchCategories } from "../redux/slices/categoriesSlice";
import {  useNavigate } from "react-router-dom";

const AddProduct = () => {
  const imageInput = useRef(null);
  const [load,setload]=useState(false);

  const [productData, setProductData] = useState({
    name: "",
    ingredients: "",
    category_id: "",
    rate: "",
    price: "",
    calories: "1",
    position:null,
    description:'',
    name_trans:'',
    ingredients_trans:'',
    taste:'',
    taste_trans:'',
    image:''
  });


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
const [error,setError]=useState("");
  const storeProductError = useSelector((state) => state.products.error);

  useEffect(() => {
    if (storeProductError) {
      console.log("Store Product Error Message:", storeProductError);
      setError("Something Wrong! Try Again");
    }
    else {
      setError("") ;
    }
  }, [storeProductError]);
  const   categories  = useSelector(
    (state) => state.categories.data
  );

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (e) => {
    setProductData({
      ...productData,
      image: e.target.files[0],
    });
  };
  const navigate = useNavigate(); // Get the history object for navigation

  const handleSubmit = () => {
    setload(true)

    dispatch(storeProduct(productData))
    console.warn("Product stored successfully!");

    // Navigate to '/products'
    setload(false)

    navigate('/products');
  };
  const UploadBox = styled(Box)({
    marginTop: 30,
    height: 200,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "divider",
  });

  return ( 
    
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Add Product  
       <p style={{color:"red"}}>{error}</p> 
      </Typography>
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          cursor: "pointer",
          overflow: "hidden",
        }}
      > 
      <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
      
          <TextField
             required
            name="name"
            label="Product English Name"
            variant="outlined"
            size="small"
            fullWidth
            value={productData.name}
            onChange={handleChange}
          />
         
          <TextField
             required
            name="name_trans"
            label="Product Arabic Name"
            variant="outlined"
            size="small"
            fullWidth
            value={productData.name_trans}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <TextField
             required
            name="ingredients"
            label="Ingredients In English"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
            value={productData.ingredients}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
        <TextField
           required
          name="ingredients_trans"
          label="Ingredients In Arabic"
          variant="outlined"
          rows={4}
          fullWidth
          multiline
          value={productData.ingredients_trans}
          onChange={handleChange}
        />
      </Box>
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              name="category_id"
              value={productData.category_id}
              onChange={handleChange}
            >
              {categories?.map(({ id, name }) => (
                <MenuItem value={id} key={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

      

        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
         <TextField
          required
            name="price"
            label="Price"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={"$234.24"}
            value={productData.price}
            onChange={handleChange}
          />
   <TextField
             required
            name="calories"
            label="Calories"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={"20%"}
            value={productData.calories}
            onChange={handleChange}
          /> 
        </Box>
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
      
        <TextField
           required
          name="taste"
          label="taste"
          variant="outlined"
          size="small"
          fullWidth
          value={productData.taste}
          onChange={handleChange}
        />
       
        <TextField
           required
          name="taste_trans"
          label="حساسية الطعم"
          variant="outlined"
          size="small"
          fullWidth
          value={productData.taste_trans}
          onChange={handleChange}
        />
      </Box>
        <input
        
          type="file"
          hidden
          ref={imageInput}
          onChange={handleImageChange}
        />
        <UploadBox onClick={() => imageInput.current.click()}> 
          {productData.image ? (
            <img
              src={URL.createObjectURL(productData.image)}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <BiImageAdd style={{ fontSize: "50px", color: "#027edd" }} />
              <Typography>
                Drop your image here or{" "}
                <span style={{ color: "#027edd", cursor: "pointer" }}>
                  browse
                </span>
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                JPG, PNG and GIF images are allowed
              </Typography>
            </Box>
          )}
        </UploadBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <Button variant="contained" sx={{ borderRadius: "20px" }} onClick={handleSubmit}>
            Submit
            {load==true?
              <svg
              aria-hidden="true"
              className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            :''}
          </Button>
         
        </Box>
      </Paper>
      
    </Box> 
  );
};

export default AddProduct;
