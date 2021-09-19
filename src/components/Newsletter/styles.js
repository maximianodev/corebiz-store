import styled from 'styled-components';

export const Container = styled.form`
  background-color: #F2F2F2;
  padding: 40px 30px;
  @media(max-width: 767px) {
    padding: 20px 15px;
  }
  h3 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: 700;
    @media(max-width: 767px) {
      text-align: left;
    }
  }
  .inputGoup {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    @media(max-width: 1023px) {
      flex-direction: column;
    }
    .inputContainer {
      @media(max-width: 1023px) {
        width: 100%;
        margin-bottom: 15px;
      }
      &:not(:last-child) {
        margin-right: 15px;
        @media(max-width: 1023px) {
          margin-right: 0px;
        } 
      }
      input[type=text] {
        background-color: #FFF;
        border: 0;
        width: 250px;
        height: 40px;
        padding: 0 10px;
        border-radius: 5px;
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        @media(max-width: 1023px) {
          width: 100%;
        }
        &::placeholder {
          color: #585858;
          font-size: 700;
          font-size: 12px;
          font-family: 'Lato', sans-serif;
        }
        &:focus {
          border: 1px solid #BDBDBD;
        }
        &.default {
          border: 1px solid #BDBDBD;
        }
        &.error {
          border: 1px solid red;
        }
      }
      span {
        display: block;
        color: red;
        font-size: 12px;
        margin-top: 5px;
      }
    }
    button {
      height: 40px;
      padding: 0 30px;
      border: 0;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
      font-size: 700;
      font-family: 'Lato', sans-serif;
      &.error {
        pointer-events: none;
        opacity: .7;
      }
      @media(max-width: 1023px) {
        margin-left: auto;
      }
      @media(max-width: 767px) {
        width: 100%;
      }
    }
  }
  .success {
    margin: 0 auto;
    width: max-content;
    text-align: center;
    font-family: 'Lato', sans-serif;
    strong {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    } 
    span {
      cursor: pointer;
      display: block;
      color: #fff;
      background-color: #000;
      height: 40px;
      width: 250px;
      margin: 0 auto;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      font-family: 'Lato', sans-serif;  
      line-height: 0;
    }
  }
`;