import styled from 'styled-components';

export const BoxContainer = styled.div`
    max-width: 900px;
    margin: 50px auto 0;
    padding: 10px;
`

export const BoxHeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font: inherit;
        color: #FFF;
        font-size: 21px;
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #ddd;    
    }
    img {
        width: 64px;
    }
`
export const BoxUserContainer = styled.section`
    text-align: center;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 0px;
        color: #868e96 !important;    
    }
`

export const BoxLoadContainer = styled.section`
    text-align: center;
    img {
        margin-top: 40px;
    }

`
export const BoxUploadContainer = styled.div`
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    border: 1px dashed #ddd;
    color: #999;
    margin-top: 25px;
    cursor: pointer;
`

export const BoxFilesContainer = styled.ul`
    margin: 30px 0;
    list-style: none;
`