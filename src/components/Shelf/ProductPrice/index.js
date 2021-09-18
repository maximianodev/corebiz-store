import React, { useEffect, useState } from 'react';
import { formatPrice } from 'utils/formatPrice';
import * as S from './styles';

const ProductPrice = ({ price, listPrice }) => {
  const [priceCalculated, setPriceCalculated] = useState()

  useEffect(() => {
    if (!listPrice) {
      let priceFormatted = formatPrice(price)
      setPriceCalculated({ price: priceFormatted })
    } else {
      let priceFormatted = formatPrice(price)
      let listPriceFormatted = formatPrice(listPrice)
      setPriceCalculated({
        price: priceFormatted,
        listPrice: listPriceFormatted
      })
    }
  }, [price, listPrice])

  if (!priceCalculated) return null
  return (
    <S.Container>
      {priceCalculated?.listPrice &&
        <span className="listPrice--old">de {priceCalculated?.listPrice}</span>}
      <span className="listPrice">por {priceCalculated?.price}</span>
    </S.Container>
  )
}

export default ProductPrice;