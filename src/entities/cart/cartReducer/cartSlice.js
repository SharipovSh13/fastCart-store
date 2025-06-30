import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../api/cartApi";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cartData = action.payload;
    });
  },
});
export default cartSlice.reducer;
