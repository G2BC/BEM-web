import React from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadLink } from './Header.styles';
// import Button from '../Utils/Button/Button';
import Logo from '../../assets/cogumelo.png';
import SearchArea from '../Utils/SearchArea/SearchArea';
import { Button } from '@mui/material';

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
          <Button variant='contained'>Entrar</Button>
        </HeadItem>
        <HeadItem>
          <Button variant="outlined">Cadastrar</Button>
        </HeadItem>
      </HeadList>
    </HeaderContainer>
  );
};

export default Header;
