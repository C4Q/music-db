import React from 'react';
var $ = require('jquery');

const Songs = React.createClass({
	getInitialState(){
		return ({song:[]})
	},

componentDidMount: function () {
	$.ajax({
		url: "/api/songs",
		method: 'GET',
	})
	.done((data)=>{this.setState({song:data})})
},
render(){
	return(
		<div>
			<h1>FEATURES SONGS</h1>
			{this.state.song.map((ele,i)=>{
				{
					return <div key={i}>
								<h3>Title: {ele.title}</h3>
								<h3>Artist Name: {ele.artist.name}</h3>
								<iframe width="420" height="315"src={`${ele.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
					       </div>
				}
			})}
		</div>
		)
}
})

export default Songs