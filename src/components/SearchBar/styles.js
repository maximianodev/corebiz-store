import styled from 'styled-components'

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  border-bottom: 1px solid;
  input {
    flex: 1;
    border: 0;
    padding: 5px 0;
  }
  button {
    background-color: unset;
    background-image: unset;
    border: unset;
    cursor: pointer;
  }
  .autocomplete {
    position: absolute;
    left: 0;
    top: 40px;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 7px 10px rgba(0,0,0,0.1);
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 15px;
    .item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #fafafa;
      }
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      .image {
        max-width: 130px;
        margin-right: 15px;
        line-height: 0;
      }
    }
  }
`