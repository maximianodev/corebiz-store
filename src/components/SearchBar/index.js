import React, { useLayoutEffect, useState } from 'react';
import * as S from './styles';

//assets
import MagnifyingGlassIcon from 'assets/icons/magnifying-glass.svg';

// components
import ProductName from 'components/Shelf/ProductName';
import ProductReviews from 'components/Shelf/ProductReviews';
import ProductPrice from 'components/Shelf/ProductPrice';
import ProductInstallments from 'components/Shelf/ProductInstallments';
import ProductImage from 'components/Shelf/ProductImage';
import { getProducts } from 'services/getProducts';

const SearchBar = () => {
  const [itemsAutocomplete, setItemsAutocomplete] = useState()
  const [products, setProducts] = useState()

  useLayoutEffect(() => {
    getProducts().then(resp => setProducts(resp.data)).catch(resp => setProducts())
  }, [])

  const handleChange = (ev) => {
    let inputValue = ev.currentTarget.value

    setTimeout(() => {
      
      let result = products.filter(item => {
        const regex = new RegExp(`${inputValue}`, "gi")
        return item.productName.match(regex)
      })
      setItemsAutocomplete(result)
    }, 1500);
  }

  return (
    <S.InputContainer>
      <input
        type="text"
        placeholder="O que você está procurando?"
        onChange={handleChange}
        onBlur={() => setItemsAutocomplete([])}
      />
      <button type="submit">
        <img src={MagnifyingGlassIcon} alt="Buscar" title="Buscar" />
      </button>
      {!itemsAutocomplete?.length ? null :
        <div className="autocomplete">
          {itemsAutocomplete.map(item =>
            <div className="item" key={item.productName}>
              <div className="image">
                <ProductImage image={item.imageUrl} alt={item.productName} />
              </div>
              <div className="info">
                <ProductName name={item.productName} />
                <ProductReviews stars={item.stars} />
                <ProductPrice price={item.price} listPrice={item.listPrice} />
                <ProductInstallments priceInstallments={item.installments} />
              </div>
            </div>
          )}
        </div>}
    </S.InputContainer>
  )
}

export default SearchBar;