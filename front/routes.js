import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import SongPage from './components/pages/SongPage';
import ArtistPage from './components/pages/ArtistPage';

// Route Path is always your main display
// Nested in the Path are the children needed to change
export default (
  <Route path="/" component={App}>
    <IndexRoute component={SongPage} />
    <Route path="artist" component={ArtistPage} />
  </Route>
);
