import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import YTSearch from 'youtube-api-search';
import Playlist from '../playlist.js';
import VideoDetail from '../video-detail';

const API_KEY= "AIzaSyDXG0ix7GCK3i4l52t-XsY-_8pw3MBiL08";

export default class SongPage extends Component {
  constructor (props) {
    super(props)

    this.state = {list: []}
    this.videoSearch("redbone");
  }

  render () {

    if(this.state.list){
      return (
          <div id="top">
            <VideoDetail video={this.state.selectedVideo}/>
            <Playlist list={this.state.list}
              onSongSelect={this.handleSelect.bind(this)} />
          </div>
      )
    }

  else {
    return(<div>Loading</div>)
  }

  }

  componentWillMount () {
    let that = this
    $.ajax({
      url: "/api/songs",
      success: function (data) {
        that.setState({list: data})
      }
    })
  }

  handleSelect(video) {
    // this.setState({selectedVideo: video})
    this.videoSearch(video.title)
  }

  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term} , (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        } )
    });

  }

  filterSelect (filter) {
    let that = this
    $.ajax({
      url: "/api/"+ filter ,
      success: function (data) {
        // that.setState({list: data})
        console.log(data)
      }
    })
  }

}
