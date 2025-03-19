import { CartState, ProductType } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductType>) => {

        const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.cartItemCount += 1;
      } else {
        state.cartItems.push({ ...product, cartItemCount: 1 });
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
} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;