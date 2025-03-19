import { Href } from "expo-router";
import { Dimensions } from "react-native";

export const FONTS = {
    spaceMono:'SpaceMono',
    firaCodeBold:'FiraCodeBold',
    firaCodeRegular:'FiraCodeRegular',
    firaCodeMedium:'FiraCodeMedium',
    firaCodeSemiBold:'FiraCodeSemiBold',
    firaCodeSemiLight:'FiraCodeSemiLight',
    TNRBoldItalics:"TNRBoldItalics",
    TNRItalics:"TNRItalics",
    TNR:'TNR',
    TNRBold:'TNRBold',
    poppinsRegular:"poppinsRegular",
    poppinsBold:"poppinsBold",
    poppinsSemibold:"poppinsSemibold",
    poppinsMedium:"poppinsMedium"
}


export type AnimationListItemType =  {
    id: number;
    title: string;
    thumbnail_url: string;
    topics: String[];
    path: Href;
}

export const LuxuryColors = {
    liteGray:"#adb5bd",
    brandColor:"#fb9a65",
    gray:"#8d8b8c",
    pink:"#ffe0e5"
}


export const _animationLists : AnimationListItemType[] = [
  {
    id: 1,
    title: "Luxury E-Commerce App",
    thumbnail_url:require('@/assets/images/eCommerce.png'),
    path:"/luxuryECommerce",
    topics: [
      "reanimated",
      "interpolate",
      "useAnimatedScrollHandler",
      'linear gradient',
      "react native carousel",
    ],
  },
    {
      id: 2,
      title: "Tilted Animated Image Carousel With React Native Reanimated",
      thumbnail_url:require('@/assets/images/animatedTiltedCarousel.png'),
      path:"/animatedTiltedCarousel",
      topics: [
        "reanimated",
        "interpolate",
        "useAnimatedScrollHandler",
        'linear gradient',
        "react native carousel",
      ],
    },
    {
      id: 3,
      title: "Tilted Scaled Image Carousel With React Native Reanimated",
      thumbnail_url:require('@/assets/images/animatedScaledCarousel.png'),
      path:"/animatedScaledCarousel",
      topics: [
        "reanimated",
        "interpolate",
        "useAnimatedScrollHandler",
        "react native carousel",
      ],
    },
  ];



export const  _windowWidth = Dimensions.get('window').width;
export  const _windowHeight = Dimensions.get('window').height


export const _horizontalPadding = _windowWidth * 0.03
// Define a base font size based on the screen width or height
const baseFontSize = _windowWidth * 0.04; // 4% of the screen width

// Define a list of font sizes
export const FontSizes = {
  xTiny: baseFontSize * 0.65,       // 75% of the base font size
  tiny: baseFontSize * 0.75,       // 75% of the base font size
  small: baseFontSize * 0.875,     // 87.5% of the base font size
  medium: baseFontSize,            // Base font size
  large: baseFontSize * 1.25,      // 125% of the base font size
  xLarge: baseFontSize * 1.5,      // 150% of the base font size
  xxLarge: baseFontSize * 2,       // 200% of the base font size
  xxxLarge: baseFontSize * 2.5,    // 250% of the base font size
};


export type WallpaperType =  {
  id: number;
image_url:string
}


export const _wallpapers : WallpaperType[] = [
{id:1, image_url:'https://images.pexels.com/photos/14067410/pexels-photo-14067410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},  
{id:2, image_url:'https://images.unsplash.com/photo-1737020622517-17a9dae61a11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'},  
{id:3, image_url:'https://images.pexels.com/photos/28480552/pexels-photo-28480552/free-photo-of-majestic-ferry-under-bridge-on-foggy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},  
{id:4, image_url:'https://images.pexels.com/photos/12279526/pexels-photo-12279526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},  
{id:5, image_url:'https://images.pexels.com/photos/17764202/pexels-photo-17764202/free-photo-of-deck-of-a-sailing-ferry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},  
{id:6, image_url:'https://images.unsplash.com/photo-1736953072378-b9f25f2635d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'},  
]



export const _movieInfo = [
  {
    id: 1,
    imageUrl:
      "https://rollingstoneindia.com/wp-content/uploads/2024/09/Squid-Game-Season-2-Poster-Netflix-960x1200.jpg",
    name: "Squid Game",
    genres: ["Adventure", "Survival"],
  },
  {
    id: 2,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjcyYjNlYWYtYjlmOS00OTE2LTk1OTktODIxMmI4ZmEyNTliXkEyXkFqcGc@._V1_.jpg",
    name: "No Way Out",
    genres: ["Adventure", "Survival"],
  },
  {
    id: 3,
    imageUrl:
      "https://uhdmovies.bet/wp-content/uploads/Download-The-Return-768x1152.jpg",
    name: "The Return",
    genres: ["Adventure", "Survival"],
  },
  {
    id: 4,
    imageUrl: "https://uhdmovies.bet/wp-content/uploads/trp0-768x1152.webp",
    name: "Punishment",
    genres: ["Adventure", "Survival"],
  },
  {
    id: 5,
    imageUrl:
      "https://uhdmovies.bet/wp-content/uploads/Download-Scrambled-768x1152.jpg",
    name: "Scrambled",
    genres: ["Adventure", "Survival"],
  },
  {
    id: 6,
    imageUrl:
      "https://uhdmovies.bet/wp-content/uploads/Download-The-Day-of-the-Jackal-768x1152.jpeg",
    name: "Jackal",
    genres: ["Adventure", "Survival"],
  },
  {
    id: 7,
    imageUrl:
      "https://uhdmovies.bet/wp-content/uploads/Download-The-Return-768x1152.jpg",
    name: "Return",
    genres: ["Adventure", "Survival"],
  },
  {
      id: 8,
      imageUrl: "https://uhdmovies.bet/wp-content/uploads/trp0-768x1152.webp",
      name: "Punishment",
      genres: ["Adventure", "Survival"],
    },
];


export const _productList = [
 
  {
    "id": 1,
    "name": "Floral Print Straight Kurta Set with Dupatta",
    "price": "6,160",
    "original_price": "15,400",
    "discount": "60%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230320/yFw7/641877e4aeb26924e3cf2539/-473Wx593H-410332823-beige-MODEL4.jpg",
    "is_hot": true
  },
  {
    "id": 2,
    "name": "Women Embroidered Kurta with Sharara & Dupatta",
    "price": "5,849",
    "original_price": "8,998",
    "discount": "35%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20240904/UrAF/66d849921d763220fac13d5f/-1117Wx1400H-442415577-wine-MODEL3.jpg",
    "is_hot": true
  },
  {
    "id": 3,
    "name": "Embroidered Straight Kurta Suit Set",
    "price": "14,412",
    "original_price": "16,955",
    "discount": "15%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20231102/XU47/6543bbecddf77915196a5864/-1117Wx1400H-410332943-teal-MODEL5.jpg",
    "is_hot": true
  },
  {
    "id": 4,
    "name": "Women Floral Angrakha Kurta Pants Set with Dupatta",
    "price": "3,599",
    "original_price": "8,998",
    "discount": "60%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20240423/CE0J/66270e1116fd2c6e6ac69a3a/-1117Wx1400H-467270382-maroon-MODEL2.jpg",
    "is_hot": true
  },
  {
    "id": 5,
    "name": "Printed A-Line Kurta Set with Dupatta",
    "price": "7,750",
    "original_price": "15,500",
    "discount": "50%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230321/U6TP/6418cd32aeb26924e3d362ab/-1117Wx1400H-410332869-blue-MODEL3.jpg",
    "is_hot": true
  },
  {
    "id": 6,
    "name": "Niti Buthra",
    "price": "15,000",
    "original_price": "17,990",
    "discount": "10%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220907/yCS5/6317b6bff997dd1f8de8b238/-1117Wx1400H-464947428-pink-MODEL.jpg",
    "is_hot": true
  },
  {
    "id":7,
    "name": "Mati",
    "price": "7,425",
    "original_price": "7,500",
    "discount": "1%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20240709/4vNG/668d68c86f60443f31c12a1a/-1117Wx1400H-700180941-multi-MODEL.jpg",
    "is_hot": true
  },
  {
    "id": 8,
    "name": "Zimmermann",
    "price": "33,500",
    "original_price": "66,999",
    "discount": "50%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20240719/xhzK/669a91c46f60443f3193a3de/-1117Wx1400H-469618676-sage-MODEL.jpg",
    "is_hot": true
  },
  {
    "id": 9,
    "name": "SHEESHAKARI",
    "price": "14,412",
    "original_price": "16,955",
    "discount": "15%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20240212/CAgd/65ca1ce705ac7d77bb5063e8/-1117Wx1400H-467065226-blue-MODEL.jpg",
    "is_hot": true
  },
  {
    "id": 10,
    "name": "Printed A-Line Kurta Set with Dupatta",
    "price": "14,412",
    "original_price": "16,955",
    "discount": "15%",
    "image": "https://assets.ajio.com/medias/sys_master/root/20231102/tmCU/6543ba2bddf77915196a3e17/-1117Wx1400H-410333078-blue-MODEL.jpg",
    "is_hot": true
  },
]

export const _fakeUsers = [
  'https://images.unsplash.com/photo-1742038107091-9a7e1f01b42c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
  "https://images.unsplash.com/profile-1727095123599-eb42ef3309e2image?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/profile-1702429423728-4fac88586f24image?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/profile-1737711845044-70ae5a0ca17f?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/profile-1495427732560-fe5248ad6638?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1741902728626-e00aec0bf055?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1740979142180-c7aba7a038f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
]