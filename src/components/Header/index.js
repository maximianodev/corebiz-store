import React from 'react';
import { useDevice } from "react-use-device";

// Components
import HeaderDesktop from "components/Header/HeaderDesktop/index";
import HeaderMobile from "components/Header/HeaderMobile";

function Header() {
  const { isTABLET, isMOBILE } = useDevice();

  return (
    <>
      {(isTABLET || isMOBILE)
        ?
        <HeaderMobile /> :
        <HeaderDesktop />
      }
    </>
  )
}

export default Header
