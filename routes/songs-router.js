const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');
const express = require('express');
const router = express.Router();

//FUNCTIONS//
const getAllSongs = (req,res)=>(
  Song.findAll({
  	include: [Artist, Genre],
  	order: [['title', 'ASC']]
  })
  .then(songsInfo=>
  	res.send(songsInfo)
  )
)

const getSongById = (req,res)=>(
	Song.findOne({
    where: {id: req.params.id} 
  })
  .then(SongId=>
  	res.send(SongId)
  )
)

const postNewSong = (req,res)=>{
	let body = req.body;
	Artist.findOrCreate({
		where: {name: body.artistName}
	})
	.then(artistInfo=>
		Song.create({
			title: body.title,
			youtube_url: body.youtube_url,
			artistId: artistInfo[0].dataValues.id
		})
		.then(songInfo=>{
			Genre.findOrCreate({
				where: {title: body.genre}
			})
			.then(genreInfo=>
				songInfo.addGenres([genreInfo[0].dataValues.id])
			)
		})
	)
	.then(()=>
		res.send('Song with name: '+body.title+', artist: '+body.artistName+', genre: '+body.genre+', youtube_url: '+body.youtube_url+' created!')
	)
}

const updateSongName = (req,res)=>(
	Song.findOne({
		where:{id: req.params.id}
	})
	.then(songInfo=>
		songInfo.update({
			title: req.params.newName
		})
	)
	.then(()=>
		res.send('Song with Id:'+req.params.id+' updated with name:'+req.params.newName+'!')
	)
)

const deleteSongById = (req,res)=>(
	Song.destroy({
		where:{id: req.params.id}
	})
	.then(()=>
		res.send('Song with Id:'+req.params.id+' deleted!')
	)
)

//ROUTES//
router.route('/')
 .get(getAllSongs)
 .post(postNewSong) //needs artistName, genre, youtube_url and title

router.route('/:id')
 .get(getSongById)
 .delete(deleteSongById)

router.route('/:id/:newName')
 .put(updateSongName)

module.exports = router