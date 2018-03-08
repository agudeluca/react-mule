import axios from 'axios';
import { HOST, REDIRECT } from '../constants';

export const redirect = url => {
  return {
    type: REDIRECT,
    url,
  };
};

export const logOut = () => {
  return (dispatch, getState) => {
    console.log('entra');
    localStorage.clear();
    dispatch(redirect('/login'));
  };
};

export const authenticate = data => {
  return (dispatch, getState) => {
    axios
      .post(HOST + '/login', data)
      .then(function(response) {
        console.log(response);
        localStorage.setItem('session', true);
        dispatch(redirect('/'));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
