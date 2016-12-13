import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

const Playlists = React.createClass({
  getInitialState(){
    return {playlists:[]}
  },
  componentDidMount(){
  $.ajax({
  	url: '/api/playlists',
  	method: 'GET',
  })
  .done(data=>this.setState({playlists: data}))
  },
  deletePlaylist(id){
  $.ajax({
  	url: '/api/playlists'+id,
  	method: 'DELETE',
  })
  .done(()=>alert('Playlist Id:'+id+' deleted!'))
  },
	render(){
		return(
			<div>
			  <h3>List of Playlists:</h3>
        <Link to='/playlists/newPlaylist'><input type="button" value="+CREATE NEW PLAYLIST" /></Link>
				{this.state.playlists.map((element, index)=>(
					<div key={index}>
						<Link to={'/playlists/'+element.id}><h3>{element.title}</h3></Link>
						<Link to={'/playlists/'+element.id+'/songs'}><input type="button" value="+ADD SONG" /></Link>
						<input type="button" value="-DELETE PLAYLIST" onClick={this.deletePlaylist.bind(this,element.id)}/>
					</div>
				))
				}
			</div>
			)
	}
})

export default Playlists