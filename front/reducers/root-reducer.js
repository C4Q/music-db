// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import store from '../store.js';

// ************************************ IMPORT REDUCERS ************************************
import {artistReducer} from './artist-reducer.js';
import {playlistsReducer} from './playlists-reducer.js';
import {createPlaylistReducer} from './createPlaylist-reducer.js';
import {songReducer} from './song-reducer.js';
// ************************************ COMBINE REDUCERS ************************************

// combine reducers
// from here: artistReducer
const rootReducer = combineReducers({
  artistReducer,
  playlistsReducer,
  createPlaylistReducer,
  songReducer
})

export default rootReducer;
