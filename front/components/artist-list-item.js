import React from 'react';

const ArtistListItem = ({data,handleSelect}) => {
  return (
    <li className="list-group-item" onClick={handleSelect.bind(this,data.name)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={"http://image.flaticon.com/icons/png/128/92/92974.png"} />
        </div>
        <div className="media-body">
          <div className="media-heading">{data.name}</div>
        </div>
      </div>
    </li>
  )

}


export default ArtistListItem;
