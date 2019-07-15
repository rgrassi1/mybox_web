import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Content, Form, FormActions } from './styles';
import { Button, Logo } from '../../components/styled';
import TextField from '../../components/TextField';
import PasswordField from '../../components/PasswordField';
import Info from '../../components/Info';
import { signIn } from '../../actions';
import UserContext from '../../context';
import { UNSIGNED_USER } from '../../reducers/types';

const SignIn = props => {

    const { state, dispatch } = useContext(UserContext);

    if (state.isAuth) {
        const { from } = props.location.state || { from: { pathname: '/' } };        
        return <Redirect to={from} />
    }

    const handleSubmit = async event => {
        event.preventDefault();        

        const { email, password } = event.target;
        const data = { email: email.value, password: password.value };
        await signIn(dispatch, data);
    }

    const handleSignInError = () => {
        dispatch({ type: UNSIGNED_USER })
    }
    
    return (
        <Container>
            <Content>
                <Logo />
                <h1>Login</h1>
                { state.error &&
                    <div style={{ width: '100%', padding: '20px 10px 0 10px' }}>
                        <Info closeAction={handleSignInError} message={state.message} background="#ffdce0" color="#86181d" />
                    </div>           
                }        
                <Form onSubmit={handleSubmit}>
                    <TextField type="email" required name="email" placeholder="E-mail" />
                    <PasswordField required name="password" placeholder="Senha" />
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