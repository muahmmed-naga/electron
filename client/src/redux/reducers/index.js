import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import { productDetailsReducer, productsReducer } from "./productsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailsReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);