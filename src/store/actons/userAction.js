import { SUCCESS } from './actionType';

export const userAction = payload => {
  return {
    type: SUCCESS,
    payload
  };
};
