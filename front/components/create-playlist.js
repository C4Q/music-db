import React from 'react';
import $ from 'jquery;'

const CreatePlaylist = React.createClass({
  handleSubmit() {
    let that = this;
    $.ajax({
      url: '/api/playlists',
      method: 'POST',
      data: {title:       }
    })
  },
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Name of new playlist'/>
        <input type='submit'/>
      </form>
    )
  }
})

export default CreatePlaylist;
