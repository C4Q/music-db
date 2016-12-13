import React from 'react';
import $ from 'jquery';

import {displayArtists} from '../actions/artist-actions';

const Artist = React.createClass({
// START HERE:
// sends an ajax request to our backend
// from here: displayArtists action
  componentDidMount: function() {
    $.ajax({
      url: '/api/artists/',
      type: "GET",
      success: function(artists) {
        console.log(artists);
        // Sends data to our store
        displayArtists(artists);
      }
    })
  },
  render: function () {
    console.log('PROPS:', this.props.artists)
    return (
      <div className="mainContainer">
        <div className="artistContainer">
          <h1 className="pageTitles"><i className="em em-fire"></i>Artists<i className="em em-fire"></i></h1>
          <ul className="listUl">
            {this.props.artists.map(function(val, idx) {
            return <li className="listLi" key={idx}>{val.name}</li>})}
          </ul>
        </div>
      </div>
    )
  }
})

export default Artist;
