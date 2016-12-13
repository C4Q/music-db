import React from 'react';

const CreatePlaylist = React.createClass({
  render: function (){
    return (
      <div className="mainContainer">
        <div>
          <h1 className="pageTitles">Create a playlit</h1>
          <form>
            <label for="playlistName">Playlist Name</label>
            <input id="playlistName" type="text"></input>
            <label for="songTitle">Song Title</label>
            <input id="songTitle" type="text"></input>
          </form>
        </div>
      </div>
    )
  }
})

export default CreatePlaylist
