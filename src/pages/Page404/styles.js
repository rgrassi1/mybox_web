import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    height: 100%;
` 
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;    
    width: 500px;
    height: 300px;

    background: #eee;
    border-radius: 8px;

    h1 {
        font-size: 2rem;
        font-weight: 500;
        color: #444;
    }
    p {
        font-size: 18px;
        padding: 10px;
    }
`
export const ContentLink = styled.div.attrs({
    className: 'content-link'
})`
    margin-top: 30px;
    a {
        background: #7159c1;
        font-weight: 500;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        padding: 10px 15px;
    }
`