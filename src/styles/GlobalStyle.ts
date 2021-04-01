import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Courier;
    }

    :root {
        --main: #FFFFFF; 
        --main-background: radial-gradient(95.26% 95.26% at 50% 101.66%, rgba(106, 204, 241, 0.91) 0%, rgba(85, 169, 217, 0.91) 31.25%, rgba(37, 90, 162, 0.91) 54.17%, rgba(11, 57, 136, 0.91) 70.31%, rgba(0, 11, 46, 0.91) 100%);;
        --main-azul-menu: #1054BA;
        --main-azul-escuro: #071E41;
        --main-azul-medio: #0B3067;
    }

    body {
        background: radial-gradient(95.26% 95.26% at 50% 101.66%, rgba(106, 204, 241, 0.91) 0%, rgba(85, 169, 217, 0.91) 31.25%, rgba(37, 90, 162, 0.91) 54.17%, rgba(11, 57, 136, 0.91) 70.31%, rgba(0, 11, 46, 0.91) 100%);
        background-size : cover;
        background-repeat: no-repeat;
    }

    .container {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1350px;
        margin: 0 auto;

        @media(max-width: 992px){
            max-width: 960px;
        }
        @media(max-width: 768px){
            max-width: 720px;
        }
        @media(max-width: 576px){
            max-width: 100%;
        }
    }
`