import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from '../actons/actionType';

const authReducer = (
  state = {
    name: 'Bilal',
    loading: false,
    errorMessage: '',
    successMessage: '',
    isLoggedIn: false
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN: {
      return { ...state };
    }
    case USER_LOGIN_SUCCESS:
      return { ...state, successMessage: 'you are logged in.' };
    case USER_LOGIN_FAILED:
      return { ...state, errorMessage: 'login failed' };
    default:
      return { ...state };
  }
};

export default authReducer;
