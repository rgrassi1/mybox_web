import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Form, FormActions } from './styles';
import TextField from '../../../components/TextField';
import { Logo, Button } from '../../../components/styled';

const Confirm = props => {

    const handleSubmit = () => {
        
    }

    return (
        <Container>
            <Content>
                <Logo />
                <h1>Verifique seu e-mail</h1>
                <p>Para sua segurança, o MyBox quer confirmar se é realmente você. 
                O MyBox enviará um e-mail com um link de confirmação.</p>
                <Form onSubmit={handleSubmit}>
                    <TextField name="e-mail" placeholder="E-mail"/>
                    <FormActions>
                        <Link to="/signup">Voltar</Link>
                        <Button type="submit">Enviar</Button>
                    </FormActions>
                </Form>
            </Content>
        </Container>
    )
}

export default Confirm;

