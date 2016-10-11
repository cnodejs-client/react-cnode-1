import * as types from '../constants/ActionTypes.js';

export function topics(state = {
  isFetching: false,
  isExpire: false,
  numbers: 1,
  btn: {
    show: 'hidden',
    text: '点击加载'
  },
  page: []
}, action) {
  switch (action.type) {
    case types.LISTS_REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        isExpire: false,
        btn: {
          show: 'visible',
          text: '正在加载...'
        }
      });
    case types.LISTS_RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        isExpire: false,
        numbers: action.numbers,
        btn: {
          show: 'hidden',
          text: '点击加载'
        },
        page: [action.page]
      });
    case types.LISTS_RECEIVE_MORE_POST:
      state.page[action.numbers] = action.page;
      return Object.assign({}, state, {
        isFetching: false,
        isExpire: false,
        btn: {
          show: 'hidden',
          text: '点击加载'
        },
        numbers: action.numbers + 1
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

export function userDetail(state = {}, action) {
  switch (action.type) {
    case types.USER_REQUEST_POST:
      return Object.assign({}, state);
    case types.USER_RECEIVE_POST:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
