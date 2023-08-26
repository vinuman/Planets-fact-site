import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectPlanet: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectedState = (state) => state.select.value;

export const { selectPlanet } = selectSlice.actions;

export default selectSlice.reducer;
