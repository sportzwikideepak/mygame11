import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";

export const createStore = () => {
  return configureStore({
    reducer: { menu: menuReducer },
  });
};
