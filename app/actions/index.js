import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function requestList() {
  return {
    type: types.LISTS_REQUEST_POST
  };
}

export function receiveList(json, page) {
  return {
    type: types.LISTS_RECEIVE_POST,
    numbers: page,
    page: json.data
  };
}

export function fetchList(url, query) {
  return dispatch => {
    dispatch(requestList());
    return fetch(`https://cnodejs.org/api/v1/${url}?page=${query}`)
      .then(res => res.json())
      .then(json => dispatch(receiveList(json, query)));
  };
}


export function requestDetail() {
  return {
    type: types.DETAIL_REQUEST_POST
  };
}

export function receiveDetail(json) {
  return {
    type: types.DETAIL_RECEIVE_POST,
    detail: json.data
  };
}

export function fetchDetail(url, query) {
  return dispatch => {
    dispatch(requestDetail());
    return fetch(`https://cnodejs.org/api/v1/${url}/${query}`)
      .then(res => res.json())
      .then(json => dispatch(receiveDetail(json, query)));
  };
}
