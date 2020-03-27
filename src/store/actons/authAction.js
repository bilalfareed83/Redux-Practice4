import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from './actionType';

export const userLogIn = payload => {
  return {
    type: USER_LOGIN,
    payload
  };
};

export const userLoginSuccess = payload => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload
  };
};

export const userLoginFailed = payload => {
  return {
    type: USER_LOGIN_FAILED,
    payload
  };
};
