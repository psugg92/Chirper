import React, { Component } from 'react';

const Text = (props) => {

  let messages = props.message.map((chirp, index) => {
    return (
      <div className="col-sm-4" key={index}>
        <div className="card" style={{width: 18 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title">Peter</h5>
            <h6 className="card-subtitle mb-2 text-muted">Time Sent</h6>
            <p className="card-text">{chirp}</p>
          </div>
        </div>
      </div>
    );
  });
  return messages;
}


export default Text;
