const artistRouter = require('./artist-route');
const genreRouter = require('./genre-route');
const playlistRouter = require('./playlist-route');
const songRouter = require('./song-route');

module.exports = {
    artistRouter: artistRouter,
    genreRouter: genreRouter,
    playlistRouter: playlistRouter,
    songRouter: songRouter
}