var express = require('express');
var genreRouter  = express.Router();
var Genre = require('../models/genre-model');


genreRouter.route('/genre',(req,res)=>{
    genre.findAll().then((genre)=>{
    res.send(genre)
})
})

module.exports = genreRouter;