import { ImageResolvedAssetSource } from "react-native";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  images: string[];
};

export type CartType = ProductType & {
  cartItemCount: number; // Additional property for cart items
};

export type FavoriteState = {
  favoriteItems: ProductType[];
  filterType: string;
};

export type CartState = {
  cartItems: CartType[];
  selectedItem: ProductType | null;
};

//Delete Animation
export interface MemoirItem {
  id: number;
  title: string;
  imageCount: number;
  thumbnail: ImageResolvedAssetSource;
}

export interface MemoirViewOffset {
  pageX: number;
  pageY: number;
  height: number;
  width: number;
}

export interface TransitionMemoirCardProps {
  item: MemoirViewOffset;
  index: number;
  totalCards: number;
}
export interface LayoutType {
  x: number;
  y: number;
}

export interface MemoirWithOffset extends MemoirItem, MemoirViewOffset {}
