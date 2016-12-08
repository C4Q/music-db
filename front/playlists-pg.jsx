import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const PlaylistPage = React.createClass({
  getInitialState() {
    return {playlists: []}
  },
  componentDidMount() {
    $.ajax({
      url: '/api/playlists',
      type: 'GET'
    })
    .done((data) => {
      this.setState({playlists: data})
    })
  },
  render: function() {
    return (
      <div>
        <h1>Playlist</h1>
        {this.state.playlists.map(function(playlist, idx) {
          return (<p key={idx}>{playlist.title}</p>)
        })}
      </div>
    )
  }
})

export default PlaylistPage;
