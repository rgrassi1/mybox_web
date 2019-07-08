import { SIGNED_USER, SIGN_USER_FAILED, UNSIGNED_USER } from './types';

export const userReducer = (state, action) => {
    switch(action.type) {
        case SIGNED_USER: {
            return { ...state, isAuth: true, user: action.payload, error: false, message: null }
        }  
        case SIGN_USER_FAILED: {
            return { ...state, isAuth: false, user: null, error: true, message: action.payload }
        }  
        case UNSIGNED_USER: {
            return { ...state, isAuth: false, user: null, error: false, message: null }
        }
        default:
            return state    
    }
}