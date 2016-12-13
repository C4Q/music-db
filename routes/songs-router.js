const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');
const express = require('express');
const router = express.Router();

//FUNCTIONS//

// '/api/songs' with genre and artist
const getAllSongs = (req,res)=>{
	Song.findAll({include: [Genre, Artist]})
	.then((data)=>{res.send(data)})
}


// /api/songs/:id GET specific song by id
const getOneSong = (req,res)=>{
	Song.findOne({where: {id: req.params.id}, include: [Genre, Artist]})
	.then((data)=>{res.send(data)})
}



// // /api/songs POST (create) a new song
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




// /api/songs/:id/:newTitle (update) a specific song's title
const updateSong = (req,res)=>{
	Song.update(
		{title: req.params.newTitle},
		{where: {id: req.params.id}}
	)
	.then((id)=>{Song.findById(parseInt(id))})
	.then((data)=>{res.send(data +' UPDATED!')})
}


// /api/songs/:id
const deleteSong = (req,res)=>{
	Song.destroy({where: {id: req.params.id}})
	.then((id)=>{res.send(id +'DELETE!')})
}



//ROUTES//
router.route('/')
.get(getAllSongs)
.post(postNewSong)//needs artistName, genre, youtube_url and title

router.route('/:id')
.get(getOneSong)
.put(updateSong)
.delete(deleteSong)

router.route('/:id/:newTitle')
  .put(updateSong)

module.exports = router