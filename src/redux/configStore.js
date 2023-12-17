import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlice from "./slides/nguoiDungSlice";

export const store = configureStore({
  reducer: {
    nguoiDungSlice,
  },
});
