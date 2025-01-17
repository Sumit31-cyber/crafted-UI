import { Href } from "expo-router";
import { Dimensions } from "react-native";

export const FONTS = {
    spaceMono:'SpaceMono',
    firaCodeBold:'FiraCodeBold',
    firaCodeRegular:'FiraCodeRegular',
    firaCodeMedium:'FiraCodeMedium',
    firaCodeSemiBold:'FiraCodeSemiBold',
    firaCodeSemiLight:'FiraCodeSemiLight',
    
}


export type AnimationListItemType =  {
    id: number;
    title: string;
    thumbnail_url: string;
    topics: String[];
    path: Href;
}


export const _animationLists : AnimationListItemType[] = [
    {
      id: 1,
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
      id: 2,
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
export  const _windowHeight = Dimensions.get('window').height;


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
