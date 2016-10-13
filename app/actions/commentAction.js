import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function makeCommentSuccess(content) {
  return {
    type: types.COMMENT_SUCCESS,
    content
  };
}

export function makeCommentFail() {
  return {
    type: types.COMMENT_FAIL
  };
}

export function fetchCommnet(query, comment, callback) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic/${query}/replies`, {
      method: 'POST',
      body: JSON.stringify({
        accesstoken: '90821d3b-f348-4e74-8fb3-10d765114d20',
        ...comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => {
      callback({success: true});
      dispatch(makeCommentSuccess(comment));
    })
    .catch(err => {
      callback({status: 'fail'});
      dispatch(makeCommentFail());
      window.console.log(err);
    });
  };
}
