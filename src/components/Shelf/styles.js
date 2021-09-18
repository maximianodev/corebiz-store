import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  background-color: transparent;
  transition: background-color .3s ease;
  cursor: pointer;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: #E6E8EA;
    .buyButton {
      opacity: 1;
    }
  }
  .productInfo {
    padding: 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;