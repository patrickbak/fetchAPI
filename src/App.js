import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    text: "wpisz datę",
    error: "404"
  }

  handleDateChange = (e) => {
    const value = this.refs.number.value;
    console.log(value);
    fetch(`http://numbersapi.com/${value}/year?json`)
    // Response
    .then(res => {
      if(res.ok) {
        return res
      }
      throw Error(res.status)
      console.log(res)})
    .then(res => res.json()).then(data => this.setState({
      text: "W tym roku: " + data.text
    })).catch(err => {
      this.setState({text: "Jest problem :( " + err})
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleDateChange} type="text" ref="number" />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
