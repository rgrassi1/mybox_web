import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import { 
    BoxesGeneralContainer,
    BoxesHeaderContainer,
    BoxesLoadContainer,
    BoxesNewBoxContainer,
    BoxesContainer,
    BoxesBoxContainer,
    BoxesBoxElementContainer
} from './styles';

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
        return (
            <BoxesBoxContainer key={box._id}>
                <BoxesBoxElementContainer>
                    <strong><Link to={`/boxes/${box._id}`}>{box.title}</Link></strong>
                </BoxesBoxElementContainer>
                <BoxesBoxElementContainer>{box.email}</BoxesBoxElementContainer>
                <BoxesBoxElementContainer>{data.toLocaleDateString()}</BoxesBoxElementContainer>
            </BoxesBoxContainer>
        )
    }

    return (
        <BoxesGeneralContainer>
            <BoxesHeaderContainer>
                <img src={logo} alt=""/>
                <h1>Boxes on the System</h1>
            </BoxesHeaderContainer>
            { loading &&
                <BoxesLoadContainer>    
                    <img src={load} alt=""/>
                </BoxesLoadContainer>
            }
            <BoxesNewBoxContainer>
                <Link to="/"><strong>Criar novo box >></strong></Link>
            </BoxesNewBoxContainer>
            { !loading &&
                <BoxesContainer>
                    { boxes.length > 0 
                        ? boxes.map(box => renderBox(box)) 
                        : <li>Nehum box encontrado!</li> 
                    }
                </BoxesContainer>
            }
        </BoxesGeneralContainer>
    )
}

export default Boxes;