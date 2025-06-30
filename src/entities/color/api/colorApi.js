import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "../../../shared/lib/api";

export const getColor = createAsyncThunk("getColor/data", async () => {
  const { data } = await axiosApiURL.get("/Color/get-colors");
  return data.data;
});
