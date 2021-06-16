import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import { productDetailsReducer, productsReducer } from "./productsReducer";
import { userDetailsReducer, userLoginReducer } from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "userLogin"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);
