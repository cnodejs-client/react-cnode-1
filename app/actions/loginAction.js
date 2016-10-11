import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    data: data
  };
}

export function loginFail(err) {
  return {
    type: types.LOGIN_FAIL,
    data: err
  };
}

export function fetchLogin(url, accessToken) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/${url}`, {
      method: 'POST',
      body: JSON.stringify({
        accesstoken: accessToken
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(loginSuccess(data)))
    .catch(err => dispatch(loginFail(err)));
  };
}
