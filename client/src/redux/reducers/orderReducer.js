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

export const orderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        order: {},
        error: false,
      };
    case actionTypes.GET_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
        success: true,
        error: false,
      };
    case actionTypes.GET_ORDER_DETAILS_ERROR:
      return {
        loading: false,
        order: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userOrderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_ORDER_PAID_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case actionTypes.USER_ORDER_PAID_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
      };
    case actionTypes.USER_ORDER_PAID_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_ORDER_PAID_RESET:
      return {};
    default:
      return state;
  }
};
