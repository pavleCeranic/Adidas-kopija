import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './category-slice';
import { uiSlice } from './ui-slice';

const store = configureStore({
    reducer: {
    cssClass: uiSlice.reducer,
    category: categorySlice.reducer
},
  });

  export default store;

