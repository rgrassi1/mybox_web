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
    padding: 10px;

    background: #FFF;
    border-radius: 8px;
    border: 1px solid #dadce0;
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
    flex: 1;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 10px;

    input {
        font-size: 16px;
        padding: 15px;
        border-radius: 4px;
        border: 1px solid #DDD;

        color: #444;
        margin-bottom: 5px;
    }
`