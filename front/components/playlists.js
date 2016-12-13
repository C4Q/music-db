import React from 'react';
import $ from 'jquery';

import {displayPlaylists} from '../actions/playlist-action';

const Playlist = React.createClass({
  componentDidMount: function (){
    $.ajax({
      url: 'api/playlists',
      success: function (playlists) {
        console.log(playlists)
        displayPlaylists(playlists)
      }
    })
  },

// add on click or Link to to map function and pass data through props
  render: function (){
      console.log("playlists", this.props.playlists)
    return (
      <div className="mainContainer">
        <div className="artistContainer">
          <h1 className="pageTitles">PlayLits</h1>
          <ul className="listUl">
            {this.props.playlists.map(function(val, idx) {
            return <li className="listLi" key={idx}>{val.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
})

export default Playlist;
