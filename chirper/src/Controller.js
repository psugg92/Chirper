import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Chirps from './components/Chirps';

class Controller extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newMessage: "",
      chirpArray: ["Third Chirp", "Second Chirp", "Hello World"]
    }
  }

  handleButtonClick(value) {
    const currentChirps = [...this.state.chirpArray];
    currentChirps.unshift(value);
    this.setState({ chirpArray: currentChirps });
    
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <input 
            className="form-control mt-5" 
            type="text" 
            placeholder="Enter New Chirp"
            value={this.state.newMessage}
            onChange={(event) => { this.setState({newMessage: event.target.value})}} />
        </div>
        <div className="container">
          <button className="btn btn-success mt-3"
          onClick={() => { this.handleButtonClick(this.state.newMessage)}} >
          Chirp!
          </button>
        </div>

        <Chirps newMessage={this.state.chirpArray} />
      </div>
    );
  }
}

export default Controller;