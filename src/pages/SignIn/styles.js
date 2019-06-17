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

    h1 {
        color: #202124;
        font-size: 24px;
        font-weight: 400;
    }
`
export const Avatar = styled.div`
    margin: 30px 0px 20px 0px;
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

    div {
        margin-bottom: 5px;
    }
`
export const FormActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    a {
        text-decoration: none;
        color: #7159c1;
    }
`