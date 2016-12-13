import store from '../store';

import {DISPLAY_ARTISTS} from './types';

// recieves the data from our ajax request in artists.js
// dispatches an action to the store (sends the data recieved to our store)
// from here: store

export function displayArtists(data) {
	store.dispatch({
		type: DISPLAY_ARTISTS,
		data
	})
}