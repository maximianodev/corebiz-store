import styled from 'styled-components';

export const Container = styled.button`
  width: 130px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 5px;
  cursor: pointer;
  background-color: #000;
  border: 0;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0;
  transition: opacity .3s ease;
  @media(max-width: 767px) {
    opacity: 1;
  }
`;