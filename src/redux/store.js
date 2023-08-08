import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import offersReducer from './slices/offerSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    auth: authReducer,
    products: productsReducer,
    offers: offersReducer,
  },
});

export default store;
