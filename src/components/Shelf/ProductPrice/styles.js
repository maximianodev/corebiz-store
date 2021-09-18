import styled from 'styled-components';

export const Container = styled.span`
  width: max-content;
  margin: auto;
  display: block;
  .listPrice {
    font-size: 18px;
    color: #000;
    font-weight: 700;
  }
  .listPrice--old {
    display: block;
    text-align: center;
    color: #7A7A7A;
    text-decoration: line-through;
  }
`;