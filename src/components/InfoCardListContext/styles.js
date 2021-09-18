import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .infoCardContainer {
    position: relative;
    min-height: 450px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    @media(max-width: 767px) {
      min-height: 300px;
    }
    .container {
      width: 100%;
      padding-left: 30px;
      @media(max-width: 767px) {
        padding: 15px;
      }
    }
    .textContainer {
      color: #fff;
      line-height: normal;
      max-width: 480px;
      h2 {
        font-size: 30px;
        font-weight: 700;
        @media(max-width: 1366px) {
            font-size: 26px;
        }
        @media(max-width: 767px) {
          font-size: 22px;
        }
      }
      p {
        font-size: 45px;
        line-height: 1;
        font-weight: 900;
        margin-top: 10px;
        @media(max-width: 1366px) {
            font-size: 36px;
        }
        @media(max-width: 767px) {
          font-size: 32px;
        }
      }
    }
  }
`;