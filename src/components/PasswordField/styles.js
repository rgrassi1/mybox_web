import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;    

    input {
        flex: 1;
        border: none;
        font-size: 16px;
        padding: 15px;
        color: #444;        
    }

    svg {
        cursor: pointer;
        margin: 0 10px 0 10px;
    }
`