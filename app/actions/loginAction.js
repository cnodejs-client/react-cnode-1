import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    data: data
  };
}

export function loginFail() {
  return {
    type: types.LOGIN_FAIL,
  };
}

export function fetchLogin(url, accessToken, callback) {
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
    .then(data => {
      if (data.success) {
        dispatch(loginSuccess(data));
        callback();
      }
      dispatch(loginFail());
    })
    .catch(err => {
      dispatch(loginFail());
      window.console.log(err);
    });
  };
}
