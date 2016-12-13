import React from 'react';
import {Link} from 'react-router';

const Navigation = () => {
  return(
    <ul className="col-md-1 list-group">
      <Link to='/'><li className="list-group-item">Song</li></Link>
      <Link to='artist'><li className="list-group-item">Artist</li></Link>
      <Link to='playlist'><li className="list-group-item">Playlist</li></Link>
    </ul>
  )

}

export default Navigation;
