import styled from 'styled-components';

export const MinicartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: ${({ minicartContext }) => minicartContext?.minicartOpen ? '' : 'none'};
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
  }
  .contentContainer {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    height: 100%;
    background-color: #fff;
    z-index: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    @media(max-width: 1023px) {
      width: 90%;
      padding: 15px;
    }
    .closeMinicart {
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .items {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      .itemContainer {
        display: flex;
        align-items: center;
        position: relative;
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        .image {
          img {
            width: 130px;
          }
        }
        .info {
          margin-left: 15px;
          padding: 15px;
          .clearItem {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
          }
        }
      }
    }
    .cta {
      width: 100%;
      height: 50px;
      background-color: #000;
      border-radius: 5px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      text-transform: uppercase;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;