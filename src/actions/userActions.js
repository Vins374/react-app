import { USER_REGISTER } from './types';
import { USER_LOGIN } from './types';
import { USER_LOGIN_BEGIN } from './types';
import { USER_LOGIN_ERROR } from './types';

export const loginUser = (userData) => dispatch => {
    dispatch(beginLogin());
    fetch('http://localhost/react-demo-php/login.php', { 
        // fetch('http://app-shoppe.alapatt.co:3000/user/login', { 
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res =>res.json())
        .then(user=>dispatch({
            type: USER_LOGIN,
            payload: user
        }))
        .catch(function() {
            dispatch(errorLogin());
        });
}

export const beginLogin = () => dispatch => {
    dispatch({type: USER_LOGIN_BEGIN});
}

export const errorLogin = () => dispatch => {
    dispatch({type: USER_LOGIN_ERROR});
}