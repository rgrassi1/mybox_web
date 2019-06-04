import React, { useReducer, useEffect } from 'react';
import MyBoxContext from './';
import { userReducer } from '../reducers';
import { initUser } from '../actions';

const GlobalState = props => {

    const INITIAL_STATE = { 
        user: null,
        isAuth: false,
        error: false,
        errorMsg: null
    };

    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    useEffect(() => {
        initUser(dispatch);
    }, [])

    return (
        <MyBoxContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </MyBoxContext.Provider>
    )
}

export default GlobalState;