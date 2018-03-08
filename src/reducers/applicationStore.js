import { REDIRECT } from '../constants';

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    role: null,
    userName: null,
  },
  url: null,
};

export function applicationStore(state = initialState, action) {
  switch (action.type) {
    case REDIRECT:
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
}
