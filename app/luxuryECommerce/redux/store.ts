import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteItemReducer from "@/app/luxuryECommerce/redux/slice/favoriteItemSlice";
import cartReducer from "@/app/luxuryECommerce/redux/slice/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

// Combine reducers
const rootReducer = combineReducers({
  favorite: favoriteItemReducer, // Add other reducers here
  cart: cartReducer, // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;


// Persist config
const persistConfig = {
  key: "root", // Key for the persisted state
  storage: AsyncStorage, // Storage engine
  whitelist: ["favorite", "cart"], // Reducers to persist (optional)
  // blacklist: ['someReducer'], // Reducers to exclude from persistence (optional)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer, // Pass the persisted reducer directly here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore redux-persist actions
      },
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };