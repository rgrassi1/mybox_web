import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center; 

    :focus-within {
        border: 2px solid #7159c1;
        border-radius: 4px;
    }   

    input {
        flex: 1;
        border: none;
        font: inherit;
        font-size: 16px;
        padding: 15px;
        color: #444;        
    }

    svg {
        cursor: pointer;
        margin: 0 10px 0 10px;
    }
`