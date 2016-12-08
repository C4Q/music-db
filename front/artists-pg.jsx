import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const ArtistsPage = React.createClass({
  getInitialState() {
    return {artists: []}
  },
  componentDidMount() {
    $.ajax({
      url: '/api/artists',
      type: 'GET'
    })
    .done((data) => {
      this.setState({artists: data})
    })
  },
  render: function() {
    return (
      <div>
        <h1>Artists</h1>
      {this.state.artists.map(function(artist, idx) {
        return (<p key={idx}>{artist.name}</p>)
      })}
      </div>
    )
  }
})

export default ArtistsPage;
