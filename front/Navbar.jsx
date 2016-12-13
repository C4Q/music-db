import React from 'react';
import {Link} from 'react-router';
// import './Nav.css'
// import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css';

{/*NAVIGATION BAR*/}
var Navbar = React.createClass({
  render: function() {
    return (
    <div>

       { /*FIRST NAV*/}
      <nav className="navbar main">
          <div className="logo col-xs-3">
            <a href="/" className="logoWidth">
             <img src= "http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" />
            </a>
          </div>
      </nav>

      { /*SECOND NAV*/}
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/artists">Artists</Link></li>
              <li className="linetext"><Link to="/songs">Songs</Link></li>
              <li className="linetext"><Link to="/songs/newsong">NewSongs</Link></li>
              <li className="linetext"><Link to="/playlists">Playlists</Link></li>  
              <li className="linetext"><Link to="/playlists/newPlaylist">NewPlaylist</Link></li>  
            </ul>




          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})

export default Navbar;
