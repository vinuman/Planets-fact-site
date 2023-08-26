import { configureStore } from "@reduxjs/toolkit";
import selectSlice from "../features/selectSlice";

const store = configureStore({
  reducer: {
    select: selectSlice,
  },
});

export default store;
