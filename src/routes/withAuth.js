/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom'; 
import { checkAuth } from '../actions';
import UserContext from '../context';

const Component = (Component, props) => {

    const { state, dispatch } = useContext(UserContext);
    
    useEffect(() => {
        checkAuth(dispatch)
    }, [])    

    return (
        state.isAuth 
            ? <Component {...props}/> 
            : <Redirect to={{ 
                pathname: '/signin', 
                state: { from: props.location } 
            }}/>        
    )
}

export default Component;