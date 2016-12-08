import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const SongsPage = React.createClass({
  getInitialState() {
    return {songs: []}
  },
  componentDidMount() {
    $.ajax({
      url: '/api/songs',
      type: 'GET'
    })
    .done((data) => {
      this.setState({songs: data})
    })
  },
  render: function() {
    return (
      <div>
        <h1>Songs</h1>
        {this.state.songs.map(function(song, idx) {
          return (<p key={idx}>{song.title, song.youtube_url}</p>)
        })}
      </div>
    )
  }
})

export default SongsPage;
