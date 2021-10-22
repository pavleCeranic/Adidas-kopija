import { createSlice } from "@reduxjs/toolkit";


export const initialState =  { categories: false }

export const categorySlice = createSlice({
    name: "category",       
    initialState,
    reducers: {
      showCategory(state, action) {
        state.categories = action.payload.categories
      },
    },
  });


export const categoryActions = categorySlice.actions;