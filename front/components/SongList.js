import React from 'react';
import SongListItem from './song-list-item';

import Navigation from './navigation';

const SongList = (props) => {
  const items = props.list.map((song,onSongSelect) => {
    return (
      <SongListItem
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

export default SongList;
