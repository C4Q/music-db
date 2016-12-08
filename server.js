const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const Artist = require('./models/artist-model.js');
const Song = require('./models/song-model.js');
const Genre = require('./models/genre-model.js');
const Playlist = require('./models/playlist-model.js');

app.use(express.static(path.join(__dirname, './front/bundle')));
//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 8888
app.listen('9999', () => console.log('Listening on port 9999'));

//1.
app.get('/api/artists', (req, res) => {
  Artist.findAll()
  .then((data) => {
    res.send(data)
  })
});
//6.
app.get('/api/songs', (req, res) => {
  Song.findAll({
    include: [Artist, Genre]
  })
  .then((data) => {
    res.send(data)
  })
});
//11.
app.get('/api/playlists', (req, res) => {
  Playlist.findAll({
    include: [{model: Song,
    include: [Artist, Genre]
    }]
  })
  .then((data) => {
    res.send(data)
  })
});
//15.
app.get('/api/genres', (req, res) => {
  Genre.findAll()
  .then((data) => {
    res.send(data)
  })
});
//2.
app.get('/api/artists/:id', (req, res) => {
  Artist.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
});
//7.
app.get('/api/songs/:id', (req, res) => {
  Song.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
});
//12.
app.get('/api/playlists/:id', (req, res) => {
  Playlist.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
});
//16.
app.get('/api/genres/:id', (req, res) => {
  Genre.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
});
//3.
app.post('/api/artists', (req, res) => {
  Artist.create({name: req.body.name})
  .then((data) => {
    res.send(req.body.name)
  })
});
//8.
app.post('/api/songs', (req, res) => {
  let songid;
  return Artist.findOrCreate({
    where: {
      name: req.body.name
    }
  })
  .then((artist) => {
    return Song.findOrCreate({
      where: {
        title: req.body.title,
        artistId: artist[0].dataValues.id,
        youtube_url: req.body.youtube_url
      }
    })
  })
  .then((song) => {
    songid = song[0].dataValues.id
  })
  .then(() => {
    return Genre.findOrCreate({
      where: {
        title: req.body.genreTitle
      }
    })
  })
  .then((genre) => {
    genre[0].addSong([songid])
  })
  .then((data) => {
    res.send(data)
  })
})
//13.
app.post('/api/playlists', (req, res) => {
  Playlist.findOrCreate({
    where: {
      name: req.body.name
    }
  })
});
//17.
app.post('/api/genres', (req, res) => {
  Genre.create({title: req.body.title}, {})
  .then((data) => {
    res.send("Genre Created")
  })
});
//5.
app.put('/api/artists/:id/:newName', (req, res) => {
  Artist.update({name: req.params.newName},
    {where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.send("Name Updated")
  })
});
//9.
app.put('/api/songs/:id/:newTitle', (req, res) => {
  Song.update({title: req.params.newTitle},
    {where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.send("Title Updated")
  })
});
//18.
app.put('/api/genres/:id/:newGenre', (req, res) => {
  Genre.update({genre: req.params.newGenre},
    {where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.send("Genre Name Updated")
  })
});
//4.
app.delete('/api/artists/:id', (req, res) => {
  Artist.destroy({where: {id: req.params.id}})
  .then(data => {
    res.send(req.params.id)
  })
});
//10.
app.delete('/api/songs/:id', (req, res) => {
  Song.destroy({where: {id: req.params.id}})
  .then(data => {
    res.send("Song Deleted")
  })
});
//14.
app.delete('/api/playlists/:id', (req, res) => {
  Playlist.destroy({ where: {id: req.params.id}})
  .then(data => {
    res.send("Playlist Deleted")
  })
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});
