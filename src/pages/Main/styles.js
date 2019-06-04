import styled from 'styled-components';

export const NewBoxContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`
export const NewBoxFormContainer = styled.form`
    width: 320px;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    padding: 10px;
    
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
        
        &:hover { opacity: 0.8 }
    }

    img {
        width: 100px;
        align-self: center;
    }
`
