import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid #ddd;
    border-radius: 4px;
    :focus-within {
        border: 2px solid #7159c1;
        border-radius: 4px;
    }

    input {
        width: 100%;
        border: none;
        font: inherit;
        font-size: 16px;
        padding: 15px;
        color: #444; 
    }

`