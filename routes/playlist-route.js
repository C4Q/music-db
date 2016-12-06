var express = require('express');
var playlistRouter  = express.Router();
var Playlist = require('../models/playlist-model');


playlistRouter.route('/',(req,res)=>{
    playlist.findAll().then((playlist)=>{
    res.send(playlist)
})
})

module.exports = playlistRouter;