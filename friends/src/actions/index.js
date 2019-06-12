import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const login = creds => dispatch => {
    dispatch({ type: LOGGING_IN });
     return axios
        .post('http://localhost:5000/api/login', creds)
            .then( res => {
                localStorage.setItem('token', res.data.payload);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
            })
            .catch(err => console.log(err));
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS'
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE'
export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START});
    axiosWithAuth()
        .get('/api/data')
        .then( res => {
            dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data.data});
        })
        .catch(err => {
            dispatch({ type: FETCH_FRIENDS_FAILURE});
        });
}   