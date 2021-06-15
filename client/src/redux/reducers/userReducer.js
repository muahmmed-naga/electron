import actionTypes from "../types";

const userReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
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

export default userReducer;
