const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('../models/song-model');
const Genre = require('../models/genre-model');
// const SongGenre = require('./models/song-genre-model');



//Song.sync will create the songs table
Song.sync({force: true})
.then(() => sequelizeConnection.sync())
//add the following three artists to the database:

// Frank Ocean -- Swim Good
.then((data) => Song.create(
  {title: 'Swim Good', youtube_url: 'https://www.youtube.com/watch?v=PmN9rZW0HGo', artistId: 1, projectId: 1}
))
.then((song) => {
  //use an automatically created 'accessor' method (addGenres) to add the genres
  song.addGenres([1]);
  song.addProducers([4]);
  // To add features use song.addArtists([:id])
})

// Odesza -- My Friends Never Die
.then(() => Song.create(
  {title: 'Nights', youtube_url: 'https://open.spotify.com/track/7eqoqGkKwgOaWNNHx90uEZ', artistId: 1, projectId: 3}
))
.then((song) => {
  song.addGenres([1]);
  song.addProducers([5]);
})

// Nas -- NY State of Mind
.then(() => Song.create(
  {title: 'Super Rich Kids', youtube_url: 'https://www.youtube.com/watch?v=ggiyRLrH4AA', artistId: 1, projectId: 2}
))
.then((song) => {
  song.addGenres([1]);
  song.addProducers([6, 7, 8]);
  song.addArtists([4])
})
// //the following artists should NOT be added to your database:
// //(if your validations are setup correctly)
// .then(() => Song.bulkCreate([
//   {title: ''},
//   {title: ['artist1', 'artist2']},
// ], {validate: true}))
// if everything is correct, you should only have THREE artists in your database
.catch((err) => console.log(err));
