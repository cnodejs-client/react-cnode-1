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
        numbers: action.numbers + 1,
        btn: {
          show: 'hidden',
          text: '点击加载'
        },
        page: [action.page]
      });
    case types.LISTS_RECEIVE_MORE_POST:
      state.page[action.numbers - 1] = action.page;
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


export function topicDetail(state = {
  author: {
    loginname: '',
    avatar_url: ''
  },
  create_at: '',
  title: '',
  content: '',
  replies: [],
  is_collect: false
}, action) {
  switch (action.type) {
    case types.DETAIL_REQUEST_POST:
      return Object.assign({}, state);
    case types.DETAIL_RECEIVE_POST:
      return Object.assign({}, state, action.detail);
    case types.COMMENT_SUCCESS:
      return Object.assign({}, state, {
        replies: [
          ...state.replies,
          {
            author: state.author,
            ...action.content
          }
        ]
      });
    case types.COLLECT_SUCCESS:
      return Object.assign({}, state, {
        is_collect: true
      });
    case types.UNCOLLECT_SUCCESS:
      return Object.assign({}, state, {
        is_collect: false
      });
    case types.DEFAULTSTATUS:
      return Object.assign({}, state, {
        is_collect: true
      });
    default:
      return state;
  }
}

export function userDetail(state = {
  user_collect: []
}, action) {
  switch (action.type) {
    case types.USER_REQUEST_POST:
      return Object.assign({}, state);
    case types.USER_RECEIVE_POST:
      return Object.assign({}, state, action.data);
    case types.USER_COLLECTTOPICS_SUCCESS:
      return Object.assign({}, state, {
        user_collect: action.data
      });
    default:
      return state;
  }
}

export function loginUserData(state = {
  success: false,
  loginname: '',
  avatar_url: '',
  id: ''
}, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, action.data);
    case types.LOGIN_FAIL:
      return state;
    case types.LOGIN_OUT:
      return Object.assign({}, state, {
        success: false,
        loginname: '',
        avatar_url: '',
        id: ''
      });
    default:
      return state;
  }
}


export function messages(state = {
  count: 0,
  has_read: [],
  not_read: []
}, action) {
  switch (action.type) {
    case types.MESSAGE_COUNT_SUCCESS:
      return Object.assign({}, state, {
        count: action.data
      });
    case types.MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        has_read: action.messages.has_read_messages,
        not_read: action.messages.hasnot_read_messages
      });
    default:
      return state;
  }
}
