import React, { useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import './styles.css';

const Main = props => {

    const [box, setBox] = useState({
        title: '',
        email: ''
    })

    const handleChange = fieldname => event => {
        setBox({ [fieldname]: event.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await api.post('/boxes', box);
        console.log(response.data);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="" />
                <input placeholder="E-mail" required value={box.email} onChange={handleChange('email')}/>
                <input placeholder="Criar um box" required value={box.title} onChange={handleChange('title')}/>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default Main