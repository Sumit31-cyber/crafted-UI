import { CartState, CartType, ProductType } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  cartItems: [],
  selectedItem : null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectedItem : (state, action) => {
      state.selectedItem = action.payload
    },
    addItemToCart: (state, action: PayloadAction<CartType>) => {

        const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.cartItemCount += product.cartItemCount;
      } else {
        state.cartItems.push({ ...product, cartItemCount: product.cartItemCount });
      }
    },

    removeItemFromCart: (state, action: PayloadAction<{ id: string | number }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    incrementCartItem: (state, action: PayloadAction<{ id: string | number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.cartItemCount += 1;
      }
    },

    decrementCartItem: (state, action: PayloadAction<{ id: string | number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.cartItemCount > 1) {
          item.cartItemCount -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
        }
      }
    },
  },
});


export const {
  addItemToCart,
  removeItemFromCart,
  incrementCartItem,
  decrementCartItem,
  setSelectedItem
} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;