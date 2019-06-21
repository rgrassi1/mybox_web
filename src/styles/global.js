import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #fff;
    }

    #root, body, html {
        height: 100%;
    }

    h1 {
        color: #202124;
        font-size: 1.75em;
        font-weight: 400;
    }
`