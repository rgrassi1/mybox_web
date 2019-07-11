import React from 'react';
import { Container } from './styles'

const TextField = props => {
    return (
        <Container>    
            <input {...props} autoComplete="off"/>
        </Container>    
    )
}

export default TextField;