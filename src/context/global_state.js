import React, { useReducer, useEffect } from 'react';
import MyBoxContext from './';
import { userReducer } from '../reducers';
import { checkAuth } from '../actions';

const GlobalState = props => {

    const INITIAL_STATE = { 
        user: null,
        isAuth: false,
        error: false,
        msgError: null
    };

    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    useEffect(() => {
        checkAuth(dispatch);
    }, [])

    return (
        <MyBoxContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyBoxContext.Provider>
    )
}

export default GlobalState;