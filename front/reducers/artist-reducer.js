import {DISPLAY_ARTISTS} from '../actions/types';

const _initialState = {
	artists: []
}

// ultimately our data from our displayArtists action in our artists
// from here: artist-container.js

function artistReducer(state = _initialState, action) {
	let stateCopy = Object.assign({}, state);
	switch(action.type) {
		case DISPLAY_ARTISTS:
			stateCopy.artists = action.data;
			return stateCopy;
		default:
			return stateCopy;
	}
}

export {artistReducer};
