import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { productDetailsReducer, productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
