import {connect} from 'react-redux';

import Song from '../components/song';

const mapStateToProps = state => ({
	songs: state.songReducer.songs
})

export const SongContainer = connect(mapStateToProps)(Song);