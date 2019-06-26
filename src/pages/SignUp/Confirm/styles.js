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

    width: 448px;
    height: 500px;
    margin: 0 10px 0 10px;
    padding: 25px;

    background: #FFF;
    border-radius: 8px;
    border: 1px solid #dadce0;

    p {
        padding: 10px 10px 20px 10px;
        text-align: justify;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 10px;

    button {
        margin-top: 20px;
    }
`