import React, { useState } from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadButtonEnter, HeadButtonRegister, NormalHeadText, HamburgerMenu, MobileMenu, LinkContainer, MainButtonContainer, MenuHamburguer } from './Header.styles';
import Logo from '../../assets/cogumelo.svg';
import Manu from '../../assets/menu.svg';
import SearchArea from '../Utils/SearchArea/SearchArea';
import { useNavigate } from "react-router-dom";

const headerLinks = [
  { text: 'Início', link: '/' },
  { text: 'Explorar', link: '/list?taxonomy=%&state=&bem=&habitat=' },
  { text: 'Sobre', link:'/about' },
  { text: 'Instruções', link: '/' },
  { text: 'Contato', link: '/' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); 
  };
  const handleRegisterClick = () => {
  navigate("/register");  
  };

  return (
    <HeaderContainer>
      <HeadList>

        <HeadItem className="head-logo">
          <LogoImage src={Logo} alt="Logo" />
        </HeadItem>

        <HeadItem onClick={toggleMobileMenu}>
          <MenuHamburguer src={Manu} alt="Logo" />
        </HeadItem>

        <MobileMenu isOpen={isMobileMenuOpen}>
          {headerLinks.map((headerLink) => (
            <HeadItem key={headerLink.text}>
              <NormalHeadText href={headerLink.link}>{headerLink.text}</NormalHeadText>
            </HeadItem>
          ))}
        </MobileMenu>

        {headerLinks.map((headerLink) => {
          return <LinkContainer><HeadItem><NormalHeadText href={headerLink.link}>{headerLink.text}</NormalHeadText></HeadItem></LinkContainer>
        })}

      <HeadItem>
          <SearchArea />
        </HeadItem>
      <MainButtonContainer>

      <HeadItem className="head-buttons">
          <HeadButtonEnter onClick={handleLoginClick}>
            Entrar 
          </HeadButtonEnter>
          <HeadButtonRegister onClick={handleRegisterClick}>
            Cadastrar
          </HeadButtonRegister>
        </HeadItem>
        </MainButtonContainer>
      </HeadList>
    </HeaderContainer>
  );
};

export default Header;
