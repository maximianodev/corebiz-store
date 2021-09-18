import React, { useEffect, useState } from 'react';
import * as S from './styles';

// utils
import { formatPrice } from 'utils/formatPrice';

const ProductInstallments = ({ priceInstallments }) => {
  const [priceCalculated, setPriceCalculated] = useState()

  useEffect(() => {
    let priceFormatted = formatPrice(priceInstallments[0]?.value)

    if (priceFormatted) {
      setPriceCalculated(`R$ ${priceFormatted}`)
    } else {
      setPriceCalculated("R$ ")
    }
  }, [priceInstallments])

  if(!priceInstallments.length) return null
  return (
    <S.Container>ou em {priceInstallments[0]?.quantity}x de {priceCalculated}</S.Container>
  )
}

export default ProductInstallments;