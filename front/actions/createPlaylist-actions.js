import store from '../store';

import {CREATE_PLAYLIST} from './types';

export function createplaylist (data) {
  store.dispatch({
    type: CREATE_PLAYLISTS,
    data
  })
}
