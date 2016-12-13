import React from 'react';

const SongListItem = ({song, onSongSelect}) => {

  const videoUrl = song.youtube_url;

  return (
    <li onClick={onSongSelect.bind(this,song)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={"http://image.flaticon.com/icons/png/128/92/92974.png"} />
        </div>
        <div className="media-body">
          <div className="media-heading">{song.title}</div>
        </div>
      </div>
    </li>
  )

}


export default SongListItem;
