import React, { useContext, useEffect, useState } from 'react';
import * as S from './styles';

// assets
import { MinicartContext } from "contexts/Minicart";
import ProductInstallments from 'components/Shelf/ProductInstallments';
import ProductReviews from 'components/Shelf/ProductReviews';
import ProductPrice from 'components/Shelf/ProductPrice';
import ProductName from 'components/Shelf/ProductName';

const MinicartModal = () => {
  const { minicartData, setMinicartData } = useContext(MinicartContext);
  const [minicartContext, setMinicartContext] = useState()

  useEffect(() => {
    setMinicartContext(minicartData)
  }, [minicartData])

  const handleCloseMinicart = () => {
    setMinicartData({ items: minicartData.items, minicartOpen: false })
  }

  const handleClearItem = (currentProduct) => {
    const removeItem = minicartData?.items?.filter(item => {
      return item.productId !== currentProduct.productId
    })
    setMinicartData({ items: removeItem, minicartOpen: true })
  }

  if (!minicartContext) return null
  return (
    <S.MinicartContainer minicartContext={minicartContext}>
      <div className="overlay" onClick={handleCloseMinicart}></div>
      <div className="contentContainer">
        <div className="closeMinicart" onClick={handleCloseMinicart}>X</div>
        <div className="items">
          {minicartContext?.items?.map((item, key) =>
            <div className="itemContainer" key={key}>
              <div className="image">
                <img src={item?.imageUrl} alt={item?.productName} title={item?.productName} />
              </div>
              <div className="info">
                <div className="clearItem" onClick={() => handleClearItem(item)}>X</div>
                <ProductName name={item.productName} />
                <ProductReviews stars={item.stars} />
                <ProductPrice price={item.price} listPrice={item.listPrice} />
                <ProductInstallments priceInstallments={item.installments} />
              </div>
            </div>)}
        </div>
        <div className="cta">Ir para Checkout</div>
      </div>
    </S.MinicartContainer>
  )
}

export default MinicartModal;