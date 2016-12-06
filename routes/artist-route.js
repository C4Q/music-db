const express = require('express');
var artistRouter  = express.Router();
var Artist = require('../models/artist-model');

artistRouter.route('/',(req,res)=>{
    artist.findAll().then((artists)=>{
        res.send(artists)
    })
})

module.exports = artistRouter;