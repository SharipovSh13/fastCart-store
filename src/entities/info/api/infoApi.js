import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "@/shared/lib/api";

export const infoGetById = createAsyncThunk(
  "info/infoGetById",
  async (productId) => {
    try {
      const { data } = await axiosApiURL.get(
        `/Product/get-product-by-id?id=${productId}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
