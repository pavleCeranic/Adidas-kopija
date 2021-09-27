import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    button: true,
}

export  const clickButtonSlice = createSlice({
    name: "button",       
    initialState,
    reducers: {
      clickButton (initialState) {
        initialState.button = !initialState.button;
      },
    },
  });
  
  
  export const clickButtonAction = clickButtonSlice.actions;