import React from 'react';
import { Container } from './styles'

const TextField = props => {
    return (
        <Container>    
            <input
                name={props.name} 
                placeholder={props.placeholder} 
                autoComplete="off"
                type="text" 
            />
        </Container>    
    )
}

export default TextField;