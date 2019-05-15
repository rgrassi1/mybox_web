import styled from 'styled-components';

export const NewBoxContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`
export const NewBoxFormContainer = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;  
    
    input {
        font: inherit;
        height: 48px;
        border: 1px solid #DDD;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 10px;    
    }

    button {
        font: inherit;
        height: 48px;
        background: #7159c1;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 10px;
        color: #DDD;
        font-weight: bold;
        border: 0;
        cursor: pointer; 
        
        &:hover { opacity: 0.8 }
    }
`