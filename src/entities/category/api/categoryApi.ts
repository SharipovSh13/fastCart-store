import { axiosApiURL } from "@/shared/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk("getCategory/data", async () => {
    const { data } = await axiosApiURL.get("Category/get-categories")
    return data.data
})