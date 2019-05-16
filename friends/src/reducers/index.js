import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
} from '../actions'

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    error: ''

}

 const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            };
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                error: '',
                friends: action.payload,
                fetchingFriends: false
            };
        default: 
            return state;
    }
};

export default friendsReducer;