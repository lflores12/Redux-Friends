import React from 'react';
import { connect } from 'react-router';

class Friends extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello from protected Router</h1>
            </div>
        );
    }
}

export default Friends;