import {connect} from 'react-redux';

import Artist from '../components/artist';

// distributes branches of our state to our components
// artists belongs to artistReducer branch of state
// from here: App.jsx

const mapStateToProps = state => ({
	artists: state.artistReducer.artists
})

export const ArtistContainer = connect(mapStateToProps)(Artist);