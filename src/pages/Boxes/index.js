import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import load from '../../assets/loading.svg';
import { Container, Content } from '../../styles/styled_components';
import { 
    BoxesGeneralContainer,
    BoxesHeaderContainer,
    BoxesLoadContainer,
    BoxesNewBoxContainer,
    BoxesContainer,
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
            <li key={box._id}>
                <span><strong><Link to={`/boxes/${box._id}`}>{box.title}</Link></strong></span>
                <span>{`${data.toLocaleDateString()} ${data.toLocaleTimeString()}`}</span>
            </li>
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
                <Container>    
                    <Content>    
                        <BoxesContainer>
                            { boxes.length > 0 
                                ? boxes.map(box => renderBox(box)) 
                                : <li>Nehum box encontrado!</li> 
                            }
                        </BoxesContainer>
                    </Content>
                </Container>
            }
        </BoxesGeneralContainer>
    )
}

export default Boxes;