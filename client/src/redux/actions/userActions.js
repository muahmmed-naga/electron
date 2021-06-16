import axios from "axios";
import actionTypes from "../types";

export const userLoginAction = (email, password) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/users/login",
      { email, password },
      config
    );

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.USER_LOGIN_ERROR,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const userLogout = () => async dispatch => {
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
};

export const userRegisterAction = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/users/signup",
      { name, email, password },
      config
    );

    dispatch({
      type: actionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.USER_REGISTER_ERROR,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const userDetailsAction = id => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.USER_DETAILS_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/users/${id}`, config);
      dispatch({
        type: actionTypes.USER_DETAILS_SCUCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.USER_DETAILS_ERROR,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
};

export const userUpdateProfileAction = user => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.USER_UPDATE_PROFILE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.patch(`/api/v1/users/profile`, user, config);
      dispatch({
        type: actionTypes.USER_UPDATE_PROFILE_SCUCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.USER_UPDATE_PROFILE_ERROR,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
};
