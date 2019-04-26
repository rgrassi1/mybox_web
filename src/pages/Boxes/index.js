import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import './styles.css';

const Boxes = props => {

    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBoxes();
    }, [])

    const fetchBoxes = async() => {
        setLoading(true);
        const response = await api.get('/boxes');
        setLoading(false);
        setBoxes(response.data);
    }

    const renderBox = box => {
        const data = new Date(box.createdAt);
        const dataFmt = `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`
        return (
            <li key={box._id}>
                <span><strong><Link to={`/boxes/${box._id}`}>{box.title}</Link></strong></span>
                <span style={{ minWidth: 200 }}>{box.email}</span>
                <span>{dataFmt}</span>
            </li>
        )
    }

    return (
        <div className='boxes-container'>
            <header>
                <img src={logo} alt=""/>
                <h1>Boxes on the System</h1>
            </header>
            { loading &&
                <img src={load} alt=""/>
            }
            { !loading &&
                <ul>{ boxes.length > 0 ? boxes.map(box => renderBox(box)) : <li>Nehum box encontrado!</li> }</ul>
            }
        </div>
    )
}

export default Boxes;