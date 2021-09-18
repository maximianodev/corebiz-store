import React from 'react';
import * as S from './styles';

// assets
import TellIcon from 'assets/icons/tell.svg';
import MailIcon from 'assets/icons/mail.svg';
import CorebizLogo from 'assets/icons/corebiz-logo-light.svg';
import VtexLogo from 'assets/icons/vtex-logo-light.svg';

const Footer = () => {
  return (
    <S.Container className="">
      <div className="container df items-center justify-between">
        <div className="info">
          <h2>Localização</h2>
          <address>
            <a href="https://goo.gl/maps/Rg122hi5FdYgXgNi9" target="_blank" rel="noopener noreferrer">
              Avenida Andrômeda, 2000. Bloco 6 e 8<br />
              Alphavile SP
            </a>
            <a href="mailto:brasil@corebiz.ag" target="_blank" rel="noopener noreferrer">
              brasil@corebiz.ag
            </a>
            <a href="tel:+551130901039" target="_blank" rel="noopener noreferrer">
              +55 11 3090 1039
            </a>
          </address>
        </div>
        <div className="cta">
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <img src={MailIcon} alt="ENTRE EM CONTATO" />
            <span>ENTRE EM CONTATO</span>
          </a>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <img src={TellIcon} alt="FALE COM O NOSSO CONSULTOR ONLINE" />
            <span>FALE COM O NOSSO <br /> CONSULTOR ONLINE</span>
          </a>
        </div>
        <div className="logo df items-center">
          <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noopener noreferrer">
            <span>Created by</span>
            <img src={CorebizLogo} alt="Corebiz" />
          </a>
          <a href="https://vtex.com/br-pt/" target="_blank" rel="noopener noreferrer">
            <span>Powered by</span>
            <img src={VtexLogo} alt="VTEX" />
          </a>
        </div>
      </div>
    </S.Container>
  )
}

export default Footer;