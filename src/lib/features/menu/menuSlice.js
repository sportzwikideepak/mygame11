import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
