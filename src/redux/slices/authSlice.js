// authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace 'YOUR_API_BASE_URL' with the actual base URL of your API
const API_BASE_URL = 'https://api.oryze.gomaplus.tech/api';

// Async thunk for making the login API call
export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    console.log(response.data);

    localStorage.setItem('token', response.data.token);

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
  //  localStorage.clear('token'); 

    return false;
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  // Clear the token from local storage
  localStorage.removeItem('token');
});
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
     .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null; // Reset the user state to null on successful logout
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
