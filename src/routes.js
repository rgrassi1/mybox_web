import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main';
import Boxes from './pages/Boxes';
import Box from './pages/Box';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserContext from './context';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(UserContext);
    return  (
        <Route {...rest } render={props => (
            state.isAuth 
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )}/>    
    )
}

export default Routes => (
    <Router>
        <PrivateRoute path="/" exact component={Main}/>
        <PrivateRoute path="/boxes" exact component={Boxes}/>
        <PrivateRoute path="/boxes/:id" component={Box}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
    </Router>
)