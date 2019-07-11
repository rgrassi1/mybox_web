import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Content, Form } from './styles';
import TextField from '../../../components/TextField';
import { Logo, Button } from '../../../components/styled';
import api from '../../../services/api';

const Confirm = props => {
    const [isEmailSent, setEmailSent] = useState(false);
    const { email } = props.user;

    const handleSubmit = async event => {
        event.preventDefault();        

        await api.post('/user/send-email', { email: email }); 
        setEmailSent(true);       
    } 

    if (isEmailSent) {
        return <Redirect to="/signin"/>
    }

    return (
        <Container>
            <Content>
                <Logo />
                <h1>Verifique seu e-mail</h1>
                <p>Para sua segurança, o MyBox quer confirmar se é realmente você. 
                O MyBox enviará por e-mail um link para você ativar sua conta.</p>
                <Form onSubmit={handleSubmit}>
                    <TextField type="email" disabled={true} value={email} name="e-mail" placeholder="E-mail"/>
                    <Button type="submit">Enviar</Button>
                </Form>
            </Content>
        </Container>
    )
}

export default Confirm;