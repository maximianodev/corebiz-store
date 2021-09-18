import styled from 'styled-components'

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;

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
`