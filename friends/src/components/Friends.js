import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';
class Friends extends React.Component {

    componentDidMount(){
        this.props.getFriends();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    getFriends: state.getFriends
})

export default connect(mapStateToProps, { getFriends }) (Friends);