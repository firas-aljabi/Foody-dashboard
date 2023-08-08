
import * as React from "react";
import { useRef, useState,useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BiImageAdd } from "react-icons/bi";
import styled from "@emotion/styled";
import { useDispatch ,useSelector} from 'react-redux';
import { addPost } from '../redux/slices/categoriesSlice'

const AddCategory = ({ open, handleClose }) => {
  const imageInput = useRef(null);
  const [image, setImage] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [ArabicCategoryName, setArabicCategoryName] = useState("");

  const [categoryPosition, setCategoryPosition] = useState("");
  const [error,setError]=useState("");
  const dispatch = useDispatch();

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
  const storeProductError = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (storeProductError) {
      console.log("Store Product Error Message:", storeProductError);
      setError("Something Wrong! Try Again");
    }
    else {
      setError("") ;
    }
  }, [storeProductError]);
  const handleAddCategory = () => {
    const postData = {
      name: categoryName,
      position: categoryPosition,
      image: image, // Make sure to handle the image correctly on the server-side
      name_trans:ArabicCategoryName
    };

    dispatch(addPost(postData))
      .unwrap()
      .then(() => {
        // Reset form fields and close the dialog on successful POST
        setCategoryName("");
        setArabicCategoryName("");

        setCategoryPosition("");
        setImage("");
        handleClose();
      })
      .catch((error) => {
        // Handle errors, if any
        console.error('Error adding category:', error);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Category Please</DialogTitle>
        <p style={{color:"red"}}>
          {error}
        </p>
        <DialogContent>
          <TextField
          required
            autoFocus
            margin="dense"
            id="category"
            label="English Name"
            type="text"
            fullWidth
            variant="standard"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <TextField
          required
            autoFocus
            margin="dense"
            id="category"
            label="Arabic Name"
            type="text"
            fullWidth
            variant="standard"
            value={ArabicCategoryName}
            onChange={(e) => setArabicCategoryName(e.target.value)}
          />
          <TextField
          required
            autoFocus
            margin="dense"
            id="number"
            label="Position"
            type="number"
            fullWidth
            variant="standard"
            value={categoryPosition}
            onChange={(e) => setCategoryPosition(e.target.value)}
          />

          {/* Add image */}
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <UploadBox onClick={() => imageInput.current.click()}>
            {image ? (
              <img
                src={image && URL.createObjectURL(image)}
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
          {/* End of Component */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddCategory} variant="contained"> 
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategory;
