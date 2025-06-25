import { createSlice } from "@reduxjs/toolkit";
import { registration, login } from "../api/registrApi";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    error: null,
    succsess: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.succsess = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.succsess = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default authSlice.reducer;
