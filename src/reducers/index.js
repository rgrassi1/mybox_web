import { SIGNED_USER, SIGN_USER_FAILED } from './types';

export const userReducer = (state, action) => {
    switch(action.type) {
        case SIGNED_USER: {
            return { ...state, isAuth: true, user: action.payload, error: false, msgError: null }
        }  
        case SIGN_USER_FAILED: {
            return { ...state, isAuth: false, user: null, error: true, msgError: action.payload }
        }  
        default:
            return state    
    }
}