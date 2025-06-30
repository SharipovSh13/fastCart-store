import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "../../../shared/lib/api";
import { addToken } from "../../../shared/lib/utils/token";

export const registration = createAsyncThunk(
  "auth/registration",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiURL.post(`/Account/register`, newUser);
      return data.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response?.data || { message: "Ошибка сети" }
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiURL.post(`/Account/login`, user);
      addToken(data.data);
      return data.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response?.data || { message: "Ошибка сети" }
      );
    }
  }
);
