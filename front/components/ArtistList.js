import React from 'react';
import ArtistListItem from './artist-list-item';
import Navigation from './navigation';

const ArtistList = (props) => {
  const items = props.list.map((data) => {
    return (
      <ArtistListItem
        handleSelect={props.handleSelect.bind(this)}
        data={data}
        key={data.id}  />
    )
  });

  return(
    <ul className="col-md-3 list-group">
    {items}
    </ul>
  )
}

export default ArtistList;
