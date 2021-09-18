import React from 'react';
import * as S from './styles';

// Components
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductReviews from './ProductReviews';
import ProductInstallments from './ProductInstallments';
import ProductBuyButton from './ProductBuyButton';

const Shelf = ({ data }) => {

  if (!data) return null
  return (
    <S.Container>
      <ProductImage image={data.imageUrl} alt={data.productName} />
      <div className="productInfo">
        <ProductName name={data.productName} />
        <ProductReviews stars={data.stars} />
        <ProductPrice price={data.price} listPrice={data.listPrice} />
        <ProductInstallments priceInstallments={data.installments} />
        <ProductBuyButton product={data} />
      </div>
    </S.Container>
  )
}

export default Shelf;