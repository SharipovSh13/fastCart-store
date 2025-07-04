import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "@/shared/lib/api";

export const getCategory = createAsyncThunk(
  "getCategory/categories",
  async () => {
    const { data } = await axiosApiURL.get("Category/get-categories");
    return data.data;
  }
);
