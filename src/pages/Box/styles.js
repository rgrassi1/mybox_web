import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    max-width: 768px;
    margin: 50px auto 0;
    padding: 10px;
`
export const BoxHeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font: inherit;
        color: #444;
        font-weight: 400;
        font-size: 21px;
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #ddd;    
    }
    img { width: 64px }
`
export const BoxUserContainer = styled.section`
    text-align: center;
    span { color: #fff };
    margin-bottom: 20px;
`
export const BoxLoadContainer = styled.section`
    text-align: center;
    img { margin-top: 40px; }
`
export const BoxFilesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BoxFilesContent = styled.div`
    width: 100%;
    max-width: 768px;
    background: #FFF;
    border-radius: 4px;
    padding: 10px;
`