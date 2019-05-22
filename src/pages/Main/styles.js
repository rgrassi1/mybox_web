import styled from 'styled-components';

export const NewBoxContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`
export const NewBoxFormContainer = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    
    input {
        font: inherit;
        height: 48px;
        border: 1px solid #DDD;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 10px; 
        
        width: 100%;   
    }

    button {
        font: inherit;
        height: 48px;
        background: #7159d9;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 10px;
        color: #DDD;
        font-weight: bold;
        border: 0;
        cursor: pointer; 
        width: 100%;        
        
        &:hover { opacity: 0.8 }
    }

    img {
        width: 88px;
    }
`
