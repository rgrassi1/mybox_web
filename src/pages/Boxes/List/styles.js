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
export const BoxesLoadContainer = styled.div`
    margin: 20px;
    text-align: center;
`