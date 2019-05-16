import React from 'react';
import {connect} from 'react-redux';

import {login} from '../actions';

class Login extends React.Component {
    
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        });
        
    };

    render() {
        return (
            <div>
                <h2>Please Log in</h2>
                <form onSubmit ={this.login}>
                    <input
                        type= 'text'
                        name = 'username'
                        value= {this.state.credentials.username}
                        onChange = {this.handleChange}
                        placeholder = 'Username'
                    /> 

                    <input
                        type= 'password'
                        name = 'password'
                        value= {this.state.credentials.password}
                        onChange = {this.handleChange}
                        placeholder = 'Password'
                    />  

                    <button> {this.props.loggingIn ? ('Logging You In'): ('Login') }</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggingIn: state.logginIn
})

export default connect (mapStateToProps,{login})(Login);

