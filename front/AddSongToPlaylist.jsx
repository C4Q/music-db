import React from 'react'
import $ from 'jquery'

const AddSongToPlaylist = React.createClass({
	getInitialState(){
		return{
			songlist: [], playlistInfo: null, playlistSongIdArray: []
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/songs',
			method: 'GET'
		})
		.done((songs)=>this.setState({songlist: songs}));
		$.ajax({
			url: '/api/playlists/'+this.props.params.playlistId,
			method: 'GET'
		})
		.done((playlistInfo)=>{
			this.setState({playlistInfo: playlistInfo});
			this.songIdArray(playlistInfo)
		})		
	},
	songIdArray(playlistInfo){
		let IdArray = playlistInfo.songs.map(element=>element.id);
		this.setState({playlistSongIdArray: IdArray})
	},
	addSongToPlaylist(songName){
		$.ajax({
			url: '/api/playlists/'+this.props.params.playlistId+'/'+songName,
			method: 'PUT'
		})
		.done(alert('Added '+songName+' !'))
	},
	removeSongFromPlaylist(songName){
		$.ajax({
			url: '/api/playlists/'+this.props.params.playlistId+'/'+songName,
			method: 'DELETE'
		})
		.done(alert('Deleted '+songName+' !'))
	},
	render(){
		return(
			<div>
				{(this.state.playlistInfo) ? 
					<p>Edit Songs To Playlist: {this.state.playlistInfo.title}</p> 
					: <p>UnNamed Playlist</p>
				}
				{(this.state.songlist) ?
				  (this.state.songlist.map((song, index)=>(
				  	<div key={index}>
				  	<p>Song Title: {song.title}</p>
				  	{(this.state.playlistSongIdArray.indexOf(song.id)==-1) ? 
				  		<button onClick={this.addSongToPlaylist.bind(this, song.title)}>ADD SONG</button>
				  		: <button onClick={this.removeSongFromPlaylist.bind(this, song.title)}>DELETE SONG</button>
				  	}
				  	</div>
				  )))
				  : <p>No songs displayed</p>
				}
			</div>
		)
	}
})

export default AddSongToPlaylist