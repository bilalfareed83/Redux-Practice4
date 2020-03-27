import { SUCCESS } from '../actons/actionType';

const userReducer = (
  state = {
    user: null
  },
  action
) => {
  switch (action.type) {
    case SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
