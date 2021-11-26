import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice';
import { categorySlice } from './category-slice';
import { uiSlice } from './ui-slice';

const store = configureStore({
    reducer: {
    cssClass: uiSlice.reducer,
    category: categorySlice.reducer,
    auth: authSlice.reducer
},
  });

  export default store;

