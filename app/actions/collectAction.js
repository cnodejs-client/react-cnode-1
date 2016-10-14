import * as types from '../constants/ActionTypes.js';
import { getToken } from '../util/auth.js';

export function collectSuccess() {
  return {
    type: types.COLLECT_SUCCESS
  };
}

export function collectFail() {
  return {
    type: types.COLLECT_FAIL
  };
}

export function uncollectSuccess() {
  return {
    type: types.UNCOLLECT_SUCCESS
  };
}

export function uncollectFail() {
  return {
    type: types.UNCOLLECT_FAIL
  };
}


export function fetchCollect(id) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic_collect/collect`, {
      method: 'POST',
      body: JSON.stringify({
        accesstoken: getToken(),
        topic_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(collectSuccess(data)))
    .catch(err => {
      dispatch(collectFail());
      window.console.log(err);
    });
  };
}


export function fetchUncollect(id) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic_collect/de_collect`, {
      method: 'POST',
      body: JSON.stringify({
        accesstoken: getToken(),
        topic_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(uncollectSuccess(data)))
    .catch(err => {
      dispatch(uncollectFail());
      window.console.log(err);
    });
  };
}

export function userCollectTopicsSuccess(json) {
  return {
    type: types.USER_COLLECTTOPICS_SUCCESS,
    data: json.data
  };
}

export function userCollectTopicFail(err) {
  return {
    type: types.USER_COLLECTTOPICS_FAIL,
    err
  };
}

export function fetchUserCollectTopics(user) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic_collect/${user}`)
      .then(res => res.json())
      .then(data => dispatch(userCollectTopicsSuccess(data)))
      .catch(err => {
        dispatch(userCollectTopicFail(err));
        window.console.error(err);
      });
  };
}

export function defaultCollectStatus() {
  return {
    type: types.DEFAULTSTATUS
  };
}

export function topicCollectStatus(user, id) {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic_collect/${user}`)
      .then(res => res.json())
      .then(data => {
        data.data.map(v => {
          if (id === v.id) {
            dispatch(defaultCollectStatus());
          }
        });
      })
      .catch(err => window.console.error(err));
  };
}
