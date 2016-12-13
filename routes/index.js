const artistRouterFile = require('./artist-router')
const songRouterFile = require('./songs-router')
const playlistRouterFile = require('./playlist-router')
const genreRouterFile = require('./genre-router')

module.exports = {
  artistsRoute: artistRouterFile,
  songsRoute: songRouterFile,
  playlistsRoute: playlistRouterFile,
  genresRoute: genreRouterFile
}