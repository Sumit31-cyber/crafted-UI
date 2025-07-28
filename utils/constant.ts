import { Href } from "expo-router";
import { Dimensions, ImageProps, StyleSheet } from "react-native";

export const FONTS = {
  spaceMono: "SpaceMono",
  firaCodeBold: "FiraCodeBold",
  firaCodeRegular: "FiraCodeRegular",
  firaCodeMedium: "FiraCodeMedium",
  firaCodeSemiBold: "FiraCodeSemiBold",
  firaCodeSemiLight: "FiraCodeSemiLight",
  TNRBoldItalics: "TNRBoldItalics",
  TNRItalics: "TNRItalics",
  TNR: "TNR",
  TNRBold: "TNRBold",
  poppinsRegular: "poppinsRegular",
  poppinsBold: "poppinsBold",
  poppinsSemibold: "poppinsSemibold",
  poppinsMedium: "poppinsMedium",
};

export type AnimationListItemType = {
  id: number;
  title: string;
  thumbnail_url: ImageProps["source"];
  topics: String[];
  path: Href;
  githubLink: string;
};

export const LuxuryColors = {
  liteGray: "#adb5bd",
  brandColor: "#fb9a65",
  gray: "#8d8b8c",
  pink: "#ffe0e5",
  liteBlack: "#28231f",
  coffee: "#efeae7",
  skin: "#f9efea",
};

export const _animationLists: AnimationListItemType[] = [
  {
    id: 6,
    title: "Onboarding Spotlight",
    githubLink:
      "https://github.com/Sumit31-cyber/crafted-UI/tree/main/app/themeToggleSwitch",
    thumbnail_url: require("@/assets/images/onboarding-spotlight.png"),
    path: "/(onboardingSpotlight)",
    topics: [
      "perspective",
      "transformation",
      "reanimated",
      "interpolate",
      "useAnimatedScrollHandler",
      "react native carousel",
    ],
  },
  {
    id: 5,
    title: "Circular Carousel",
    githubLink:
      "https://github.com/Sumit31-cyber/crafted-UI/tree/main/app/themeToggleSwitch",
    thumbnail_url: require("@/assets/images/spotifyAnimation.png"),
    path: "/(circularCarousel)",
    topics: [
      "reanimated",
      "interpolate",
      "useAnimatedScrollHandler",
      "react native carousel",
    ],
  },
  {
    id: 1,
    title: "Luxury E-Commerce App",
    thumbnail_url: require("@/assets/images/eCommerce.png"),
    path: "/luxuryECommerce/(auth)/landingScreen",
    githubLink:
      "https://github.com/Sumit31-cyber/crafted-UI/tree/main/app/luxuryECommerce",
    topics: [
      "reanimated",
      "interpolate",
      "useAnimatedScrollHandler",
      "linear gradient",
      "react native carousel",
    ],
  },
  {
    id: 2,
    title: "Tilted Animated Image Carousel With React Native Reanimated",
    thumbnail_url: require("@/assets/images/animatedTiltedCarousel.png"),
    githubLink:
      "https://github.com/Sumit31-cyber/crafted-UI/tree/main/app/animatedTiltedCarousel",
    path: "/animatedTiltedCarousel",
    topics: [
      "reanimated",
      "interpolate",
      "useAnimatedScrollHandler",
      "linear gradient",
      "react native carousel",
    ],
  },
  {
    id: 3,
    title: "Tilted Scaled Image Carousel With React Native Reanimated",
    thumbnail_url: require("@/assets/images/animatedScaledCarousel.png"),
    githubLink:
      "https://github.com/Sumit31-cyber/crafted-UI/tree/main/app/animatedScaledCarousel",
    path: "/animatedScaledCarousel",
    topics: [
      "reanimated",
      "interpolate",
      "useAnimatedScrollHandler",
      "react native carousel",
    ],
  },
  {
    id: 4,
    title: "Theme Toggle Switch With React Native Reanimated",
    githubLink:
      "https://github.com/Sumit31-cyber/crafted-UI/tree/main/app/themeToggleSwitch",
    thumbnail_url: require("@/assets/images/themeToggleSwitch.png"),
    path: "/themeToggleSwitch",
    topics: ["react-native-skia", "skia-canvas", "reanimated", "interpolate"],
  },
];

export const _windowWidth = Dimensions.get("window").width;
export const _windowHeight = Dimensions.get("window").height;

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("screen");

export const _horizontalPadding = _windowWidth * 0.03;
export const _headerHeight = _windowWidth * 0.12;
// Define a base font size based on the screen width or height
const baseFontSize = _windowWidth * 0.04; // 4% of the screen width

export const _borderWidth = StyleSheet.hairlineWidth * 2;
export const _searchBarHeight = _windowWidth * 0.11;

// Define a list of font sizes
export const FontSizes = {
  xTiny: baseFontSize * 0.65, // 75% of the base font size
  tiny: baseFontSize * 0.75, // 75% of the base font size
  small: baseFontSize * 0.875, // 87.5% of the base font size
  medium: baseFontSize, // Base font size
  large: baseFontSize * 1.25, // 125% of the base font size
  xLarge: baseFontSize * 1.5, // 150% of the base font size
  xxLarge: baseFontSize * 2, // 200% of the base font size
  xxxLarge: baseFontSize * 2.5, // 250% of the base font size
};

export type WallpaperType = {
  id: number;
  image_url: string;
};

export const _wallpapers: WallpaperType[] = [
  {
    id: 1,
    image_url:
      "https://images.pexels.com/photos/14067410/pexels-photo-14067410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    image_url:
      "https://images.unsplash.com/photo-1737020622517-17a9dae61a11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image_url:
      "https://images.pexels.com/photos/28480552/pexels-photo-28480552/free-photo-of-majestic-ferry-under-bridge-on-foggy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    image_url:
      "https://images.pexels.com/photos/12279526/pexels-photo-12279526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    image_url:
      "https://images.pexels.com/photos/17764202/pexels-photo-17764202/free-photo-of-deck-of-a-sailing-ferry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    image_url:
      "https://images.unsplash.com/photo-1736953072378-b9f25f2635d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
];

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

export const productList = [
  {
    id: 0,
    name: "SHORT POPLIN LACE DRESS",
    price: 4350,
    originalPrice: 6758,
    description:
      "Short dress with a square neckline. Short puff sleeves. In-seam side pockets. Featuring a pleated and lace detail in the same fabric. Matching lining. Concealed side zip fastening",
    images: [
      "https://static.zara.net/assets/public/187b/967c/f57d458d9bf4/b39f2b4200f4/05107304800-p/05107304800-p.jpg?ts=1742402089268&w=2048",
      "https://static.zara.net/assets/public/9ca2/1480/3a284846a8b1/93926425a1e9/05107304800-a1/05107304800-a1.jpg?ts=1742402089185&w=2048",
      "https://static.zara.net/assets/public/2dcf/3c9d/d2074101803c/93d53856d56b/05107304800-a2/05107304800-a2.jpg?ts=1742402089533&w=2048",
      "https://static.zara.net/assets/public/6419/a5a3/f43447d8b33d/c33b80872932/05107304800-a3/05107304800-a3.jpg?ts=1742402089054&w=2048",
      "https://static.zara.net/assets/public/257d/c0fa/a29e494c9987/56548074bdd0/05107304800-e1/05107304800-e1.jpg?ts=1742313738122&w=2048",
      "https://static.zara.net/assets/public/b051/54c9/287c4430bf15/6aae84958e92/05107304800-e3/05107304800-e3.jpg?ts=1742313737673&w=2048",
    ],
  },
  {
    id: 1,
    name: "EMBROIDERED FLORAL MINI DRESS",
    price: 3440,
    originalPrice: 3440,
    description:
      "V-neck, long sleeve dress. Featuring contrast embroidered flowers, a beaded cord belt with tassels and a lining. Front button fastening.",
    images: [
      "https://static.zara.net/assets/public/0e68/6aca/4bcc429892a4/452f007e2769/08741037712-p/08741037712-p.jpg?ts=1741195332494&w=2048",
      "https://static.zara.net/assets/public/8795/c5ed/fc384218a1fa/2993da2b8c11/08741037712-a1/08741037712-a1.jpg?ts=1741195332486&w=2048",
      "https://static.zara.net/assets/public/d781/751e/1bee455ba885/66c277d02d3b/08741037712-a2/08741037712-a2.jpg?ts=1741195332164&w=2048",
      "https://static.zara.net/assets/public/c72b/da5f/a70b482aa083/48b5cb150329/08741037712-a3/08741037712-a3.jpg?ts=1741195332559&w=2048",
      "https://static.zara.net/assets/public/e86e/2079/7fa04ab1a736/2d0e50a601b6/08741037712-e1/08741037712-e1.jpg?ts=1741191675609&w=2048",
    ],
  },
  {
    id: 2,
    name: "SHORT DRESS WITH RUBBERISED EMBROIDERY",
    price: 3550,
    originalPrice: 3550,
    description:
      "V-neck dress with elbow-length sleeves and elasticated cuffs. Featuring a matching fabric belt with a contrasting buckle and perforated rubberised embroidery. Button fastening at the front.",
    images: [
      "https://static.zara.net/assets/public/1788/f7e1/ff7c4565a297/55d32460f152/04387043403-p/04387043403-p.jpg?ts=1740418119706&w=2048",
      "https://static.zara.net/assets/public/c18b/1b6f/66f840c28dd7/974747a2250b/04387043403-a1/04387043403-a1.jpg?ts=1740418118857&w=2048",
      "https://static.zara.net/assets/public/2ef2/d078/a6c349ab9528/991ed3e34282/04387043403-a2/04387043403-a2.jpg?ts=1740418119798&w=2048",
      "https://static.zara.net/assets/public/40d2/3100/808d49c3acbc/f77ad7f4508e/04387043403-e1/04387043403-e1.jpg?ts=1738841169742&w=2048",
      "https://static.zara.net/assets/public/c12a/0650/537d4a729fda/877d0d6cc9fd/04387043403-e2/04387043403-e2.jpg?ts=1738841169039&w=2048",
    ],
  },
  {
    id: 3,
    name: "SHORT TIERED DRESS",
    price: 4350,
    originalPrice: 4999,
    description:
      "Dress with a lapel collar, v-neck and long sleeves with elasticated cuffs. Gathered detail. Lining. Front button fastening.",
    images: [
      "https://static.zara.net/assets/public/f512/4699/0a0e4bb19c9c/560b7f9f5162/03897058712-p/03897058712-p.jpg?ts=1741706964786&w=2048",
      "https://static.zara.net/assets/public/7acf/8b89/d5194a578039/d3f3926daa76/03897058712-a1/03897058712-a1.jpg?ts=1741706964491&w=2048",
      "https://static.zara.net/assets/public/0bce/0a92/13cb48c293c0/cf7345f819b1/03897058712-a2/03897058712-a2.jpg?ts=1741706964732&w=2048",
      "https://static.zara.net/assets/public/a4f6/6ed2/535c4afc99bd/73733135ede1/03897058712-a3/03897058712-a3.jpg?ts=1741706964470&w=2048",
      "https://static.zara.net/assets/public/be94/70ba/ce8a41839eaf/e3b43d5f881f/03897058712-e1/03897058712-e1.jpg?ts=1739965137045&w=2048",
      "https://static.zara.net/assets/public/9f26/0141/e7e44f2dba50/9ea9bbbe2ae6/03897058712-e2/03897058712-e2.jpg?ts=1739965143503&w=2048",
    ],
  },
  {
    id: 4,
    name: "PRINTED MINI DRESS WITH BELT",
    price: 4350,
    originalPrice: 5670,
    description:
      "V-neck long sleeve dress. Featuring front pintucks and lace inserts, an elasticated waist with a matching belt, metallic thread print, lined skirt and tonal covered button front fastening.",
    images: [
      "https://static.zara.net/assets/public/301d/606e/938243ab887f/22f521986819/02469117330-p/02469117330-p.jpg?ts=1739274177962&w=446",
      "https://static.zara.net/assets/public/b1e7/9ece/e9bf4ecb962d/038da20886f8/02469117330-a1/02469117330-a1.jpg?ts=1739274177228&w=446",
      "https://static.zara.net/assets/public/bd37/7c8b/bce6457d8de5/beb2ed9d5dd3/02469117330-e1/02469117330-e1.jpg?ts=1738841108523&w=446",
      "https://static.zara.net/assets/public/8e39/c650/375047718d41/34e1e365ea9c/02469117330-e2/02469117330-e2.jpg?ts=1738841111462&w=446",
    ],
  },
  {
    id: 5,
    name: "FLORAL POPLIN DRESS WITH BOWS",
    price: 3550,
    originalPrice: 3550,
    description:
      "Short dress with a straight neckline. Straps with bow detail. Matching lining. Concealed zip fastening at the back.",
    images: [
      "https://static.zara.net/assets/public/1504/6f98/ba324a0d96fa/70b0ea7b1895/04661396115-p/04661396115-p.jpg?ts=1741023771815&w=446",
      "https://static.zara.net/assets/public/e2b8/e8a4/be93444a9123/3676616f4b09/04661396115-a1/04661396115-a1.jpg?ts=1741023765826&w=446",
      "https://static.zara.net/assets/public/e5b5/be66/19a74e668ec0/4dfd645ce8bc/04661396115-a2/04661396115-a2.jpg?ts=1741023766062&w=446",
      "https://static.zara.net/assets/public/5fea/b6a7/112049ed84a0/ccce1d9df9b6/04661396115-a3/04661396115-a3.jpg?ts=1741023765993&w=446",
    ],
  },
  {
    id: 6,
    name: "LONG FLORAL TULLE DRESS",
    price: 3550,
    originalPrice: 4550,
    description:
      "Long v-neck dress with straps. Matching inner lining. Godet hem.",
    images: [
      "https://static.zara.net/assets/public/3117/b828/4a12447abbcf/a55bd5ae6e3d/05039126800-p/05039126800-p.jpg?ts=1741769833977&w=446",
      "https://static.zara.net/assets/public/334d/1aa8/3e354a8daa2c/7f4c9628ee32/05039126800-a1/05039126800-a1.jpg?ts=1741769832333&w=446",
      "https://static.zara.net/assets/public/3f12/96af/2c264481b966/ec792474f459/05039126800-a2/05039126800-a2.jpg?ts=1741769833377&w=446",
      "https://static.zara.net/assets/public/472e/ed7f/304d42c38fd2/80735f67449b/05039126800-a3/05039126800-a3.jpg?ts=1741769833376&w=446",
    ],
  },
  {
    id: 7,
    name: "SHORT TULLE DRESS WITH PRINT",
    price: 2950,
    originalPrice: 3450,
    description:
      "Short dress with a cowl neck and adjustable halter straps. Lining. Asymmetric ruffled hem.",
    images: [
      "https://static.zara.net/assets/public/8012/6694/a60a486081d7/e9fd0a8e856b/05039122400-p/05039122400-p.jpg?ts=1741769828483&w=446",
      "https://static.zara.net/assets/public/afc9/2739/13e94a248e66/cbc50cf449ea/05039122400-a1/05039122400-a1.jpg?ts=1741769828546&w=446",
      "https://static.zara.net/assets/public/2f16/20bb/7a984984bc78/8f67e5706b3b/05039122400-a2/05039122400-a2.jpg?ts=1741769828230&w=446",
      "https://static.zara.net/assets/public/8bf0/78f5/862b496d9c9c/838dc884eb02/05039122400-a3/05039122400-a3.jpg?ts=1741769828929&w=446",
    ],
  },
  {
    id: 8,
    name: "ZW COLLECTION PRINTED MIDI DRESS",
    price: 4950,
    originalPrice: 4950,
    description:
      "Midi dress with a lapel collar and sleeves falling below the elbow. Self-tie belt in the same fabric. Front button fastening.",
    images: [
      "https://static.zara.net/assets/public/0199/b344/703e4c6f9ea8/ee54b254b429/02183005500-p/02183005500-p.jpg?ts=1741256810522&w=446",
      "https://static.zara.net/assets/public/4ec2/5bd3/324c4420b235/bf2598555c93/02183005500-a1/02183005500-a1.jpg?ts=1741256810646&w=446",
      "https://static.zara.net/assets/public/7268/0041/e0f94fa791a7/4631e5ca4c71/02183005500-a2/02183005500-a2.jpg?ts=1741256810699&w=446",
      "https://static.zara.net/assets/public/dce8/fcb9/1bf540069b1a/c759d41e7f29/02183005500-a3/02183005500-a3.jpg?ts=1741256810458&w=446",
    ],
  },
  {
    id: 9,
    name: "TOPSTITCHED MIDI DRESS",
    price: 4350,
    originalPrice: 4350,
    description:
      "Round neck dress with wide straps. Featuring contrast topstitching and a flared hem. Concealed side zip fastening.",
    images: [
      "https://static.zara.net/assets/public/e6cc/6b36/e9f14a2f92d8/54ad7befe37e/00779075712-p/00779075712-p.jpg?ts=1742397099693&w=446",
      "https://static.zara.net/assets/public/35eb/b59b/43ca47e5bbb4/8003f054b073/00779075712-a1/00779075712-a1.jpg?ts=1742397100361&w=446",
      "https://static.zara.net/assets/public/6ff8/9a79/cd8849b8b09c/4f737d60abea/00779075712-a2/00779075712-a2.jpg?ts=1742397100198&w=446",
      "https://static.zara.net/assets/public/9e59/f474/9fb14f96a43d/b667c7639d05/00779075712-000-a3/00779075712-000-a3.jpg?ts=1742460936554&w=446",
    ],
  },
  {
    id: 10,
    name: "ZW COLLECTION MIDI DRESS WITH PADDED SHOULDERS",
    price: 7500,
    originalPrice: 8900,
    description:
      "Midi dress made of viscose blend yarn. V-neck and sleeveless with shoulder pads. Featuring a draped front. Concealed zip fastening at the back.",
    images: [
      "https://static.zara.net/assets/public/0a23/0cea/e9084fe292c7/d16674a59a2b/02371402800-p/02371402800-p.jpg?ts=1742229834370&w=446",
      "https://static.zara.net/assets/public/4167/2190/fdca482bb9d7/9ea82804bbea/02371402800-a1/02371402800-a1.jpg?ts=1742229833803&w=446",
      "https://static.zara.net/assets/public/75cf/931c/05194549babc/8d819a2251a4/02371402800-a2/02371402800-a2.jpg?ts=1742229833410&w=446",
      "https://static.zara.net/assets/public/1dbe/2f64/d8114788b5dc/d664720ddff9/02371402800-a3/02371402800-a3.jpg?ts=1742229833452&w=446",
    ],
  },
  {
    id: 11,
    name: "MINI DRESS WITH POCKETS",
    price: 4950,
    originalPrice: 5400,
    description:
      "Lapel collar, V-neck dress with a drawstring. Long sleeves, front flaps and patch pockets. Gathered waist. Concealed side zip fastening.",
    images: [
      "https://static.zara.net/assets/public/a7ea/6745/dca746ba89a8/e6eba3d8de91/05029074710-p/05029074710-p.jpg?ts=1741354017205&w=446",
      "https://static.zara.net/assets/public/6ab5/04f0/ca3e428d8b4e/0ba521579db8/05029074710-a1/05029074710-a1.jpg?ts=1741354016439&w=446",
      "https://static.zara.net/assets/public/e6e1/b2b5/e7f44ad49a95/9454fc165fe3/05029074710-e1/05029074710-e1.jpg?ts=1741344570162&w=446",
      "https://static.zara.net/assets/public/f3f7/647e/fcfd47198b3e/a93c1c97ebde/05029074710-e2/05029074710-e2.jpg?ts=1741344569763&w=446",
    ],
  },
  {
    id: 12,
    name: "SHORT CUT-OUT DRESS WITH BUCKLE",
    price: 4950,
    originalPrice: 6700,
    description:
      "Sleeveless lapel neck dress with shoulder pads. Featuring a side opening at the waist with a metal buckle and an invisible side zip fastening.",
    images: [
      "https://static.zara.net/assets/public/b685/8c20/05ab43a4b1b1/a186d172e55a/02800536712-p/02800536712-p.jpg?ts=1741804305491&w=446",
      "https://static.zara.net/assets/public/9efa/bc20/304a4b729a16/3ae5ed6b676f/02800536712-a1/02800536712-a1.jpg?ts=1741804305609&w=446",
      "https://static.zara.net/assets/public/4e87/a295/e32f4dbe9dcd/9caa78b1b048/02800536712-a2/02800536712-a2.jpg?ts=1741804305500&w=446",
      "https://static.zara.net/assets/public/9444/98f3/92444e7db921/e9bb93de80e3/02800536712-a3/02800536712-a3.jpg?ts=1741804306388&w=446",
    ],
  },
  {
    id: 13,
    name: "FLORAL PATCHWORK DRESS ZW COLLECTION",
    price: 10950,
    originalPrice: 12300,
    description:
      "Midi dress with a round neckline and thin straps. Floral patchwork detail. Lined.",
    images: [
      "https://static.zara.net/assets/public/ea53/cd9c/bc7d4c3eafa6/094d91ab2717/02826127710-1-p/02826127710-1-p.jpg?ts=1742378807642&w=446",
      "https://static.zara.net/assets/public/a777/0e66/37e946b1a47e/129540c03310/02826127710-1-a1/02826127710-1-a1.jpg?ts=1742378808080&w=446",
      "https://static.zara.net/assets/public/b119/be3a/143a40f7a45b/b51c86271583/02826127710-1-a2/02826127710-1-a2.jpg?ts=1742310532948&w=446",
      "https://static.zara.net/assets/public/945a/2445/aa1d4b96b3a8/77a773f30561/02826127710-1-a3/02826127710-1-a3.jpg?ts=1742310533655&w=446",
    ],
  },
];

// export const _productList = [

//   {
//     "id": 1,
//     "name": "Floral Print Straight Kurta Set with Dupatta",
//     "price": 6160,
//     "original_price": 15400,
//     "discount": "60%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20230320/yFw7/641877e4aeb26924e3cf2539/-473Wx593H-410332823-beige-MODEL4.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 2,
//     "name": "Women Embroidered Kurta with Sharara & Dupatta",
//     "price": 5849,
//     "original_price": 8998,
//     "discount": "35%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20240904/UrAF/66d849921d763220fac13d5f/-1117Wx1400H-442415577-wine-MODEL3.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 3,
//     "name": "Embroidered Straight Kurta Suit Set",
//     "price": 14412,
//     "original_price": 16955,
//     "discount": "15%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20231102/XU47/6543bbecddf77915196a5864/-1117Wx1400H-410332943-teal-MODEL5.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 4,
//     "name": "Women Floral Angrakha Kurta Pants Set with Dupatta",
//     "price": 3599,
//     "original_price": 8998,
//     "discount": "60%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20240423/CE0J/66270e1116fd2c6e6ac69a3a/-1117Wx1400H-467270382-maroon-MODEL2.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 5,
//     "name": "Printed A-Line Kurta Set with Dupatta",
//     "price": 7750,
//     "original_price": 15500,
//     "discount": "50%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20230321/U6TP/6418cd32aeb26924e3d362ab/-1117Wx1400H-410332869-blue-MODEL3.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 6,
//     "name": "Niti Buthra",
//     "price": 15000,
//     "original_price": 17990,
//     "discount": "10%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20220907/yCS5/6317b6bff997dd1f8de8b238/-1117Wx1400H-464947428-pink-MODEL.jpg",
//     "is_hot": true
//   },
//   {
//     "id":7,
//     "name": "Mati",
//     "price": 7425,
//     "original_price": 7500,
//     "discount": "1%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20240709/4vNG/668d68c86f60443f31c12a1a/-1117Wx1400H-700180941-multi-MODEL.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 8,
//     "name": "Zimmermann",
//     "price": 33500,
//     "original_price": 66999,
//     "discount": "50%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20240719/xhzK/669a91c46f60443f3193a3de/-1117Wx1400H-469618676-sage-MODEL.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 9,
//     "name": "SHEESHAKARI",
//     "price": 14412,
//     "original_price": 16955,
//     "discount": "15%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20240212/CAgd/65ca1ce705ac7d77bb5063e8/-1117Wx1400H-467065226-blue-MODEL.jpg",
//     "is_hot": true
//   },
//   {
//     "id": 10,
//     "name": "Printed A-Line Kurta Set with Dupatta",
//     "price": 14412,
//     "original_price": 16955,
//     "discount": "15%",
//     "image": "https://assets.ajio.com/medias/sys_master/root/20231102/tmCU/6543ba2bddf77915196a3e17/-1117Wx1400H-410333078-blue-MODEL.jpg",
//     "is_hot": true
//   },
// ]

export const _fakeUsers = [
  "https://images.unsplash.com/photo-1742038107091-9a7e1f01b42c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/profile-1727095123599-eb42ef3309e2image?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/profile-1702429423728-4fac88586f24image?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/profile-1737711845044-70ae5a0ca17f?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/profile-1495427732560-fe5248ad6638?w=40&dpr=2&crop=faces&bg=%23fff&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1741902728626-e00aec0bf055?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1740979142180-c7aba7a038f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
];
