import * as types from '../constants/ActionTypes.js';

export function getRichEditorState(editorState) {
    return {
        type: types.RICH_EDITOR_STATE,
        editorState
    };
}
