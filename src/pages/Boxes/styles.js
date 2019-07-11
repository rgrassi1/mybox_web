import styled from 'styled-components';

export const BoxesGeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 768px;
    margin: 0 auto;
    justify-content: center;
    height: 100%;
`
export const BoxesHeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    h1 {
        font-size: 22px;
        color: #444;
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #ddd;
    }
    img { width: 64px; }
`
export const BoxesNewBoxContainer = styled.div`
    margin: 10px 0 20px 0;  
    a { text-decoration: none } 
    strong { color: #7159c1; }
`
export const BoxesContainer = styled.ul`
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        a { color: inherit; }
    }
    & + li { margin-top: 15px; }    
`
export const BoxesErrorContainer = styled.div`
    padding: 10px;
    margin-top: 10px;
    background: #7159c1;
    border-radius: 4px;
    p { color: #fff }
`