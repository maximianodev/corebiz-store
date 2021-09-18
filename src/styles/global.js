import { createGlobalStyle, css } from "styled-components";
import LeftArrow from 'assets/icons/left-arrow.svg'
import RightArrow from 'assets/icons/right-arrow.svg'

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
    /* Reset */
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
  /* Reset */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    @media(max-width: 1023px) {
      max-width: 100%;
      margin: unset;
    }
  }
  .df {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: space-center;
  }
  .items-center {
    align-items: center;
  }
  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .AppContent {
      flex: 1;
    }
  }
  /* Slick */
  .slick-slider {
        position: relative;
        .slick-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            left: 30px;
            width: 20px;
            height: 20px;
            background-color: transparent;
            background-image: unset;
            border: 0;
            cursor: pointer;
            font-size: 0;
            @media(max-width: 1023px) {
              left: 15px;
            }
            &::before {
                content: "";
                display: block;
                width: inherit;
                height: inherit;
                background: url(${LeftArrow}) no-repeat center;
                background-size: contain;
            }
        }
        .slick-list {
          overflow: hidden;
            .slick-track {
                display: flex;
                .slick-slide {
                    img {
                        width: 100%;
                    }
                }
            }
        }
        .slick-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            right: 30px;
            width: 20px;
            height: 20px;
            background-color: transparent;
            background-image: unset;
            border: 0;
            cursor: pointer;
            font-size: 0;
            @media(max-width: 1023px) {
                right: 15px;
            }
            &::before {
                content: "";
                display: block;
                width: inherit;
                height: inherit;
                background: url(${RightArrow}) no-repeat center;
                background-size: contain;
            }
        }
        
        .slick-dots {
            bottom: 30px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex !important;
            align-items: center;
            list-style-type: none;
            li {
              margin: 0;
              &:not(:last-child) {
                margin-right: 10px;
              } 
              button {
                  border: 0;
                  font-size: 0;
                  width: 10px;
                  height: 10px;
                  cursor: pointer;
                  background-color: #BDBDBD;
                  border-radius: 100%;
                  transition: all .3s ease;
                }
            }
            .slick-active {
                button {
                  background-color: ${({ theme }) => theme.colors.primary};
                }
            }
            
        }
    }
  /* Slick */
`;