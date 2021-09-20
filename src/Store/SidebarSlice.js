import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  show: false,
};

 export const toggleShowSlice = createSlice({
  name: "show",       
  initialState,
  reducers: {
    toggleSideabar(initialState) {
      initialState.show = !initialState.show ;
    },
  },
});


export const toggleShowAction = toggleShowSlice.actions;

