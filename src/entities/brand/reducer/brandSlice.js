import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "../../brand/api/brandApi";
export const brandSlice = createSlice({
  name: "brands",
  initialState: {
    brandsData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brandsData = action.payload;
    });
  },
});

export default brandSlice.reducer;
