import { configureStore } from '@reduxjs/toolkit';
import { toggleShowSlice } from './SidebarSlice';
import {toggleSearchSlice} from './SearchSlice'



const store = configureStore({
    reducer: {
    show: toggleShowSlice.reducer,
    search: toggleSearchSlice.reducer,
    
},
  });

  export default store;

