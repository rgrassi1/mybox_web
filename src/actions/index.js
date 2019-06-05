import api from '../services/api';
import { SIGNED_USER, SIGN_USER_FAILED } from '../reducers/types';
import jwtDecode from 'jwt-decode';

export const signIn = async(dispatch, credentials) => {
    try {
        const response = await api.post('/user/signin', credentials);
        if (response.data.token) {
            const token = response.data.token;
            localStorage.setItem('mybox_token', token);
            const user = jwtDecode(token);
            localStorage.setItem('mybox_user', JSON.stringify(user));
    
            dispatch({ type: SIGNED_USER, payload: user})
        } else {
            dispatch({ type: SIGN_USER_FAILED, payload: response.data.message })
        }    
    } catch(err) {
        dispatch({ type: SIGN_USER_FAILED, payload: err })
    }
} 

export const checkAuth = dispatch => {
    const token = localStorage.getItem('mybox_token');
    if (token) {
        try {
            const user = jwtDecode(token);        
            dispatch({ type: SIGNED_USER, payload: user })
        } catch(err) {
            dispatch({ type: SIGN_USER_FAILED, payload: err })
        }
    } else {
        dispatch({ type: SIGN_USER_FAILED, payload: "no token" })
    }
}