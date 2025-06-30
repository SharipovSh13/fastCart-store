import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "../../../shared/lib/api";
import { toast } from "react-hot-toast";

export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const { data } = await axiosApiURL.get("/Cart/get-products-from-cart");

    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId, { dispatch }) => {
    try {
      const { data } = await axiosApiURL.post(
        "/Cart/add-product-to-cart?id=" + productId
      );
      dispatch(getCart());

      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const deleteProductCart = createAsyncThunk(
  "cart/deleteProductCart",
  async (cartElement, { dispatch }) => {
    try {
      await axiosApiURL.delete(
        `/Cart/delete-product-from-cart?id=${cartElement}`
      );
      dispatch(getCart());
      toast.success("Успешно!");
    } catch (error) {
      console.error(error);
    }
  }
);
export const increaseProductCart = createAsyncThunk(
  "cart/increaseProductCart",
  async (productId, { dispatch }) => {
    try {
      await axiosApiURL.put(`/Cart/increase-product-in-cart?id=${productId}`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
      toast.error("Продукт закончился в складах");
    }
  }
);
export const reduceProductCart = createAsyncThunk(
  "cart/reduceProductCart",
  async (productId, { dispatch }) => {
    try {
      await axiosApiURL.put(`/Cart/reduce-product-in-cart?id=${productId}`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
      toast.error("Не хотите купит Продукт");
    }
  }
);
export const deleteAllProductCart = createAsyncThunk(
  "cart/deleteAllProductCart",
  async (_, { dispatch }) => {
    try {
      await axiosApiURL.delete("/Cart/clear-cart");
      dispatch(getCart());
    } catch (error) {
      console.error(error);
      toast.error("Не получилось");
    }
  }
);
