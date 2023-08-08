import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  offers: [],
  loading: false,
  error: null,
};

// Async thunks
export const getOffers = createAsyncThunk("offers/getOffers", async () => {
  const response = await axios.get("https://api.oryze.gomaplus.tech/api/offers");
  return response.data.data;
});

export const storeOffer = createAsyncThunk("offers/storeOffer", async (formData) => {
  const response = await axios.post("https://api.oryze.gomaplus.tech/api/store_offer",
   formData,{
       headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      }, 
   });
  return response.data;
});

export const updateOffer = createAsyncThunk("offers/updateOffer", async (id,formData) => {
  const response = await axios.post(`https://api.oryze.gomaplus.tech/api/update_offer/${id}`, formData,{
    headers: {
     "Authorization": `Bearer ${localStorage.getItem('token')}`,
     "Access-Control-Allow-Origin": "*",
     "Content-Type": "multipart/form-data",
   }, 
});
return response.data;
});
  
export const showOffer = createAsyncThunk("offers/showOffer", async () => {
  const response = await axios.get("http://localhost:8000/api/show_offer/1");
  return response.data;
});

export const deleteOffer = createAsyncThunk("offers/deleteOffer", async (offerId) => {
  const response = await axios.post(`https://api.oryze.gomaplus.tech/api/delete_offer/${offerId}`, null,{

  headers: {
    "Authorization": `Bearer ${localStorage.getItem('token')}`,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  }, });
  return response.data;
});

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteOffer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteOffer.fulfilled, (state, action) => {
        state.isLoading = false;
        const offerId = action.payload;
        state.data = state.data.filter((offer) => offer.id !== offerId);
        // Handle the response after deleting the product, if needed
      })
      .addCase(deleteOffer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export default offersSlice.reducer;
