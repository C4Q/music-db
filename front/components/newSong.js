import React from 'react';
import $ from 'jquery';

const NewSong = React.createClass({
  getInitialState() {
    {title: null, youtube_url: null}
  },

  handleSubmit() {
    $.ajax({
      url: '/api/songs',
      method: 'POST'
      data: {
        title: this.state.title,
        youtube_url: this.state.youtube_url
      }
    })
  },

  handleChange(e) {
    this.setState({title: e.target.value, youtube_url: e.target.value})
  },

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label for='title'>
        <input type="text" id='title' onChange={this.handleChange.bind(this, e)} placeholder='Enter the title of the song here' />

        <label for='youtube_url'>
        <input type="text" id='youtube_url' placeholder='Enter the Youtube url for the song here' />
        <input type='submit' />
      <form />
    )
  }
})

export default NewSong;
