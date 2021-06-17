import actionTypes from "../types";

export const addItemToCart = item => ({
  type: actionTypes.CART_ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = id => ({
  type: actionTypes.CART_CLEAR_ITEM,
  payload: id,
});

export const descreaseItemQty = item => ({
  type: actionTypes.CART_DECREASE_ITEM_QTY,
  payload: item,
});

export const removeAllItemFromCart = () => ({
  type: actionTypes.CART_REMOVE_ALL_ITEMS,
});

export const cartSaveShippingAddress = data => ({
  type: actionTypes.CART_SHIPPING_ADDRESS,
  payload: data,
});
