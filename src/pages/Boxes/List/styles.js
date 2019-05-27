import styled from 'styled-components';

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