import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, BoxesContainer } from './styles';

const Box = props => {   

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
        <Container>    
            <Content>    
                <BoxesContainer>
                    { props.boxes.length > 0 ? props.boxes.map(box => renderBox(box)) : <li>Nada!</li> }
                </BoxesContainer>
            </Content>
        </Container>
    )    
}

export default Box;