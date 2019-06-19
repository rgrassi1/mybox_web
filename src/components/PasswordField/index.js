import React, { useState } from 'react';
import { Container } from './styles'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const PasswordField = props => {

    const [ isVisible, setVisible ] = useState(false)

    const handleClick = () => {
        setVisible(!isVisible);
    }

    return (
        <Container>    
            <input
                name={props.name} 
                placeholder={props.placeholder} 
                autoComplete="off"
                type={ !isVisible ? "password" : "text" } 
            />
            { !isVisible &&
                <MdVisibility size='2em' color='#444' onClick={handleClick}/>                    
            }
            { isVisible &&
                <MdVisibilityOff size='2em' color='#444' onClick={handleClick}/>        
            }
        </Container>    
    )
}

export default PasswordField;