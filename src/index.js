import React from 'react';
import ReactDOM from 'react-dom';
import GlobalState from './context/global_state';
import App from './App';
import api from './services/api'; 
api.init();

ReactDOM.render(
    <GlobalState>
        <App />
    </GlobalState>, 
    document.getElementById('root')
);