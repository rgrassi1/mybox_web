import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Main from '../pages/Main';
import Boxes from '../pages/Boxes';
import Box from '../pages/Box';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Page404 from '../pages/Page404';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={props => withAuth(Main, props)}/>
            <Route path="/boxes" exact component={props => withAuth(Boxes, props)}/>
            <Route path="/boxes/:id" component={props => withAuth(Box, props)}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route component={Page404}/>
        </Switch>
    </Router>
)