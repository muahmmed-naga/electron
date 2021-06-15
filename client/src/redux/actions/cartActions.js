import actionTypes from "../types";

export const addItemToCart = item => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: item,
});
