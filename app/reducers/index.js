import * as types from '../constants/ActionTypes.js';

export function topics(state = {
  isFetching: false,
  isExpire: false,
  numbers: 0,
  page: []
}, action) {
  switch (action.type) {
    case types.LISTS_REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        isExpire: false
      });
    case types.LISTS_RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isExpire: false,
        numbers: action.numbers,
        page: [
            state.page[action.numbers] = action.page
        ]
      });
    default:
      return state;
  }
}


export function topicDetail(state = {}, action) {
  switch (action.type) {
    case types.DETAIL_REQUEST_POST:
      return Object.assign({}, state);
    case types.DETAIL_RECEIVE_POST:
      return Object.assign({}, state, action.detail);
    default:
      return state;
  }
}
