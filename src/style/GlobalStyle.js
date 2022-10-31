import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    h1{
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
    }
    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.005em;
    }
`;

export { GlobalStyle };
