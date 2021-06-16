import actionTypes from "../types";

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        loading: true,
        userInfo: {},
        error: false,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case actionTypes.USER_REGISTER_ERROR:
      return {
        loading: false,
        userInfo: {},
        error: action.payload,
      };

    case actionTypes.USER_LOGIN_REQUEST:
      return {
        loading: true,
        userInfo: {},
        error: false,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };

    case actionTypes.USER_LOGIN_ERROR:
      return {
        loading: false,
        userInfo: {},
        error: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userDetailsReducer = (
  state = { user: {}, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
        error: false,
      };
    case actionTypes.USER_DETAILS_SCUCESS:
      return {
        loading: false,
        user: action.payload,
        error: false,
      };

    case actionTypes.USER_DETAILS_ERROR:
      return {
        loading: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        userInfo: {},
        error: false,
      };
    case actionTypes.USER_UPDATE_PROFILE_SCUCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };

    case actionTypes.USER_UPDATE_PROFILE_ERROR:
      return {
        loading: false,
        userInfo: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
