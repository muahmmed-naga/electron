import actionTypes from "../types";

export const orderItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_ITEMS_REQUEST:
      return {
        loading: true,
        orderData: {},
        error: false,
      };
    case actionTypes.ORDER_ITEMS_SUCCESS:
      return {
        loading: false,
        success: true,
        orderData: action.payload,
        error: false,
      };

    case actionTypes.ORDER_ITEMS_ERROR:
      return {
        loading: false,
        orderData: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
