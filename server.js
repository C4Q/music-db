const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');
const routes = require('./index').routes


//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/front/bundle')))

//Test to see if the connection worked
sequelizeConnection.authenticate()
.then(() => {
  console.log('Sequelize connection successful');

  app.use('/api/albums', routes.albums)
  app.use('/api/artists', routes.artists)
  app.use('/api/genres', routes.genres)
  app.use('/api/songs', routes.songs);
  app.use('/api/playlists', routes.playlists);

  //everything else is handled in the front end
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/index.html'));
  });

  //listen on port 8888
  app.listen('9999', () => console.log('Listening on port 9999'));
})
.catch((err) => console.log('Unable to connect to the database:', err));
