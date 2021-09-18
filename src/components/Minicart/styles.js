import styled from 'styled-components';

export const MinicartContainer = styled.button`
  background-color: transparent;
  background-image: unset;
  border: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    margin-left: 3px;
    border-radius: 100%;
    line-height: 1;
    text-align: center;
    background-color: ${({theme}) => theme.colors.primary};
    color: #fff;
    font-size:  ${({theme}) => theme.font.sizes.small};
  }
`;