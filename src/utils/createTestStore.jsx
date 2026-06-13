import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const createTestStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};