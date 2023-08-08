// slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for products
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create an async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://api.oryze.gomaplus.tech/api/products');
    return response.data.data;
  }
);

// Create an async thunk for updating a product
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (productData,id) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('ingredients', productData.ingredients);
    formData.append('category_id', productData.category_id);
    formData.append('rate', productData.rate);
    formData.append('price', productData.price);
    formData.append('calories', productData.calories);
    formData.append('image', productData.image);
    formData.append('name_trans', productData.name_trans);

    formData.append('ingredients_trans', productData.ingredients_trans);

    formData.append('taste', productData.taste);
    formData.append('taste_trans', productData.taste_trans);
    console.log("Form Data:", formDataToJSObject(formData));
    const response = await axios.post(`https://api.oryze.gomaplus.tech/api/update_product/${id}`, formData, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      }, 
    });
    console.log(response)

    return{data: response.data,
    message:response.message,
    }

  }
);

// Create an async thunk for storing a new product
export const storeProduct = createAsyncThunk(
  'products/storeProduct',
  async (productData) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('ingredients', productData.ingredients);
    formData.append('category_id', productData.category_id);
    formData.append('rate', productData.rate);
    formData.append('price', productData.price);
    formData.append('calories', productData.calories);
    formData.append('image', productData.image);
    formData.append('name_trans', productData.name_trans);

    formData.append('ingredients_trans', productData.ingredients_trans);

    formData.append('taste', productData.taste);
    formData.append('taste_trans', productData.taste_trans);

    const response = await axios.post('https://api.oryze.gomaplus.tech/api/store_product', formData, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      }, 
    });
    console.log(response)

    return{data: response.data,
    message:response.message,
    }

  }
);

// Create an async thunk for deleting a product
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    const response = await axios.post(`https://api.oryze.gomaplus.tech/api/delete_product/${productId}`, null,{

    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
    }, 

    });
    return response.data;
  }
);

// Create an async thunk for showing a single product
export const showProduct = createAsyncThunk(
  'products/showProduct',
  async (id) => {
    const response = await axios.get(`https://api.oryze.gomaplus.tech/api/show_product/${id}`);
    return response.data.data;
  }
);

// Create an async thunk for editing the status of a product
export const editProduct = createAsyncThunk(
  'products/editProduct',
  async ({id, productData}) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('ingredients', productData.ingredients);
    formData.append('category_id', productData.category_id);
    formData.append('position', productData.position);
    formData.append('price', productData.price);
    formData.append('calories', productData.calories);
    formData.append('image', productData.image);
   

    const response = await axios.post(`https://api.oryze.gomaplus.tech/api/update_product/${id}`, formData, {
      
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      }, 
    });

    return response.data;
  }
);
export const editStatus = createAsyncThunk(
  'products/editStatus',
  async (productId) => {
    const response = await axios.get(`https://api.oryze.gomaplus.tech/api/edit_status/${productId}`, {
      
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",

      
    }, 
  })
    return response.data;
  })


// Create the slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response after updating the product, if needed
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        
      })
      .addCase(storeProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null; // Reset the message in case of a new request
      })
      .addCase(storeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response after storing the product, if needed
        state.message = action.payload.message; // Set the message from the response
      })
      .addCase(storeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.message = action.message; // Set the message from the response
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const productId = action.payload;
        state.data = state.data.filter((product) => product.id !== productId);
        // Handle the response after deleting the product, if needed
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(showProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(showProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        // Handle the response after showing a single product, if needed
      })
      .addCase(showProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response after editing the status, if needed
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response after editing the status, if needed
      })
      .addCase(editStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer to use in store configuration
export default productsSlice.reducer;
