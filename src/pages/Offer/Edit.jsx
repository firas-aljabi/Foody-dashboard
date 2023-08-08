import styled from "@emotion/styled";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";


import { useEffect, useRef, useState } from "react";

import { BiImageAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateOffer } from "../../redux/slices/offerSlice";
import { useParams } from "react-router";
const EditOffer = () => {
  const { id } = useParams();
  const imageInput = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [image, setImage] = useState(null);
  const [offerData, setOfferData] = useState(null); // State for storing the offer data

  const dispatch = useDispatch();

  // Fetch offer data when the component mounts


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(selectedImage);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = () => {
    if (!image) {
      setError("Please select an image.");
      return;
    }

    dispatch(updateOffer(id, image))
      .unwrap()
      .then(() => {
        // Reset form fields and show success message on successful update
        setImage(null);
        setError("");
        setSuccess("Offer edited successfully.");
      })
      .catch((error) => {
        setError("Error editing offer.");
        setSuccess("");
        console.error("Error updating offer:", error);
      });
  };

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Edit Offer <p style={{ color: "red" }}>{error}</p>{" "}
        <p style={{ color: "green" }}>{success}</p>
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
        <input
          type="file"
          hidden
          ref={imageInput}
          onChange={handleImageChange}
        />
        <Box onClick={() => imageInput.current.click()}>
          {image ? (
            <img
              src={image && URL.createObjectURL(image)}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : offerData?.image ? (
            <img
              src={offerData.image}
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
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: "20px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditOffer;