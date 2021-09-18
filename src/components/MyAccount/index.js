import React from 'react';
import * as S from './styles';

// assets
import UserIcon from 'assets/icons/user.svg';

const MyAccount = () => {
  return (
    <S.ButtonContainer>
      <img src={UserIcon} alt="Minha Conta" title="Minha Conta" />
      <span>Minha Conta</span>
    </S.ButtonContainer>
  )
}

export default MyAccount;