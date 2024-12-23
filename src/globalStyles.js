import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Roboto", serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        min-height: 100dvh;
        width: 100dvw;
    }
`;

export default GlobalStyles;
