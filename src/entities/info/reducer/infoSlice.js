import { createSlice } from "@reduxjs/toolkit";
import { infoGetById } from "../api/infoApi";
export const infoSlice = createSlice({
  name: "info",
  initialState: {
    infoData: [],
    counterProduct: 0,
  },
  reducers: {
    decriment: (state) => {
      state.counterProduct -= 1;
    },
    increment: (state) => {
      state.counterProduct += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(infoGetById.fulfilled, (state, action) => {
      state.infoData = action.payload;
    });
  },
});

export const { decriment, increment } = infoSlice.actions;
export default infoSlice.reducer;
