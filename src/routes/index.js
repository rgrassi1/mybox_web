import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withAuth from './withAuth';
import Main from '../pages/Main';
import Boxes from '../pages/Boxes';
import Box from '../pages/Box';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default () => (
    <Router>
        <Route path="/" exact component={props => withAuth(Main, props)}/>
        <Route path="/boxes" exact component={props => withAuth(Boxes, props)}/>
        <Route path="/boxes/:id" component={props => withAuth(Box, props)}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" exact component={SignUp}/>
    </Router>
)