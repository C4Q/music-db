const router = require('express').Router()
const Genre = require('../models/genre-model')

const getAllSortedGenres = (req, res) => {
  Genre.findAll({
    order:"title ASC"
  })
  .then( genres =>{res.send(genres)})
  .catch(err => {res.sendStatus(500)})
}

const getGenreById = (req, res) => {
  Genre.findById(req.params.id)
  .then( genre => res.send(genre))
  .catch(err => {res.sendStatus(500)})
}

const createGenre = (req, res) => {
  Genre.create({
    title: req.body.title
  })
  .then( newGenre => res.send(newGenre))
  .catch(err => {res.sendStatus(500)})
}

const updateGenre = (req, res) => {
  Genre.update(
    {title: req.params.newGenre},
    {
      where:{
        id: req.params.id
      }
    }
  )
  .then((id)=> Genre .findById(parseInt(id)))
  .then(updatedGenre  => res.send(updatedGenre))
}


router.route('/')
  .get(getAllSortedGenres)
  .post(createGenre)
router.route('/:id')
  .get(getGenreById)
router.route('/:id/:newGenre')
  .put(updateGenre)

module.exports = router
