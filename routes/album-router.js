const router = require('express').Router()
const Album = require('../models/album-model')
const Artist = require('../models/artist-model')

const getAllSortedAlbums = (req, res) => {
  Album.findAll({
    order:"name ASC"
  })
  .then( genres =>{res.send(genres)})
  .catch(err => {res.sendStatus(500)})
}

const getAlbumById = (req, res) => {
  Album.findById(req.params.id)
  .then( genre => res.send(genre))
  .catch(err => {res.sendStatus(500)})
}

const createAlbum = (req, res) => {
  Artist.findOrCreate({
    where: {
      name: req.body.name
    }
  })
  .then( artist => {
    console.log(artist)
    return Album.create({
      albumName: req.body.albumName, 
      artistId: artist[0].dataValues.id
    })
  })
  .then( newAlbum => res.send(newAlbum))
  .catch(err => {res.sendStatus(500)})
}

const updateAlbum = (req, res) => {
  Album.update(
    {albumName: req.params.newAlbum},
    {
      where:{
        id: req.params.id
      }
    }
  )
  .then(()=> {

    return Album.findById(req.params.id)
  })
  .then(updatedAlbum  => res.send(updatedAlbum))
}


router.route('/')
  .get(getAllSortedAlbums)
  .post(createAlbum)
router.route('/:id')
  .get(getAlbumById)
router.route('/:id/:newAlbum')
  .put(updateAlbum)

module.exports = router