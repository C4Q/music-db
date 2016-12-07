import React from 'react';
import SongListItem from './song-list-item';

import Navigation from './navigation';

const styles = {
  "max-height": "450px",
  "overflow": "scroll"
}

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
    <div className="scroll col-md-3">
      <ul style={styles}>
      {items}
      </ul>
    </div>
  )
}

export default SongList;
