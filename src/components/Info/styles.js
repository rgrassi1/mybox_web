import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    border-radius: 4px;
    padding: 15px;
    background: ${props => props.background};
    color: ${props => props.color};
    svg { cursor: pointer; }
`
