import { USER_REGISTER } from './types';
import { USER_LOGIN } from './types';

export const loginUser = (userData) => dispatch => {
    // fetch('http://localhost:3000/user/login', { 
        fetch('http://app-shoppe.alapatt.co:3000/user/login', { 
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
        }));
}