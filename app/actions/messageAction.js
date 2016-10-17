import * as types from '../constants/ActionTypes.js';
import { getToken } from '../util/auth.js';

export function getMessageCountSuccess(data) {
  return {
    type: types.MESSAGE_COUNT_SUCCESS,
    data: data.data
  };
}

export function getMessageCount() {
  const token = getToken();
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/message/count?accesstoken=${token}`)
    .then(res => res.json())
    .then(data => dispatch(getMessageCountSuccess(data)))
    .catch(err => window.console.log(err));
  };
}
