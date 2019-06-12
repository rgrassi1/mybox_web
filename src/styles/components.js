import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 100%;
    max-width: 768px;
    background: #FFF;
    border-radius: 4px;
    padding: 10px;
`
export const Button = styled.button`
        display: inline-flex;
        justify-content: center;
        padding: 15px;        
        font-size: 16px;
        font-weight: bold;
        background: #1a73e8;
        color: #FFF;      
        border-radius: 4px;
        border: 0;
        cursor: pointer;         
        &:hover { opacity: 0.8 }
`