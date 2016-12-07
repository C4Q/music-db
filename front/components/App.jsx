import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navigation from './navigation';

const API_KEY= "AIzaSyDXG0ix7GCK3i4l52t-XsY-_8pw3MBiL08";

class App extends React.Component {

  render () {

      return (
        <div>
          <Navigation />
          <div id="top">
            {this.props.children}
          </div>
        </div>
      )
  }
}

export default App;
