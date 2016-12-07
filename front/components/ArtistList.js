import React from 'react';
import ArtistListItem from './artist-list-item';
import Navigation from './navigation';

const styles = {
  "max-height": "450px",
  "overflow": "scroll"
}

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
    <div className="scroll col-md-3">
      <ul style={styles}>
      {items}
      </ul>
    </div>
  )
}

export default ArtistList;
