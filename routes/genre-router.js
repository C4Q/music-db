const Genre = require('../models/genre-model');
const express = require('express');
const router = express.Router();

//FUNCTIONS//
const getAllGenres = (req,res)=>(
	Genre.findAll({
    order:[['title', 'ASC']] 
  })
	.then(genreInfo=>
    res.send(genreInfo)
  )
)

const getGenresById = (req,res)=>(
  Genre.findOne({
    where: {id: req.params.id} 
  })
  .then(GenreId=>
    res.send(GenreId)
  )
)

const postNewGenre = (req,res)=>{
	let body = req.body;
  Genre.create({
  	title: body.title
  })
  .then(()=>
    res.send(body.title+' genre created!')
  )
}

const deleteGenreById = (req,res)=>(
  Genre.destroy({ 
    where: { id: req.params.id } 
  })
  .then(()=> 
    res.send('Genre with id: '+req.params.id+' has been deleted')
  )
)
	
const updateGenre = (req,res)=>(
  Genre.findOne({ 
    where: {id: req.params.id} 
  })
  .then(genreInfo=>
		genreInfo.update({
  	  title: req.params.newGenre 
    })
  )
  .then(()=> 
    res.send('Genre with Id:'+req.params.id+' has been updated to '+req.params.newGenre)
  )
)

//ROUTES//
router.route('/')
  .get(getAllGenres)
  .post(postNewGenre)

router.route('/:id/:newGenre')
  .put(updateGenre)

router.route('/:id')
  .get(getGenresById)
  .delete(deleteGenreById)

module.exports = router