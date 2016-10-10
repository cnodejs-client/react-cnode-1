import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function requestPost() {
  return {
    type: types.REQUEST_POST
  };
}

export function receivePost(json) {
  return {
    type: types.RECEIVE_POST,
    data: json.data
  };
}

export function fetchPost(url, query) {
  return dispatch => {
    dispatch(requestPost());
    return fetch(`https://cnodejs.org/api/v1/${url}?${query}`)
      .then(res => res.json())
      .then(json => dispatch(receivePost(json)));
  };
}
