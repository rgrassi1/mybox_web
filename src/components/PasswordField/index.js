import React, { useState } from 'react';
import { Password } from './styles'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const PasswordField = props => {

    const [ isVisibled, setVisible ] = useState(false)

    const handleClick = () => {
        setVisible(!isVisibled);
    }

    return (
        <Password>    
            <input
                name={props.name} 
                placeholder={props.placeholder} 
                autoComplete="off"
                type={ !isVisibled ? "password" : "text" } 
            />
            { !isVisibled &&
                <MdVisibility size='2em' color='#444' onClick={handleClick}/>                    
            }
            { isVisibled &&
                <MdVisibilityOff size='2em' color='#444' onClick={handleClick}/>        
            }
        </Password>    
    )
}

export default PasswordField;