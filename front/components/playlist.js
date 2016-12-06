import React from 'react';
import ListItem from './list-item';
import Navigation from './navigation';
const Playlist = (props) => {
  const items = props.list.map((song,onSongSelect) => {
    return (
      <ListItem
        song={song}
        onSongSelect = {props.onSongSelect}
        key={song.id}  />
    )
  });

  return(
    <ul className="col-md-3 list-group">
    {items}
    </ul>
  )
}

export default Playlist;
