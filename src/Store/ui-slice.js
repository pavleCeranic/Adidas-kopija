import { createSlice } from "@reduxjs/toolkit";


export const initialState =  { sidebarCss:{cssClass:"noSidebarYet"},searchCss:{cssClass:"noSearchYet"}}

export const uiSlice = createSlice({
    name: "cssClass",       
    initialState,
    reducers: {
      sidebarCssChange(state, action) {
        state.sidebarCss = {
            cssClass: action.payload.cssClass,
        } ;
      },
      searchCssChange(state, action) {
        state.searchCss = {
            cssClass: action.payload.cssClass,
        } ;
      },
    },
  });


export const uiActions = uiSlice.actions;
