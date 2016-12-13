import store from '../store';

import {DISPLAY_PLAYLISTS} from './types';


export function displayPlaylists(data) {
  store.dispatch({
    type: DISPLAY_PLAYLISTS,
    data
  })
}
