import store from '../store';

import {DISPLAY_SONGS} from './types';

export function displaySongs(data) {
	store.dispatch({
		type: DISPLAY_SONGS,
		data
	})
}