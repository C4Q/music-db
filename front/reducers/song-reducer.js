import {DISPLAY_SONGS} from '../actions/types';

const _initialState = {
	songs: []
}


function songReducer(state = _initialState, action) {
	let stateCopy = Object.assign({}, state);
	switch(action.type) {
		case DISPLAY_SONGS:
			stateCopy.songs = action.data;
			return stateCopy;
		default:
			return stateCopy;
	}
}

export {songReducer};
