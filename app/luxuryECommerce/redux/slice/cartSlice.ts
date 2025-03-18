import { CartState, ProductType } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // Corrected the slice name to "cart"
  initialState,
  reducers: {
    // Add an item to the cart
    addItemToCart: (state, action: PayloadAction<ProductType>) => {

        const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // If the item already exists in the cart, increment its count
        existingItem.cartItemCount += 1;
      } else {
        // If the item is not in the cart, add it with a count of 1
        state.cartItems.push({ ...product, cartItemCount: 1 });
      }
    },

    // Remove an item from the cart
    removeItemFromCart: (state, action: PayloadAction<{ id: string | number }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // Optional: Increment the quantity of an item in the cart
    incrementCartItem: (state, action: PayloadAction<{ id: string | number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.cartItemCount += 1;
      }
    },

    // Optional: Decrement the quantity of an item in the cart
    decrementCartItem: (state, action: PayloadAction<{ id: string | number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.cartItemCount > 1) {
          item.cartItemCount -= 1; // Decrement the count if it's greater than 1
        } else {
          // Remove the item if the count is 1
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
        }
      }
    },
  },
});

// Export the actions
export const {
  addItemToCart,
  removeItemFromCart,
  incrementCartItem,
  decrementCartItem,
} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;