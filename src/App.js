import React, { Component } from 'react';
import moment from "moment";
import Photo from "./components/Photo.js";
import CalendarPicker from "./components/CalendarPicker";

class App extends Component {
  state = {
    photo: "",
    date: new Date()
  };

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=73VmakIZ9pAeE8qbzb4y6J1UCd0h6AZUwwUdRqLn')
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  formatDate = date => {
    let year = date.year();
    let month = date.month() + 1;
    let day = date.date();
    return `${year}-${month}-${day}`;
    }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=73VmakIZ9pAeE8qbzb4y6J1UCd0h6AZUwwUdRqLn`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    this.getPhoto(this.formatDate(dateFromInput));
  };
  
  render() {
    return (
      <div>
        <h1>NASA Astronomy Picture of the Day</h1>
        <CalendarPicker
          changeDate={this.changeDate}
          date={this.state.date}
        />
        <Photo photo={this.state.photo}/>
      </div>
    );
  }
}
export default App;
