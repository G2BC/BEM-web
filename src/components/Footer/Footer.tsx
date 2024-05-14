import React from 'react';
import {
  FooterContainer,
  FooterContent,
  LogoFooter,
  FooterSection,
  FooterHeading,
  BigLogo,
  FooterImage,
  FooterList,
  FooterListItem,
  FooterLink,
  JunteseSection,
  FooterBottom,
  FooterButton
} from './Footer.styles';
import Logo from './../../assets/cogumelo.png';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoFooter>
          <FooterImage src={Logo} alt="Logo" />
          <BigLogo>BEM</BigLogo>
        </LogoFooter>
        <FooterSection>
          <FooterList>
            <FooterListItem><FooterLink href="/">Home</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/sobre">Sobre</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/ajuda">Ajuda</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/colaboradores">Colaboradores</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/fale conosco">Fale Conosco</FooterLink></FooterListItem>
          </FooterList>
          <JunteseSection>
            <FooterHeading>Junte-se à nós:</FooterHeading>
            <p>Venha se unir à nossa comunidade fungística e explore o mundo dos cogumelos conosco!</p>
            <FooterButton>Cadastrar-se</FooterButton>
          </JunteseSection>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        Copyright &copy; {new Date().getFullYear()} Brazilian Edible Mushrooms
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
