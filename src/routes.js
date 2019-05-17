import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Boxes from './pages/Boxes';
import Box from './pages/Box';

const Routes = () => (
    <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/boxes/:id" exact component={Box}/>
        <Route path="/boxes" exact component={Boxes}/>
    </Router>
)

export default Routes