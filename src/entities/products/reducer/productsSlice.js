import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductsFilter,
  getBrandsFilter,
  maxGetProducts,
} from "../api/productApi.jsx";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductsFilter.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getBrandsFilter.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(maxGetProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
