import React from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadLink } from './Header.styles';
import Button from '../Button/Button';
import Logo from '../../assets/cogumelo.png';
import SearchArea from '../SearchArea/SearchArea';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeadList>
        <HeadItem className="head-logo">
          <LogoImage src={Logo} alt="Logo" />
        </HeadItem>
        <HeadItem className="head-item">
          <HeadLink href="/">BEM</HeadLink>
        </HeadItem>
        <HeadItem>
            <SearchArea/>
        </HeadItem>
        <HeadItem style={{ marginLeft: 'auto' }}>
          <Button backgroundColor="#a65f3e" text="entrar" />
        </HeadItem>
        <HeadItem>
          <Button text="cadastrar" />
        </HeadItem>
      </HeadList>
    </HeaderContainer>
  );
};

export default Header;
