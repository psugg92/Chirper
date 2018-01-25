import React, { Component } from 'react';

class SubmitButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicker: false
        }
    }

  render() {
    return (
      <div className="container">
        <button className="btn btn-success mt-3"
        onClick={(event) => { this.setState({clicker: true})}} >
        Chirp!
        </button>
      </div>
    );
  }
}

export default SubmitButton;
