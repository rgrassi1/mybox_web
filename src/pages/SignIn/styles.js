import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 320px;
    height: 420px;
    margin: 0 10px 0 10px;
    padding: 10px;

    background: #FFF;
    border-radius: 6px;
`
export const Avatar = styled.div`
    margin-top: 40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`
export const Form = styled.form`

`