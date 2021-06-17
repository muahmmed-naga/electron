import actionTypes from "../types";
import { addItemToShoppingCart, descreaseCartItemQty } from "../utils";

const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToShoppingCart(state.cartItems, action.payload),
      };
    case actionTypes.CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload),
      };

    case actionTypes.CART_DECREASE_ITEM_QTY:
      return {
        ...state,
        cartItems: descreaseCartItemQty(state.cartItems, action.payload),
      };

    case actionTypes.CART_REMOVE_ALL_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    case actionTypes.CART_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
