import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

// css
import './styles/main.css';

// components
import Navbar from './components/Navbar';
import {ArtistContainer} from './containers/artist-container';
import {PlaylistContainer} from './containers/playlists-container';
import {SongContainer} from './containers/song-container';
import CreatePlaylist from './components/createplaylist';
import {SinglePlaylist} from './components/singlePlaylist';

const App = React.createClass({
  render: function (){
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ArtistContainer} />
        <Route path="artist" component={ArtistContainer}></Route>
        <Route path="song" component={SongContainer}></Route>
        <Route path="playlists" component={PlaylistContainer}></Route>
        <Route path="createPlaylist" component={CreatePlaylist}></Route>
        <Route path="singlePlaylist" component={SinglePlaylist}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
