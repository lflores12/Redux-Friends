import React from 'react';
import connect from 'react-redux';

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

    };

    render() {
        return (
            <div>
                <h2>Please Log in</h2>
                <form>
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

                    <button> Log in </button>
                </form>
            </div>
        );
    }
}

export default Login;

