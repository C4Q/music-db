import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Navbar = React.createClass({
  render: function (){
    return (
      <div>
        <nav>
          <p className="brand"><span>mel</span>odies</p>
          <div>
            <ul>
              <li className="navLinks"><Link to="/artist">Artists</Link></li>
              <li className="navLinks"><Link to="/song">Songs</Link></li>
              <li className="navLinks"><Link to="/playlists">Playlists</Link></li>
              <li className="navLinks"><Link to="/createPlaylist">Create playlist</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
})

export default Navbar
