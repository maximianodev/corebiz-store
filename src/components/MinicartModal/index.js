import React, { useContext, useEffect, useState } from 'react';
import * as S from './styles';

// assets
import { MinicartContext } from "contexts/Minicart";
import ProductInstallments from 'components/Shelf/ProductInstallments';
import ProductReviews from 'components/Shelf/ProductReviews';
import ProductPrice from 'components/Shelf/ProductPrice';
import ProductName from 'components/Shelf/ProductName';
import { formatPrice } from 'utils/formatPrice';

const MinicartModal = () => {
  const { minicartData, setMinicartData } = useContext(MinicartContext);
  const [minicartContext, setMinicartContext] = useState()
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    setMinicartContext(minicartData)

    if (minicartData) {
      let totalPrice = {
        listPrice: 0,
        price: 0
      }
      minicartData.items?.map(item => {
        totalPrice.price += item.price
        return totalPrice.listPrice += item.listPrice
      })
      setTotalPrice(totalPrice)
    }
  }, [minicartData])

  const handleCloseMinicart = () => {
    setMinicartData({ items: minicartData.items, minicartOpen: false })
  }

  const handleClearItem = (currentProduct, currentKeyIndex) => {
    const removeItem = minicartData?.items?.filter((item, keyIndex) => {
      return keyIndex !== currentKeyIndex
    })
    setMinicartData({ items: removeItem, minicartOpen: true })
  }

  if (!minicartContext) return null
  if (!totalPrice) return null
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
                <div className="clearItem" onClick={() => handleClearItem(item, key)}>X</div>
                <ProductName name={item.productName} />
                <ProductReviews stars={item.stars} />
                <ProductPrice price={item.price} listPrice={item.listPrice} />
                <ProductInstallments priceInstallments={item.installments} />
              </div>
            </div>)}
        </div>
        <div className="prices">
          {totalPrice?.listPrice > 0 &&
            <>
              <div className="containerInfo subtotal">
                <strong>Subtotal:</strong> <span>{formatPrice(totalPrice?.listPrice)}</span>
              </div>
              <div className="containerInfo discount">
                <strong>Descontos:</strong> <span>{formatPrice(totalPrice?.listPrice - totalPrice?.price)}</span>
              </div>
            </>
          }
          {totalPrice?.price > 0 &&
            <div className="containerInfo total">
              <strong>Total:</strong> <span>{formatPrice(totalPrice?.price)}</span>
            </div>
          }
        </div>
        <div className="cta">Ir para Checkout</div>
      </div>
    </S.MinicartContainer>
  )
}

export default MinicartModal;