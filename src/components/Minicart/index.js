import React, { useContext, useEffect } from 'react';
import * as S from './styles';

// assets
import MinicartIcon from 'assets/icons/cart.svg';
import { MinicartContext } from "contexts/Minicart";

const Minicart = () => {
  const { minicartData } = useContext(MinicartContext);

  useEffect(() => { }, [minicartData])

  return (
    <S.MinicartContainer>
      <img src={MinicartIcon} alt="Meu Carrinho" title="Meu Carrinho" />
      <span>{minicartData?.items?.length}</span>
    </S.MinicartContainer>
  )
}

export default Minicart;