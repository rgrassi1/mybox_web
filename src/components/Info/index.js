import React from 'react';
import { Container, Content } from './styles';
import { MdClose } from 'react-icons/md';

export default function(props) {
    return (
        <Container>
            <Content background={props.background} color={props.color}> 
                <span>{props.message}</span>
                <MdClose size="1.5em" onClick={() => props.closeAction()}/>
            </Content>
        </Container>
    )
}