import React from 'react';
import * as S from './styles';

const ProductImage = ({ image, alt }) => {

  if (!image || !alt) return null
  return (
    <S.Image src={image} alt={alt} title={alt} />
  )
}

export default ProductImage;