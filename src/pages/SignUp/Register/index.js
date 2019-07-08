import React, { useState } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import { Container, Content, Form, FormActions } from './styles';
import TextField from '../../../components/TextField';
import PasswordField from '../../../components/PasswordField';
import { Logo, Button } from '../../../components/styled';
import Info from '../../../components/Info';

const Register = props => {

    const [message, setMessage] = useState(null)

    const handleSubmit = async event => {
        event.preventDefault();        

        const { email, password } = event.target;
        const data = { email: email.value, password: password.value };

        try {
            const user = await api.post('/user/signup', data); 
            props.setUser(user.data.user);
        }
        catch(err) {
            setMessage(err.message)
        }
    }  
    
    const handleInfoClose = () => {
        setMessage(null)
    }

    return (
        <Container>
            <Content>
                <Logo />
                <h1>Criar conta</h1>
                { message &&
                    <div style={{ width: '100%', padding: '20px 10px 0 10px' }}>
                        <Info closeAction={handleInfoClose} message={message} background="#ffdce0" color="#86181d" />
                    </div>           
                }        
                <Form onSubmit={handleSubmit}>
                    <TextField required name="email" placeholder="E-mail" />
                    <PasswordField required name="password" placeholder="Senha" />
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