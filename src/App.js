import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Boxes from './pages/Boxes';
import Box from './pages/Box';
import GlobalStyle from './styles/global'

const App = () => { 
    return (
        <Router>
            <GlobalStyle />
            <Route path="/" exact component={Main}/>
            <Route path="/boxes" exact component={Boxes}/>
            <Route path="/boxes/:id" component={Box}/>
        </Router>
    )
}

export default App;