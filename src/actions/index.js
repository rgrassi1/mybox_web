import api from '../services/api';
import { SIGNED_USER, SIGN_USER_FAILED, INIT_USER } from '../reducers/types';
import jwtDecode from 'jwt-decode';

export const signIn = async(dispatch, credentials) => {
    try {
        var response = await api.post('/user/signin', credentials);

        const token = response.data.token;
        localStorage.setItem('mybox_token', token);
        const user = jwtDecode(token);
        localStorage.setItem('mybox_user', JSON.stringify(user));

        dispatch({ type: SIGNED_USER, payload: user})
    } catch(err) {
        dispatch({ type: SIGN_USER_FAILED, payload: err })
    }
} 

export const initUser = dispatch => {
    const user = localStorage.getItem('mybox_user');
    if (user) {
        dispatch({ type: INIT_USER, payload: user })
    } 
}