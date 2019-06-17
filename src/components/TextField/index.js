import React from 'react';
import { Field } from './styles'

const TextField = props => {
    return (
        <Field>    
            <input
                name={props.name} 
                placeholder={props.placeholder} 
                autoComplete="off"
                type="text" 
            />
        </Field>    
    )
}

export default TextField;