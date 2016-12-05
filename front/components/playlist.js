import React from 'react';
import ListItem from './list-item';

const Playlist = (props) => {
    console.log(props)

  const items = props.list.map((song,onSongSelect) => {
    return (
      <ListItem
        song={song}
        onSongSelect = {props.onSongSelect}
        key={song.id}  />
    )
  });

  return(
    <ul className="col-md-4 list-group">
    {items}
    </ul>
  )
}

export default Playlist;
