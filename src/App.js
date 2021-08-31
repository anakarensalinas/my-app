import React, { Component } from 'react';
import Photo from "./components/Photo.js";

class App extends Component {
  state = {
    photo: ""
  };
  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=73VmakIZ9pAeE8qbzb4y6J1UCd0h6AZUwwUdRqLn')
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }
  render() {
    return (
      <div>
        <h1>NASA Astronomy Picture of the Day</h1>
        <Photo photo={this.state.photo}/>
      </div>
    );
  }
}
export default App;
