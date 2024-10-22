import React, { useState } from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadButtonEnter, HeadButtonRegister, NormalHeadText, HamburgerMenu, MobileMenu, LinkContainer, MainButtonContainer } from './Header.styles';
import Logo from '../../assets/Logo.svg';
import SearchArea from '../Utils/SearchArea/SearchArea';
import { useNavigate } from "react-router-dom";

const headerLinks = [
  { text: 'Início', link: '/' },
  { text: 'Explorar', link: '/list?taxonomy=%&state=&bem=&habitat=' },
  { text: 'Como citar', link: '/' },
  { text: 'Sobre', link: '/' },
  { text: 'Instruções', link: '/' },
  { text: 'Contato', link: '/' },
  { text: 'Colaboradores', link: '/collaborators' }
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

        <HamburgerMenu onClick={toggleMobileMenu}>
          ☰
        </HamburgerMenu>

        <MobileMenu isOpen={isMobileMenuOpen}>
          {headerLinks.map((headerLink) => (
            <HeadItem key={headerLink.text}>
              <NormalHeadText href={headerLink.link}>{headerLink.text}</NormalHeadText>
            </HeadItem>
          ))}

          <HeadItem className="head-buttons">
            <HeadButtonEnter>Entrar</HeadButtonEnter>
            <HeadButtonRegister>Cadastrar</HeadButtonRegister>
          </HeadItem>
        </MobileMenu>

        {headerLinks.map((headerLink) => {
          return <LinkContainer><HeadItem><NormalHeadText href={headerLink.link}>{headerLink.text}</NormalHeadText></HeadItem></LinkContainer>
        })};

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
