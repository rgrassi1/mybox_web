import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Content, Avatar, Form } from './styles';
import { Button } from '../../styles/components';
import { signIn } from '../../actions';
import UserContext from '../../context';

const url = 'avatar.jpg'

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
                <Form onSubmit={handleSubmit}>
                    <input name="email" placeholder="E-mail" type="text" />
                    <input name="password" placeholder="Senha" type="password" autoComplete="off"/>
                    <div>
                        <Button>Entrar</Button>
                        
                    </div>
                </Form>
            </Content>
        </Container>
    )    
}

export default SignIn