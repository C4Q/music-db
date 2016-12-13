import {connect} from 'react-redux';

import Playlists from '../components/playlists';

const mapStateToProps = state => ({
  playlists: state.playlistsReducer.playlists
})

export const PlaylistContainer = connect(mapStateToProps)(Playlists);
