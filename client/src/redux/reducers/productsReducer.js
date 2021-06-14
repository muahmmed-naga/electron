import actionTypes from "../types";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_REQUEST_FETCH:
      return {
        loading: true,
        data: {},
        error: false,
      };
    case actionTypes.PRODUCTS_REQUEST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };

    case actionTypes.PRODUCTS_REQUEST_ERROR:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REQUEST_FETCH:
      return {
        loading: true,
        data: {},
        error: false,
      };
    case actionTypes.PRODUCT_REQUEST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case actionTypes.PRODUCT_REQUEST_ERROR:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
