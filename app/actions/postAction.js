import * as types from '../constants/ActionTypes.js';

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

export function fetchPost(post) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topics`, {
      method: 'POST',
      body: JSON.stringify({
        accesstoken: '90821d3b-f348-4e74-8fb3-10d765114d20',
        title: post.title,
        tab: post.tab,
        content: post.content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(postSuccess(data)))
    .catch(err => {
      dispatch(postFail());
      window.console.log(err);
    });
  };
}
