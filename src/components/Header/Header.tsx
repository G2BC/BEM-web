import React from 'react';
import { HeaderContainer, LogoImage, HeadList, HeadItem, HeadLink, HeadButtonEnter, HeadButtonRegister, NormalHeadText } from './Header.styles';
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
          <NormalHeadText href="/">Início</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <NormalHeadText href="/">Explorar</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <NormalHeadText href="/">Como citar</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <NormalHeadText href="/">Sobre</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <NormalHeadText href="/">Instruções</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <NormalHeadText href="/">Contato</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <NormalHeadText href="/collaborators">Colaboradores</NormalHeadText>
        </HeadItem>

        <HeadItem>
          <SearchArea />
        </HeadItem>

        <HeadItem className="head-buttons">
          <HeadButtonEnter>
            Entrar
          </HeadButtonEnter>
          <HeadButtonRegister>
            Cadastrar
          </HeadButtonRegister>
        </HeadItem>
      </HeadList>
    </HeaderContainer>
  );
};

export default Header;
