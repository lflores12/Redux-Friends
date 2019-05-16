import {
    LOGGING_IN,
    LOGIN_SUCCESS
} from '../actions'

const initialState = {
    friends: [],
    loggingIn: false
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

        default: 
        return state;
    }
};

export default friendsReducer;