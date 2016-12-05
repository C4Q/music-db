const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('../models/song-model');
const Genre = require('../models/genre-model');
// const SongGenre = require('./models/song-genre-model');

//Song.sync will create the songs table
Song.sync({force: true})
.then(() => sequelizeConnection.sync())
//add the following three artists to the database:
.then((data) => Song.create(
  {title: 'Swim Good', youtube_url: 'https://www.youtube.com/watch?v=PmN9rZW0HGo', artistId: 1}
))
.then((song) => {
  //use an automatically created 'accessor' method (addGenres) to add the genres
  song.addGenres([1, 3])
})
.then(() => Song.create(
  {title: 'My Friends Never Die', youtube_url: 'https://www.youtube.com/watch?v=B56lkB18onQ', artistId: 2}
))
.then((song) => {
  song.addGenres([2])
})
.then(() => Song.create(
  {title: 'Ny State of Mind', youtube_url: 'https://www.youtube.com/watch?v=UKjj4hk0pV4', artistId: 3}
))
.then((song) => {
  song.addGenres([1])
})
.then(() => Song.bulkCreate([
  {title: 'Mad', youtube_url: 'https://www.youtube.com/watch?v=cjwHMuLdytY', artistId: 4},
  {title: 'Rise', youtube_url: 'https://www.youtube.com/watch?v=KSZKs78Ixtk', artistId: 4},
  {title: 'Weary', youtube_url: 'https://www.youtube.com/watch?v=KW7K0gzud5s', artistId: 4},
  {title: 'Cranes in the Sky', youtube_url: 'https://www.youtube.com/watch?v=S0qrinhNnOM', artistId: 4},
  {title: "Don't Wish Me Well", youtube_url: 'https://www.youtube.com/watch?v=N3gNFtRwWAU', artistId: 4}
]))
.then(()=> {
  return Song.findAll({
    where: {
      artistId:[4]
    }
  }) 
})
.then(songs =>{
  
  //find all of the newly created arists and return the results
  //(if we try to immediately return the artists after bulkCreate, the ids may all show up as 'null')
  songs.map(song => song.addGenres([1,4]))
  console.log(songs)
})
//the following artists should NOT be added to your database:
//(if your validations are setup correctly)
.then(() => Song.bulkCreate([
  {title: ''},
  {title: ['artist1', 'artist2']},
], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
