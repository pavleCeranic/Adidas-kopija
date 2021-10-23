import { createSlice } from "@reduxjs/toolkit";


export const initialState =  {
  show:false,
  categories:null
   }

export const categorySlice = createSlice({
    name: "category",       
    initialState,
    reducers: {
      toggle(state){
        state.show = !state.show
      },
      showCategories(state, action) {
        state.categories = {
          shoes : action.payload.categories.shoes,
          clothing : action.payload.categories.clothing,
          accessories : action.payload.categories.accessories,
          sports : action.payload.categories.sports
        }
       
      },
    },
  });


export const categoryActions = categorySlice.actions;