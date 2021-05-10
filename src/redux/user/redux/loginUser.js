const ACTION = 'LOGIN_USER';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_LOGOUT = 'LOGOUT_USER';

const loginUser = (username, password) => ({
  type: ACTION,
  username,
  password,
});

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = error => ({
  type: ACTION_ERROR,
  error,
});

const logoutUser = () => ({
  type: ACTION_LOGOUT,
});

const initialState = {
  user: undefined,
  error: undefined,
  successStack: 0,
  errorStack: 0,
};

export {ACTION, loginUser, onSuccess, onFailure, logoutUser};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    case ACTION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        successStack: state.successStack + 1,
      };
    case ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        errorStack: state.errorStack + 1,
      };
    case ACTION_LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};
