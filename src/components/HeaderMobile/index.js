import React from 'react';
// styles
import * as S from './styles';
// components
import Logo from 'components/Logo/index';
import SearchBar from 'components/SearchBar';
import Minicart from 'components/Minicart';
import Drawer from 'components/Drawer';

function HeaderMobile() {
  return (
    <S.Container>
      <div className="utils df items-center justify-between">
        <Drawer />
        <Logo />
        <Minicart />
      </div>
      <SearchBar />
    </S.Container>
  )
}

export default HeaderMobile;
