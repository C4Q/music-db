import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import ArtistsPage from './artists-pg.jsx';
import CreatePlaylist from './new-playlist-pg.jsx';
import PlaylistPage from './playlists-pg.jsx';
import SongsPage from './songs-pg.jsx';

const Nav = (props) => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/artists-pg'>Artists Page</Link>
    <Link to='/songs-pg'>Songs Page</Link>
    <Link to='/playlists-pg'>Playlists Page</Link>
    <Link to='/new-playlist-pg'>Create Playlist</Link>
  </div>
)
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)
const App = (props) => (
  <div>
    <h1> Music App </h1>
  </div>
)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={App} />
      <Route path="/artists-pg" component={ArtistsPage}/>
      <Route path="/songs-pg" component={SongsPage}/>
      <Route path="/playlists-pg" component={PlaylistPage}/>
      <Route path="/new-playlist-pg" component={CreatePlaylist}/>
    </Route>
  </Router> , document.getElementById('root'));

export default App;
