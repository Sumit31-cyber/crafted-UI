import { FavoriteState, ProductType } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteState = {
  favoriteItems: [],
  filterType : 'ALL'
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
    filterFavoriteItems : (state,action) => {
      const {filterType} = action.payload
      state.filterType = filterType
     
    },
    clearFavoriteItemList : (state, action) => {
      state.favoriteItems = []
    }
  },
});

export const { addItemToFavorite, removeItemFromFavorite,clearFavoriteItemList,filterFavoriteItems } = favoriteItemSlice.actions;
export default favoriteItemSlice.reducer;