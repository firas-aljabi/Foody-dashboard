import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, updateCategory, showCategory } from "../redux/slices/categoriesSlice";
import axios from "axios";

const EditCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const imageInput = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [image, setImage] = useState([null]);
  const [name, setName] = useState("");
  const [arabicname, setarabicname] = useState("");

  const [position, setPosition] = useState("");
  const [productData, setProductData] = useState({});

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

  useEffect(() => {
    dispatch(showCategory(id)); // Fetch the category data when the component mounts
  }, [dispatch, id]);

  const category = useSelector((state) => state.categories.data.find((cat) => cat.id === Number(id)));

  useEffect(() => {
    console.log(category)
    if (category) {
      setName(category.name); // Set the name field with the fetched category data
      setPosition(category.position); // Set the position field with the fetched category data
    //  setImage(category.imageurl); // Set the image field with the fetched category data
      setshowImage(category.imageurl)
      setarabicname(category.name_trans)
    }
  }, [category]);

  const englishhandleChange = (event) => {
    setName(event.target.value);
  };
  const arabichandlchange = (event) => {
    setarabicname(event.target.value);
  };
const[showImage,setshowImage]=useState('')
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
      
        setImage(selectedImage); // Save the data URL of the image in the 'image' state
        setshowImage(reader.result)
        console.log(selectedImage)
      };

      reader.readAsDataURL(selectedImage);
    }
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("name_trans", arabicname);

  
      formData.append("image", image);
   

    try {
      const response = await axios.post(
        `https://api.oryze.gomaplus.tech/api/update_category/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle success response here
      console.log(response);
      setSuccess("Category updated successfully!");
    } catch (error) {
      // Handle error response here
      console.error(error);
      setError("Failed to update category.");
    }
  }

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Edit Product Category
        <p style={{ color: "red" }}>
          {error} {success}
        </p>
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
        <Box sx={{ my: 2 }}>
          <TextField
            label="Category Name"
            variant="outlined"
            size="small"
            fullWidth
            value={name}
            onChange={englishhandleChange}
          />
        </Box>
        <Box sx={{ my: 2 }}>
        <TextField
          label="Category Arabic Name"
          variant="outlined"
          size="small"
          fullWidth
          value={arabicname}
          onChange={arabichandlchange}
        />
      </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Position "
            variant="outlined"
            size="small"
            fullWidth
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <input type="file" hidden ref={imageInput} onChange={handleImageChange} />
          <UploadBox onClick={() => imageInput.current.click()}>
            {showImage ? (
              <img
                src={showImage}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <BiImageAdd style={{ fontSize: "50px", color: "#027edd" }} />
                <Typography>
                  Drop your image here or <span style={{ color: "#027edd", cursor: "pointer" }}>browse</span>
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>JPG, PNG and GIF images are allowed</Typography>
              </Box>
            )}
          </UploadBox>
        </Box>
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
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditCategory;
