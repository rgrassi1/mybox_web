import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Content, Form, FormActions } from './styles';
import { Button, Logo } from '../../components/styled';
import TextField from '../../components/TextField';
import PasswordField from '../../components/PasswordField';
import { signIn } from '../../actions';
import UserContext from '../../context';

const SignIn = props => {

    const { state, dispatch } = useContext(UserContext);

    const handleSubmit = async event => {
        event.preventDefault();        

        const { email, password } = event.target;
        const data = { email: email.value, password: password.value };
        await signIn(dispatch, data);
    }    
    
    if (state.isAuth) {
        return <Redirect to="/boxes" />
    }
    
    return (
        <Container>
            <Content>
                <Logo />
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <TextField name="email" placeholder="E-mail" />
                    <PasswordField name="password" placeholder="Senha" />
                    <FormActions>
                        <Link to="/signup">Criar conta</Link>
                        <Button type="submit">Entrar</Button>
                    </FormActions>
                </Form>
            </Content>
        </Container>
    )    
}

export default SignIn