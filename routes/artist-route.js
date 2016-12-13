const router = require('express').Router();
const Artist = require('../models/artist-model');

// ****************************** Callbacks ******************************
function getAllArtists(req, res) {
  Artist.findAll()
    .then(function(data){
      console.log(data)
      res.send(data)
    })
};

function getArtistById(req, res) {
  Artist.findById(req.params.id)
  	.then(function(data) {
  		console.log(data);
  		res.send(data);
  	})
}

function postArtist(req, res) {
	Artist.create({
		id: req.params.id,
		name: req.body.name,
	})
	.then(function(artist) {
		console.log(artist);
		res.send(artist);
	})
}

function deleteArtistById(req, res) {
	Artist.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function() {
		res.send('Artist deleted')
	})
}

function updateArtistName(req, res) {
	console.log(req.params)
	Artist.update({
		name: req.params.newName
	},
	{
		where: {
			id: req.params.id
		}
	})
	.then(function(artist) {
		res.send(artist)
	})
	.catch( (err) => {
		console.log(err)
	})
}

// ****************************** Routes ******************************

// /api/artists/:id GET a specific artist by id
router.route('/:id')
	.get(getArtistById)
// /api/artists/:id DELETE an artist by id
	.delete(deleteArtistById)


// /api/artists GET all artists, ordered a-z
router.route('/')
  .get(getAllArtists)
// /api/artists/ POST (create) a new artist
  .post(postArtist)

// /api/artists/:id/:newName PUT (update) a specific artist's name
router.route('/:id/:newName')
	.put(updateArtistName)




module.exports = router;
