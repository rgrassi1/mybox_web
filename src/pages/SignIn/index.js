import React from 'react';
import { Container, Content, Avatar } from './styles'

const url = 'avatar.jpg'

const SignIn = props => {
    return (
        <Container>
            <Content>
                <Avatar url={url} />
                
            </Content>
        </Container>
    )
}

export default SignIn