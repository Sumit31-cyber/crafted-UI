import { FavoriteState, ProductType } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  favoriteItems: [],
};

const favoriteItemSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemToFavorite: (state, action: PayloadAction<ProductType>) => {
      state.favoriteItems.push(action.payload);
    },
    removeItemFromFavorite: (state, action: PayloadAction<{ id: string | number }>) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItemToFavorite, removeItemFromFavorite } = favoriteItemSlice.actions;
export default favoriteItemSlice.reducer;