import {DISPLAY_PLAYLISTS} from '../actions/types';

const _initialState = {
  playlists : []
}

function playlistsReducer (state = _initialState, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case DISPLAY_PLAYLISTS:
      stateCopy.playlists = action.data;
      return stateCopy;
    default:
      return stateCopy;
  }
}

export {playlistsReducer};
