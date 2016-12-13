import React from 'react';
import $ from 'jquery';

import {displaySongs} from '../actions/song-action.js';

const Song = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: 'api/songs/',
      success: function(songs) {
        displaySongs(songs);
      }
    })
  },
  render: function(){
    return (
      <div className="mainContainer">
        <div className="songContainer">
            {this.props.songs.map(function(val, idx) {
              console.log('VAL:', val.artist.name)
              return (
                <div key={idx} className="individualSong">
                  <h1 className="songName">{val.title}</h1>
                  <h2 className="songArtist">by {val.artist.name}</h2>
                  <iframe id="ytplayer" type="text/html" width="500" height="300"
                  src={`${val.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
})

export default Song;
