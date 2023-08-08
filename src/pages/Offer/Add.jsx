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

import { useRef, useState } from "react";

import { BiImageAdd } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { storeOffer } from "../../redux/slices/offerSlice";
const AddOffer = () => {
  const imageInput = useRef(null);
  const [image, setImage] = useState("");
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");
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
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const offerData = {
      image: image,
    };

    dispatch(storeOffer(offerData)).unwrap()
    .then(() => {
      // Reset form fields and close the dialog on successful POST
      setImage("");
     setError("");
     setSuccess("Success")
    })
    .catch((error) => {
      setError('Error adding Offer')
      setSuccess("");
      //console.error('Error adding category:', error);
    });
  };

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Add Offer
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
         <p style={{color:"red"}}>{error} {success}</p>
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
        
     


 
         <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <Button variant="contained" sx={{ borderRadius: "20px" }}
          
          onClick={handleSubmit}>
            Submit
           
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddOffer;
