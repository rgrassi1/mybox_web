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
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #ddd;
    }
`
export const BoxesLoadContainer = styled.div`
    margin: 20px;
    text-align: center;
`
export const BoxesNewBoxContainer = styled.div`
    margin: 10px 0 20px 10px;  
    a { text-decoration: none }  
`
export const BoxesContainer = styled.ul`
    list-style-type: none;
    border: 1px solid #ddd;
    border-radius: 4px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const BoxesBoxContainer = styled.li`
    padding: 5px;
    display: flex;

    &:hover { background: #eee }
`
export const BoxesBoxElementContainer = styled.span`
    margin: 5px;

    strong { color: #039 }
    a { text-decoration: none }
    
    &:nth-of-type(1) {
        flex: 1;
    }

    &:nth-of-type(2) {
        flex: 1;
    }

    &:last-of-type {
        flex-basis: 60px;
        font-size: 12px;
    }
`