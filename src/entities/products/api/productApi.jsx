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
