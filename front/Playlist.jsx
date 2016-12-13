import React from 'react'
import $ from 'jquery'

const Playlist = React.createClass({
	getInitialState(){
		return{
			playlist: null
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/playlists/'+this.props.params.playlistId,
			method: 'GET'
		})
		.done((data)=>
			this.setState({playlist: data})
			)
	},
	deleteSongFromPlaylist(id){
		$.ajax({
			url: '/api/playlists/'+this.props.params.playlistId+'/'+id,
			method: 'DELETE'
		})
		.done(()=>alert('Song Id:'+id+' deleted from playlist!'))
	},
	render(){
		console.log(this.state.playlist)
		return(
			this.state.playlist ? 
			(<div>
			<h1>Playlist Title: {this.state.playlist.title}</h1>
				{this.state.playlist.songs.map((song, index)=>
					<div key={index}>
						<h3>Title: {song.title}</h3>
						<h3>Artist: {song.artist.name}</h3>
						<h3>Genres: {song.genres.map((genre, index)=><p key={index}>{genre.title}</p>)}</h3>
						<h3>Creation Date: {song.createdAt}</h3>
						<iframe width="420" height="315"src={`${song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
						<br/>
						<input type="button" value="-REMOVE SONG" onClick={this.deleteSongFromPlaylist.bind(this,song.title)}/>
					</div>
				)}
			</div>) 
			: <p>No Playlists!</p>
		)
	}
})

export default Playlist