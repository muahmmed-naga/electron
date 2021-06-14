import axios from "axios";
import actionTypes from "../types";

export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.PRODUCTS_REQUEST_FETCH,
      });

      const { data } = await axios.get(`/api/v1/products`);

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

export const fetchProduct = id => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_REQUEST_FETCH,
      });

      const { data } = await axios.get(`/api/v1/products/${id}`);

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
