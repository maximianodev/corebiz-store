import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #000;
  border-bottom: 3px solid #C0C0C0;
  color: #fff;
  width: 100%;
  .container {
    padding: 40px 30px;
    @media(max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 15px;
    }
    .info {
      h2 {
        position: relative;
        padding-bottom: 15px;
        margin-bottom: 15px;
        &::before {
          content: "";
          position: absolute;
          width: 25%;
          height: 4px;
          left: 0;
          bottom: 0;
          background-color: #fff;
        }
      }
      address {
        font-style: normal;
        a {
          text-decoration: none;
          color: #fff;
          &:not(:last-child) {
            margin-bottom: 10px;
            display: block;
          }
        }
      }
    }
    .cta {
      @media(max-width: 767px) {
        margin: 30px auto;
      }
      a {
        background-color: #fff;
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 15px;
        font-size: 12px;
        text-transform: uppercase;
        border-radius: 7px;
        font-weight: bold;
        line-height: 1;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        img {
          margin-right: 10px;
        }
      }
    }
    .logo {
      @media(max-width: 767px) {
        width: 100%;
        justify-content: space-between;
        padding: 0 15px;
      }
      a {
        text-decoration: none;
        color: #fff;
        &:not(:first-child) {
          margin-left: 20px;
        }
        span {
          display: block;
          font-size: 12px;
          font-weight: 200;
          margin-bottom: 5px;
        }
      }
    }
  }
`;