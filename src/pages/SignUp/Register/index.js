import React from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import { Container, Content, Form, FormActions } from './styles';
import TextField from '../../../components/TextField';
import PasswordField from '../../../components/PasswordField';
import { Logo, Button } from '../../../components/styled';

const Register = props => {

    const handleSubmit = async event => {
        event.preventDefault();        

        const { email, password } = event.target;
        const data = { email: email.value, password: password.value };

        const user = await api.post('/user/signup', data); 

        props.setUser(user.data.user);
    }     

    return (
        <Container>
            <Content>
                <Logo />
                <h1>Criar conta</h1>
                <Form onSubmit={handleSubmit}>
                    <TextField name="email" placeholder="E-mail" />
                    <PasswordField name="password" placeholder="Senha" />
                    <FormActions>
                        <Link to="/signin">Entrar na minha conta</Link>
                        <Button type="submit">Próxima</Button>
                    </FormActions>
                </Form>                
            </Content>
        </Container>
    )
}

export default Register;