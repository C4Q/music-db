const router = require('express').Router()
const Artist = require('../models/artist-model')

const getAllArtists = (req, res) =>{
  Artist.findAll()
  .then(artists =>{
    res.send(artists)
  })
  .catch(err =>{
    console.log(err)
  })
}

const getOneArtistById = (req, res) => {
  Artist.findById(req.params.id)
  .then(artist => {
    res.send(artist)
  })
  .catch(err =>{
    console.log(err)
  })
}

const createArtist = (req, res) =>{
  Artist.create({
    name: req.body.name
  })
  .then(newArtist =>{
    res.send(newArtist)
  })
  .catch(err =>{
    console.log(err)
  })
}

const deleteArtistById = (req, res) =>{
  Artist.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    return Artist.findAll()
  })
  .then(allArtist =>{
    res.send(allArtist)
  })
  .catch(err =>{
    console.log(err)
  })
}

const updateArtist = (req, res) =>{
  Artist.update(
    {name: req.params.newName},
    {
      where:{
        id: req.params.id
      }
    }
  )
  .then((id)=> Artist.findById(parseInt(id)))
  .then(updatedArtist => res.send(updatedArtist))
}

//Routes
router.route('/')
  .get(getAllArtists)
  .post(createArtist)
router.route('/:id')
  .get(getOneArtistById)
  .delete(deleteArtistById)
router.route('/:id/:newName')
  .put(updateArtist)


module.exports = router