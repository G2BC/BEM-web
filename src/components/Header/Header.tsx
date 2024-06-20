import React from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadLink, HeadButtonEnter, HeadButtonRegister } from './Header.styles';
import Logo from '../../assets/cogumelo.png';
import SearchArea from '../Utils/SearchArea/SearchArea';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeadList>
        <HeadItem className="head-logo">
          <LogoImage src={Logo} alt="Logo" />
        </HeadItem>

        <HeadItem>
          <HeadLink href="/">BEM</HeadLink>
        </HeadItem>

        <HeadItem>
          <SearchArea />
        </HeadItem>

        <HeadItem className="head-buttons">
          <HeadButtonEnter>Entrar</HeadButtonEnter>
          <HeadButtonRegister>Cadastrar</HeadButtonRegister>
        </HeadItem>
      </HeadList>
    </HeaderContainer>
  );
};

export default Header;
