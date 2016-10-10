import * as types from '../constants/ActionTypes.js';

export function topics(state = {
  isFetching: false,
  isExpire: false,
  data: []
}, action) {
  switch (action.type) {
    case types.REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        isExpire: false
      });
    case types.RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isExpire: false,
        data: action.data
      });
    default:
      return state;
  }
}
