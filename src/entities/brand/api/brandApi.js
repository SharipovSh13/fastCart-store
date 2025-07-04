import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "@/shared/lib/api";
export const getBrands = createAsyncThunk("getBrands/brands", async () => {
  const { data } = await axiosApiURL.get(`/Brand/get-brands`);
  return data.data;
});
