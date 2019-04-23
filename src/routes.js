import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main'

const Routes = () => (
    <Fragment>
        <Router>
            <Route path="/" exact component={Main}/>
        </Router>
    </Fragment>
)

export default Routes