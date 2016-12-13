import React from 'react';
var $ = require('jquery');

var Artists = React.createClass({
 getInitialState() {
    return ({artist: []})
  },

componentDidMount: function () {
    $.ajax({
      url: "/api/artists",
      method: 'GET',
    })
    .done((data)=>this.setState({artist:data}))
  },
  
  render() {
    return (
      <div className="container">
	      <h1>FEATURE ARTIST LIST</h1>
	      {this.state.artist.map((ele,i)=>{
	        return <li key={i}>
	                 {ele.id +'   '} 
	                 {ele.name}
	               </li>
	      })}
      </div>
    )
  }
})



export default Artists;

