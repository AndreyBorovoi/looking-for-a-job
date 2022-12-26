import { createSlice } from '@reduxjs/toolkit';

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isOpen: false,
  },
  reducers: {
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    openDrawer: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeDrawer, openDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
