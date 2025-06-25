import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "../../../shared/lib/api";
import { addToken } from "../../../shared/lib/utils/token";

export const registration = createAsyncThunk(
  "auth/registration",
  async (newUser) => {
    try {
      const { data } = await axiosApiURL.post(`/Account/register`, newUser);

      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const { data } = await axiosApiURL.post(`/Account/login`, user);
    addToken(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
