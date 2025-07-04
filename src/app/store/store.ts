import categoryReducer from "@/entities/category/reducer/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../../entities/registration/reducer/authSlice";
import productsReducer from "../../entities/products/reducer/productsSlice";
import cartReducer from "../../entities/cart/cartReducer/cartSlice";
import bransdReducer from "../../entities/brand/reducer/brandSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authSlice,
    products: productsReducer,
    cart: cartReducer,
    brands: bransdReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
