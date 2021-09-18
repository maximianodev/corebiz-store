import React from 'react';
import * as S from './styles';
import LogoImage from '../../assets/icons/corebiz-logo.svg';

const Logo = () => {
  return (
    <S.LogoIcon href="/" title="Home Page">
      <img src={LogoImage} alt="Corebiz Store" title="Corebiz Store - Voltar para Home" />
    </S.LogoIcon>
  )
}

export default Logo;