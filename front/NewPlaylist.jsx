import React from 'react'
import $ from 'jquery'

const NewPlaylist = React.createClass({
  getInitialState(){
  	return{
  	input: ''
  	}
  },
  handelChange(event){
  	event.preventDefault();
  	this.setState({input: event.target.value})
  },
  createPlaylist(){
  	$.ajax({
  		url: '/api/playlists',
  		method: 'POST',
  		data: {title: this.state.input}
  	})
  	.done(()=>alert('Created Playlist with name: '+this.state.input))
  	.then(()=>this.setState({input: ''}))
  },
	render(){
		console.log(this.state.input)
		return(
			<div>
				<h1>Create Playlist</h1>
				<input type="text" placeholder="Name of Playlist" onChange={this.handelChange} value={this.state.input}/>
				<input type="button" value="SAVE" onClick={this.createPlaylist}/>
			</div>
			)
	}
})

export default NewPlaylist