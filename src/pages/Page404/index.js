import React from 'react';
import { Container, Content, ContentLink } from './styles'
import { Link } from 'react-router-dom';

export default function() {
    return (
        <Container>
            <Content>
                <h1>404</h1>
                <p>Ooops! Página não encontrada.</p>
                <ContentLink className='content-link'>
                    <Link to="/boxes">Voltar para a página inicial</Link>
                </ContentLink>
            </Content>
        </Container>
    )
}