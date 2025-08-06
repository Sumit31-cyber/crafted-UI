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
