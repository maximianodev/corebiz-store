import React from 'react';
import * as S from './styles';

const ProductName = ({ name }) => {

  if (!name) return null
  return (
    <S.Name>{name}</S.Name>
  )
}

export default ProductName;