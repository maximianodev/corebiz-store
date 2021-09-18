import React from 'react';
// styles
import * as S from './styles';
// components
import Logo from 'components/Logo/index';
import SearchBar from 'components/SearchBar';
import MyAccount from 'components/MyAccount';
import Minicart from 'components/Minicart';

function HeaderDesktop() {
  return (
    <S.Container className="df items-center justify-between container">
      <div className="logo">
        <Logo />
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div className="utils df items-center">
        <MyAccount />
        <Minicart />
      </div>
    </S.Container>
  )
}

export default HeaderDesktop;
