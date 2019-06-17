import styled from 'styled-components';
import logo from '../assets/logo.svg'

export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    padding: 10px 15px 10px 15px;        
    font-size: 14px;
    font-weight: bold;
    background: #7159c1;
    color: #FFF;      
    border-radius: 4px;
    border: 0;
    cursor: pointer;         
    &:hover { opacity: 0.8 }
`
export const Logo = styled.div`
    margin: 30px 0px 20px 0px;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`