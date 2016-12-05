const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//Models
const Artist = require('./models/artist-model')
const Genre = require('./models/genre-model')
const Playlist = require('./models/playlist-model')
const Song = require('./models/song-model')

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 9999
app.listen('9999', () => console.log('Listening on port 9999'));


//////////
// YOUR CODE HERE:
//////////

//GET all artists, ordered a-z
app.get('/api/artists', (req, res) => {
  Artist.findAll({
    order: [
      ['name', 'ASC']
    ]
  })
  .then(artists => {
    res.send(artists)
  })
})

//GET a specific artist by id
app.get('/api/artists/:id', (req, res) => {
  Artist.findById(req.params.id)
  .then(artist => {
    res.send(artist)
  })
})

//POST (create a new artist)
app.post('/api/artists', (req, res) => {
  var artist = req.body.artist
  Artist.create({name: artist})
  .then(() => {
    res.send('A new artist has been created!')
  })
})

//DELETE an artist by id
app.delete('/api/artists/:id', (req, res) => {
  var artistId = req.params.id
  Artist.findById(artistId)
  .then((artist) => {
    artist.destroy()
    res.send('Artist has been deleted!')
  })
})

//Update a specific artist name (using the PUT HTTP verb to send the request)
app.put('/api/artists/:id/:newName', (req, res) => {
  var artistId = req.params.id
  var newName = req.params.newName
  Artist.findById(artistId)
  .then((artist) => {
    artist.update({
      name: newName
    })
    .then(() => {
      res.send('The specified field has been updated.')
    })
  })
})

//GET all songs with genre and artist information
//fully populated (in other words, should say full
//artist name and genre names, instead of only having
//the ids)
app.get('/api/songs', (req, res) => {
  Song.findAll({
    include: [{
      model: Genre
    },
  {
    model: Artist
  }]
  })
  .then((songs) => {
    res.send(songs)
  })
})

//GET specific song by id
app.get('/api/songs/:id', (req, res) => {
  Song.findById(req.params.id, {
    include: [{
      model: Artist
    }]
  })
  .then((song) => {
    res.send(song)
  })
})

//POST (create) a new song
app.post('/api/songs', (req, res) => {
  var newSong = req.body.title;
  var youtubeLink = req.body.url;
  var genreId = req.body.id
  Song.create({
    title: newSong,
    youtube_url: youtubeLink
  })
  .then((song) => {
    song.addGenre(genreId)
    res.send('A new song was created!')
  })
})

//PUT (update) a specific song's title
app.put('/api/songs/:id/:newTitle', (req, res) => {
  var songId = req.params.id;
  var newTitle = req.params.newTitle;
  Song.findById(songId)
  .then((song) => {
    song.update({title: newTitle})
    res.send('The songs title has been updated')
  })
})

//DELETE a specific song by id
app.delete('/api/songs/:id', (req, res) => {
  var songId = req.params.id;
  Song.findById(songId)
  .then((song) => {
    song.destroy()
    res.send('The selected song has been deleted')
  })
})

//GET all playlists with song information fully populated
//(in other words, should say full song,
//artist, and genre names, instead of only
//having the ids)
app.get('/api/playlists', (req, res) => {
  Playlist.findAll({
    include: [{
      model: Song,
      include: [{
        model: Artist
      },
      {
        model: Genre
      }]
    }]
  })
  .then((playlists) => {
    res.send(playlists)
  })
})

//GET a specific playlist by id
app.get('/api/playlists/:id',(req, res) => {
  var listId = req.params.id;
  Playlist.findById(listId, {
    include: [{
      model: Song,
      through: {
        attributes: ['playlistId'],
        where: {playlistId: listId}
      }
    }]
  })
  .then((playlist) => {
    res.send(playlist)
  })
})

//???????????????//
//POST (create) a new playlist
app.post('/api/playlists', (req, res) => {
  var newPlaylist = req.body.list;
  var title = req.body.title;
  var url = req.body.url;
  Playlist.create({title: newPlaylist})
  .then((playlist) => {
    playlist.addSongs({
        title: title,
        youtube_url: url
    })
  })
  .then(() => {
    res.send('Your playlist has been created!')
  })
})

//DELETE a playlist by id
app.delete('/api/playlists/:id', (req, res) => {
  var playlistId = req.params.id;
  Playlist.findById(playlistId)
  .then((playlist) => {
    playlist.destroy()
    res.send('Playlist successfully deleted!')
  })
})
