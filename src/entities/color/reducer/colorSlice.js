import { createSlice } from "@reduxjs/toolkit";
import { getColor } from "../../color/api/colorApi";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    colorsData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColor.fulfilled, (state, action) => {
      state.colorData = action.payload;
    });
  },
});
export default colorSlice.reucer;
