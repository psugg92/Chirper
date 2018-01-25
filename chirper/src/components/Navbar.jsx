import React, { Component } from 'react';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand font-weight-bold" href="#">
            <img src="../assets/ChirperLogo.svg" width="75" height="45" className="d-inline-block align-top" alt="" />
            Chirper
            </a>
        </nav>
    );
  }
}

export default Navbar;
