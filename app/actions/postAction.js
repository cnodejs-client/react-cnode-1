import * as types from '../constants/ActionTypes.js';
import { getToken } from '../util/auth.js';

export function postSuccess(json) {
  return {
    type: types.POST_SUCCESS,
    data: json
  };
}

export function postFail() {
  return {
    type: types.POST_FAIL
  };
}

export function fetchPost(post, callback) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topics`, {
      method: 'POST',
      body: JSON.stringify({
        accesstoken: getToken(),
        ...post
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(postSuccess(data));
      callback({status: true});
    })
    .catch(err => {
      dispatch(postFail());
      callback({status: false});
      window.console.log(err);
    });
  };
}
