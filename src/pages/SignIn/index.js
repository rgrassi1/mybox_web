import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Content, Avatar, Form } from './styles';
import { Button } from '../../styles/components';
import { signIn } from '../../actions';
import UserContext from '../../context';
import url from '../../assets/logo.svg'
import { Field } from '../../styles/components'

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
                <Avatar url={url} />
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Field name="email" placeholder="E-mail" type="text" />
                    <Field name="password" placeholder="Senha" type="password" autoComplete="off"/>
                    <div>
                        <Link to="/signup">Criar conta</Link>
                        <Button>Entrar</Button>
                    </div>
                </Form>
            </Content>
        </Container>
    )    
}

export default SignIn