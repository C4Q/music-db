var express = require('express');
var songRouter  = express.Router();
var Song = require('../models/song-model');
var Artist =require('../models/artist-model');
var Genre =require('../models/genre-model');

    // GET all songs with genre and artist information fully populated
    songRouter.get('/',(req,res)=>{
        Song.findAll({include:[Artist,Genre]}).then((song)=> {res.send(song)});
    })

    // GET specific song by id
    songRouter.get('/:id',(req,res)=>{
        Song.findById(req.params.id,{include:[Artist,Genre]}).then(song=>{res.send(song)});
    })

    // POST (create) a new song
    songRouter.post('/',(req,res)=>{
        Song.create({where:{title: req.body.title,youtube_url: req.body.url},include:[Artist,Genre]}).then(newSong=>{res.send(newSong)});
    })
    // DELETE a specific song by id
    songRouter.delete('/:id',(req,res)=>{
        Song.destroy({where:{id:req.params.id}}).then(song=>{res.send(song)});
    })

    // PUT (update) a specific song's title
    songRouter.put('/:id/:newTitle',(req,res)=>{
        Song.findById(req.params.id).then(song=>{
            return song.update({title:req.params.newTitle})
    }).then(song=>{res.send(song)})
    })

    module.exports = songRouter;