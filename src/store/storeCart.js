import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: { num: 1 },
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num -= 1;
    },
    reset: (state) => {
      state.num = 1;
    },
  },
});
export const { increment, decrement, reset } = quantitySlice.actions;

export default quantitySlice.reducer;
