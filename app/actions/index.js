import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function requestPost(content) {
  return {
    type: types.REQUEST_POST,
    content
  };
}

export function receivePost(content, json) {
  return {
    type: types.RECEIVE_POST,
    content,
    posts: json
  };
}

export function fetchPost(url, content) {
  return dispatch => {
    dispatch(requestPost(content));
    return fetch(url)
      .then(res => res.json())
      .then(json => dispatch(receivePost(content, json)));
  };
}
