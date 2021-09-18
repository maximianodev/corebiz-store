import React from 'react';
// styles
import * as S from './styles';
// assets
import DrawerIcon from 'assets/icons/drawer.svg';

function Drawer() {
  return (
    <S.Container>
      <img src={DrawerIcon} alt="Abrir Menu" title="Abrir Menu" />
    </S.Container>
  )
}

export default Drawer;
