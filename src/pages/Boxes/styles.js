import styled from 'styled-components';

export const BoxesGeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    justify-content: center;
    height: 100vh;
`

export const BoxesHeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    h1 {
        font: inherit;
        font-size: 21px;
        color: #FFF;
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #ddd;
    }

    img {
        width: 64px;
    }
`
export const BoxesLoadContainer = styled.div`
    margin: 20px;
    text-align: center;
`
export const BoxesNewBoxContainer = styled.div`
    margin: 10px 0 20px 10px;  
    a { text-decoration: none } 
    strong {
        color: #fff;
    }
`
export const BoxesContainer = styled.ul`
    list-style-type: none;
    border-radius: 4px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const BoxesBoxContainer = styled.li`
    padding: 5px;
    display: flex;

    border-top: 1px solid #fff;
    color: #fff;

    &:hover { background: #fff; border-radius: 4px; color: #7159c1 }
`
export const BoxesBoxElementContainer = styled.span`

    color: inherit;

    margin: 5px;

    a { text-decoration: none; color: inherit; }
    
    &:nth-of-type(1) {
        flex: 1;
    }

    &:nth-of-type(2) {
        flex: 1;
    }

    &:last-of-type {
        flex-basis: 60px;
    }
`