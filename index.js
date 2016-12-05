// Require models
const Album = require('./models/album-model');
const Artist = require('./models/artist-model');
const Genre = require('./models/genre-model');
const Playlist = require('./models/playlist-model');
const Song = require('./models/song-model');

// Require routes
const albums = require('./routes/album-router.js')
const artists = require('./routes/artist-router.js');
const genres = require('./routes/genre-router.js');
const playlists = require('./routes/playlist-router.js');
const songs = require('./routes/song-router.js');

module.exports = {
  models: {
    Album: Album,
    Artist: Artist,
    Genre: Genre,
    Playlist: Playlist,
    Song: Song,
  },
  routes: {
    albums: albums,
    artists: artists,
    genres: genres,
    playlists: playlists,
    songs: songs,
  }
}
