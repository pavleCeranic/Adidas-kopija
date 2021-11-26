import { createSlice } from "@reduxjs/toolkit";


export const initialState =  { 
  userExists:null,
  isLoggedIn : false,
  user:null,
  role : "",
  ValidUser: null,
  }

export const authSlice = createSlice({
    name: "auth",       
    initialState,
    reducers: {
      User(state, action){
        state.user = action.payload.user;
        state.isLoggedIn = action.payload.isLoggedIn;
        state.role = action.payload.role;
        state.ValidUser= action.payload.ValidUser;
        state.userExists = action.payload.userExists;
        }
      },
  });


export const authActions = authSlice.actions;