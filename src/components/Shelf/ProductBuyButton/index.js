import { MinicartContext } from 'contexts/Minicart';
import React, { useContext, useEffect } from 'react';
import * as S from './styles';

const ProductBuyButton = ({ product }) => {
  const { minicartData, setMinicartData } = useContext(MinicartContext);

  useEffect(() => { }, [minicartData])

  const handleClickAdd = () => {
    let key = 'corebiz_store'

    if (!minicartData.items) {
      setMinicartData({ items: [product], minicartOpen: true })
      localStorage.setItem(key, JSON.stringify({ items: [product], minicartOpen: true }))
    } else {
      setMinicartData({ items: [...minicartData.items, product], minicartOpen: true })
      localStorage.setItem(key, JSON.stringify({ items: [...minicartData.items, product], minicartOpen: true }))
    }
  }

  return (
    <S.Container
      className="buyButton"
      onClick={handleClickAdd}
    >
      Comprar
    </S.Container>
  )
}

export default ProductBuyButton;