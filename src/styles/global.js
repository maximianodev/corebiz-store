import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: none;
      font-family: ${theme.font.family.primary};
    }
    body {
      color: ;
      background: ;
      font-size: ${theme.font.sizes.medium};
    }
    body * {
      &::selection {
        background: ${theme.colors.dark};
        color: ${theme.colors.light};
      } 
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      @media(max-width: 1023px) {
        max-width: 100%;
        margin: unset;
      }
    }
    img {
      max-width: 100%;
      height: auto;
    }
    @media(max-width: 1023px) {
      html {
          font-size: 93.75%;
      }
    }
    @media(max-width: 767px) {
      html {
          font-size: 87.5%;
      }
    }
  `}
`