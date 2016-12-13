
const song = require('./song-route');
const artist = require('./artist-route');
const playlist = require('./playlist-route');
const genre = require('./genre-route');

module.exports = {
	routes: {
		song,
		artist,
		playlist,
		genre
	}
}
