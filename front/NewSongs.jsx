import React from 'react'
import $ from 'jquery'

const NewSongs = React.createClass({
  getInitialState(){
  	return{
  	title: '', url:'', genre:'', artist:''
  	}
  },
  handelChange(eventType, event){
  	this.setState({[eventType]: event.target.value})
  },
  createSong(){
  	$.ajax({
  		url: '/api/songs',
  		method: 'POST',
  		data: {
  			title: this.state.title,
  			artistName: this.state.artist,
  			genre: this.state.genre,
  			youtube_url: this.state.url
  		}
  	})
  	.done(()=>alert('Created song with title: '+this.state.title+', artist: '+this.state.artist+', genre: '+this.state.genre+', url: '+this.state.url))
  	.then(()=>this.setState({title: '', url:'', genre:'', artist:''}))
  },
	render(){
		console.log(this.state)
		return(
			<div>
				<h1>New Song:</h1>
				<input type="text" placeholder="Title of song" onChange={this.handelChange.bind(this, 'title')} value={this.state.input}/>
				<input type="text" placeholder="Youtube URL" onChange={this.handelChange.bind(this, 'url')} value={this.state.input}/>
				<input type="text" placeholder="Artist" onChange={this.handelChange.bind(this, 'artist')} value={this.state.input}/>
				<input type="text" placeholder="Genre" onChange={this.handelChange.bind(this, 'genre')} value={this.state.input}/>
				<input type="button" value="SAVE" onClick={this.createSong}/>
			</div>
			)
	}
})

export default NewSongs