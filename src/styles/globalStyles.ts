import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    font-size: 13px;
    color: #4D4D4D;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::selection {
    background: #baffd9;
  }
  ::-moz-selection {
    background: #baffd9;
  }


  h1,h2,h3,h4,h5,h6 {
    font-family: "Didact Gothic", sans-serif !important;
    font-weight: 600 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    list-style: inherit;
    padding-left: 20px;
  }

  @media (min-width: 1024px) {
    [data-name="container"] {
      max-width: 968px;
    }
  }
  @media (min-width: 1280px) {
    [data-name="container"] {
      max-width: 1140px;
    }
  }
  @media (min-width: 1920px) {
    [data-name="container"] {
      max-width: 1440px;
    }
  }

  .ant-popover-inner-content {
    padding: 0;
  }

  .ant-typography-edit-content {
    margin-bottom: 0 !important;
  }
`;

export default GlobalStyles;
