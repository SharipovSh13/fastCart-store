import { createSlice } from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProducts: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    addWishlistProduct(state, action) {
      state.wishlistProducts.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProducts));
    },
    removeWishlistProduct(state, action) {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProducts));
    },
    clearWishlist(state) {
      (state.wishlistProducts = []), localStorage.removeItem("wishlist");
    },
  },
});
export const { addWishlistProduct, removeWishlistProduct, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
