import React, { useState, useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import {
    NewBoxContainer,
    NewBoxFormContainer
} from './styles';

const Main = props => {

    const { state } = useContext(UserContext);

    const [box, setBox] = useState({ title: '', email: '' })
    const [created, setCreated] = useState(false);

    const handleChange = fieldname => event => {
        const newBox = { ...box, [fieldname]: event.target.value }
        setBox(newBox)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await api.post('/boxes', box);
        setBox({ ...box, id: response.data._id });
        setCreated(true);
    }

    if (!state.isAuth) {
        return <Redirect to="/signin"/>
    }

    return (
        <Fragment>    
            { created && <Redirect to='/boxes' /> }
            { !created &&
                <NewBoxContainer>
                    <NewBoxFormContainer onSubmit={handleSubmit}>
                        <img src={logo} alt="" />
                        <input placeholder="E-mail" required value={box.email} onChange={handleChange('email')}/>
                        <input placeholder="Criar um box" required value={box.title} onChange={handleChange('title')}/>
                        <button type="submit">Criar</button>
                    </NewBoxFormContainer>
                </NewBoxContainer>
            }
        </Fragment>
    )
}

export default Main