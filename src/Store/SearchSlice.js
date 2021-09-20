import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  show: false,
};

 export  const toggleSearchSlice = createSlice({
  name: "search",       
  initialState,
  reducers: {
    toggleSearch (initialState) {
      initialState.show = !initialState.show;
    },
  },
});


export const toggleSearchAction = toggleSearchSlice.actions;