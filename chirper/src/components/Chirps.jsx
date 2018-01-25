import React, { Component } from 'react';
import Text from './Text';


class Chirps extends Component {
    constructor(props) {
        super(props)

        
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    
                    <Text message={this.props.newMessage} />
                </div>
            </div>
        );
    }
}

export default Chirps;
