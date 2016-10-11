import * as types from '../constants/ActionTypes.js';
import 'whatwg-fetch';

export function getRichEditorState(editorState) {
    return {
        type: types.RICH_EDITOR_STATE,
        editorState
    };
}

export function postRichEditorState(editorState) {
  return dispatch => {
    dispatch(getRichEditorState(editorState));
    fetch(`https://cnodejs.org/api/v1/${url}${topicId}/replies`, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json'
       }
    }).then(res => res.json())
      .then(json => dispatch(receiveList(json, query)))
      .catch(err => window.console.log(err));
  };
}
