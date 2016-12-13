import {CREATE_PLAYLIST} from '../actions/types';

const _initialState = {
  playlist_title: '',
  song_title: '',
  artist: '',
  youtube_url: ''
}


function createPlaylistReducer(state = _initialState, action){
  let stateCopy = Object.assign({}, state)
  switch(action.type) {
    case CREATE_PLAYLIST:
        
      return stateCopy;
    default:
      return stateCopy;
  }
}

export {createPlaylistReducer};
