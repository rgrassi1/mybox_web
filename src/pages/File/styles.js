import styled from 'styled-components';

export const BoxFileContainer = styled.div`
    cursor: pointer;
    box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    :hover {
        box-shadow: inset 1px 0 0 #dadce0, 
        inset -1px 0 0 #dadce0, 
        0 1px 2px 0 rgba(60, 64, 67, .3), 
        0 1px 3px 1px rgba(60, 64, 67, .15);
    }
`
export const UploadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    span {
        color: #7159c1;
        font-size: 13px;
    }
`
export const FileContainer = styled.div`
    padding: 6px;
`
export const ElementsFileContainer = styled.div`
    display: inline-block;
    width: 95%;
    vertical-align: middle;
    a {
        display: inline-block;    
        vertical-align: middle;
        width: 70%;    
        text-decoration: none;
        strong {
            font-weight: normal;
            font-size: 14px;
            margin-left: 5px;
            color: #333;
            position: relative;
            top: -5px;
        }
    }

    span {
        color: #999;
        font-size: 13px;
    }
`
export const ActionsFileContainer = styled.div`
    float: right;
    button {
        width: 28px;
        height: 28px;
        padding: 6px;
        cursor: pointer;
        border: 0;
        border-radius: 50%;
        background: #fff;
        :hover {
            background: #dee;
        }
    }
`
export const DeletingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    span {
        color: #999;
        font-size: 13px;        
    }
    strong {
        color: #E36B24;
    }
`