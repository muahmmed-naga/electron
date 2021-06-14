import { combineReducers } from "redux";
import { productDetailsReducer, productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailsReducer,
});

export default rootReducer;
