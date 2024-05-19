import React from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadLink, HeadButton1, HeadButton2} from './Header.styles';
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

        <HeadItem>
          <HeadLink href="/">BEM</HeadLink>
        </HeadItem>

        <HeadItem style={{ flex: 1, justifyContent: 'center' }}>
            <SearchArea/>
        </HeadItem>

        <HeadItem className="head-buttons" style={{ justifyContent: 'flex-end' }}>
          <HeadButton2>Entrar</HeadButton2>
          <HeadButton1>Cadastrar</HeadButton1>  
        </HeadItem>
      </HeadList>
      
      
    </HeaderContainer>
  );
};

export default Header;
