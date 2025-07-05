import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "@/shared/lib/api";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axiosApiURL.get("/Product/get-products");

      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getProductsFilter = createAsyncThunk(
  "products/getProductsFilter",
  async (categoryId) => {
    try {
      const { data } = await axiosApiURL.get(
        `/Product/get-products?CategoryId=${categoryId}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getBrandsFilter = createAsyncThunk(
  "products/getBrandsFilter",
  async (brandsId) => {
    try {
      const { data } = await axiosApiURL.get(
        `/Product/get-products?BrandId=${brandsId}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const maxGetProducts = createAsyncThunk(
  "products/maxGetProducts",
  async (price = { min: "", max: "" }) => {
    try {
      const { data } = await axiosApiURL.get(
        `/Product/get-products?MinPrice=${price.min}&MaxPrice=${price.max}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
