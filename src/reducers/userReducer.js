import { USER_LOGIN } from '../actions/types';
import { USER_REGISTER } from '../actions/types';

const initialState = {
    registerData: {},
    loginData: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loginData: action.payload
            };
        case USER_REGISTER:
        
            return {
                ...state,
                registerData: action.payload
            };
        default:
            return state;
    }
}