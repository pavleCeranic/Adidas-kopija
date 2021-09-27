
import { configureStore } from '@reduxjs/toolkit';
import { toggleShowSlice } from './SidebarSlice';
import {toggleSearchSlice} from './SearchSlice'
import {clickButtonSlice} from './button-slice'


const store = configureStore({
    reducer: {
    show: toggleShowSlice.reducer,
    search: toggleSearchSlice.reducer,
    button: clickButtonSlice.reducer,
},
  });

  export default store;

