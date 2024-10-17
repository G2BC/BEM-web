import React from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadLink, HeadButtonEnter, HeadButtonRegister, NormalHeadText } from './Header.styles';
import Logo from '../../assets/cogumelo.png';
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

        <HeadItem>
          <HeadLink href="/">BEM</HeadLink>
        </HeadItem>

        {headerLinks.map((headerLink) => {
          return <HeadItem><NormalHeadText href={headerLink.link}>{headerLink.text}</NormalHeadText></HeadItem>
        })};

        <HeadItem>
          <SearchArea />
        </HeadItem>

        <HeadItem className="head-buttons">
          <HeadButtonEnter onClick={handleLoginClick}>
            Entrar 
          </HeadButtonEnter>
          <HeadButtonRegister onClick={handleRegisterClick}>
            Cadastrar
          </HeadButtonRegister>
        </HeadItem>
      </HeadList>
    </HeaderContainer>
  );

};

export default Header;
