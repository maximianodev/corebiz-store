import React from 'react'
import * as S from './styles'

// assets
import MinicartIcon from 'assets/icons/cart.svg'

const Minicart = () => {
  return (
    <S.MinicartContainer>
      <img src={MinicartIcon} alt="Meu Carrinho" title="Meu Carrinho" />
      <span>1</span>
    </S.MinicartContainer>
  )
}

export default Minicart