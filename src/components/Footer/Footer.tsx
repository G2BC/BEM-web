import React from 'react';
import { FooterContainer, FooterContent, FooterLogo, FooterSection, FooterHeading,  FooterImage, FooterList, FooterListItem, FooterLink, JoinUsSection, FooterBottom, FooterButton, VerticalLine } from './Footer.styles'; 
import Logo from './../../assets/cogumelo.svg';
import {useRegisterNavigation} from "./../../Utils/navigation"
  
const Footer: React.FC = () => {
  const handleRegisterClick = useRegisterNavigation();
  return (
    <FooterContainer>
      <FooterContent>
        
            <FooterLogo>
              <img src= {Logo}  alt="Brazilian Edible Mushrooms Logo"  width="300" height="200"/>
            </FooterLogo>
         
            
            <FooterList>
              <FooterHeading>Links</FooterHeading>
              <FooterListItem><FooterLink href='/collaborators'>Colaboradores</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Enviar Mensagem</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Ajuda</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Sobre o Projeto</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Como Citar</FooterLink></FooterListItem>
            </FooterList>

            <VerticalLine />
            
            <JoinUsSection>
              <FooterHeading>Junte-se a nós:</FooterHeading>
              <p>Venha se unir à nossa comunidade fungística e explore o mundo dos cogumelos conosco!</p>
              <FooterButton onClick={handleRegisterClick}>REGISTRE-SE</FooterButton>
            </JoinUsSection>
        
      </FooterContent>
      <FooterBottom>
        Copyright &copy; {new Date().getFullYear()} Brazilian Edible Mushrooms
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
