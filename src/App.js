import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Boxes from './pages/Boxes';
import Box from './pages/Box';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global'

const App = () => { 
    return (
        <Router>
            <GlobalStyle />
            <Route path="/" exact component={Main}/>
            <Route path="/boxes" exact component={Boxes}/>
            <Route path="/boxes/:id" component={Box}/>
            <Route path="/signin" component={SignIn}/>
        </Router>
    )
}

export default App;