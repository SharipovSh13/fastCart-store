import categoryReducer from "@/entities/category/reducer/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../../entities/registration/reducer/authSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
