import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteItemReducer from "@/redux/LuxuryECommerceRedux/slice/favoriteItemSlice";
import cartReducer from "@/redux/LuxuryECommerceRedux/slice/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

// Combine reducers
const rootReducer = combineReducers({
  favorite: favoriteItemReducer, 
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favorite", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});


const persistor = persistStore(store);

export { store, persistor };