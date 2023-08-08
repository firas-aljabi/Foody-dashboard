import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
}
// Define the initial state for categories
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create an async thunk for fetching categories
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://api.oryze.gomaplus.tech/api/categories', {
     
    });
    //console.log(response.data)
    return response.data.data;
  }
);

// Create an async thunk for adding a post
export const addPost = createAsyncThunk(
  'categories/addPost',
  async (postData) => {
    console.log(postData)
    const response = await axios.post('https://api.oryze.gomaplus.tech/api/store_category', postData,{
    
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      }, 
      
    });
    return response.data;
  }
);

// Create an async thunk for updating a category
export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({id,categoryData}) => {
    console.log(categoryData)
    const response = await axios.post(`https://api.oryze.gomaplus.tech/api/update_category/${id}`, categoryData, {
      headers: {
        
        'Authorization':  `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data', 
      },
    });
    
   
    return response.data;
  }
);

// Create an async thunk for deleting a category
export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (categoryId) => {
    const response = await axios.post(`https://api.oryze.gomaplus.tech/api/delete_category/${categoryId}`, null, {
      headers: {
        // Add any headers you need
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);

// Create an async thunk for showing a single category
export const showCategory = createAsyncThunk(
  'categories/showCategory',
  async (id) => {
    const response = await axios.get(`https://api.oryze.gomaplus.tech/api/show_category/${id}`, {
      headers: {
        // Add any headers you need
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json', // Assuming you want JSON response
      },
    });
    return response.data;
  }
);

// Create the slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new post to the data array
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response after updating the category, if needed
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        const categoryId = action.payload;
        state.data = state.data.filter((category) => category.id !== categoryId);
        // Handle the response after deleting the category, if needed
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(showCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(showCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response after showing a single category, if needed
      })
      .addCase(showCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer to use in store configuration
export default categoriesSlice.reducer;
