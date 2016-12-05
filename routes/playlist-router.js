const router = require('express').Router()
const Playlist = require('../models/playlist-model');
const Song = require('../models/song-model');

const getPlaylists = (req, res) => {
  Playlist.findAll({include: [Song]})
    .then((playlists) => {
      res.send(playlists);
    })
}

const getPlaylistById = (req, res) => {
  Playlist.findById(req.params.id, {include: [Song]})
    .then((playlist) => {
      res.send(playlist);
    })
}

const createPlaylist = (req, res) => {
  Playlist.findOrCreate({where: {title: req.body.title}})
    .then((playlist) => {
      let songs = JSON.parse(req.body.songs)
      playlist[0].addSongs(songs);
      cosole.log("Playlist created");
    })
}

const deletePlaylist = (req, res) => {
  Playlist.destroy({where: {id: req.params.id}})
    .then(() => {
      console.log("Playlist deleted");
    })
}

router.route('/')
  .get(getPlaylists)
  .post(createPlaylist)

router.route('/:id')
  .get(getPlaylistById)
  .delete(deletePlaylist)

module.exports = router
