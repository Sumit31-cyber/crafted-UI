export type ProductType =  {
    id : number
    name:string,
    price : number,
    originalPrice:number,
    description:string,
    images:string[],
}

export type CartType = ProductType & {
    cartItemCount: number; // Additional property for cart items
  };


export type FavoriteState = {
    favoriteItems: ProductType[];
    filterType : string

  };

export type CartState = {
    cartItems: CartType[];
    selectedItem : ProductType | null
  };

    // "name":,
    // "price": 15000,
    // "original_price": 17990,
    // "discount": "10%",
    // "image": "https://assets.ajio.com/medias/sys_master/root/20220907/yCS5/6317b6bff997dd1f8de8b238/-1117Wx1400H-464947428-pink-MODEL.jpg",
    // "is_hot": true
// }