import axios from "axios";
import actionTypes from "../types";

export const fetchAllProducts = url => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.PRODUCTS_REQUEST_FETCH,
      });

      const { data } = await axios.get(`${url}`);

      dispatch({
        type: actionTypes.PRODUCTS_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.PRODUCTS_REQUEST_ERROR,
        payload: err.message,
      });
    }
  };
};

export const fetchProduct = url => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_REQUEST_FETCH,
      });

      const { data } = await axios.get(`${url}`);

      dispatch({
        type: actionTypes.PRODUCT_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_REQUEST_ERROR,
        payload: error.message,
      });
    }
  };
};
