import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import {
  orderDetailsReducer,
  orderItemsReducer,
  userOrderPayReducer,
} from "./orderReducer";
import { productDetailsReducer, productsReducer } from "./productsReducer";
import {
  userDetailsReducer,
  userLoginReducer,
  userUpdateReducer,
} from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "cart",
    "userLogin",
    "orderItems",
    "orderDetails",
    "orderPayInfo",
  ],
};

const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  orderItems: orderItemsReducer,
  orderDetails: orderDetailsReducer,
  orderPayInfo: userOrderPayReducer,
});

export default persistReducer(persistConfig, rootReducer);
