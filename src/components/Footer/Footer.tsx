import React from 'react';
import { FooterContainer, FooterContent, FooterLogo, FooterSection, FooterHeading, BigLogo, FooterImage, FooterList, FooterListItem, FooterLink, JoinUsSection, FooterBottom, FooterButton } from './Footer.styles'; 
import Logo from './../../assets/cogumelo.png';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        
            <FooterLogo>
              <BigLogo>
                <span>Brazilian</span>
                <span>Edible</span>
                <span>Mushrooms</span>
              </BigLogo>
            </FooterLogo>
         
            
            <FooterList>
              <FooterHeading>Links</FooterHeading>
              <FooterListItem><FooterLink href="#">Colaboradores</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Enviar Mensagem</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Ajuda</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Sobre o Projeto</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Como Citar</FooterLink></FooterListItem>
            </FooterList>
        
            <JoinUsSection>
              <FooterHeading>Junte-se a nós:</FooterHeading>
              <p>Venha se unir à nossa comunidade fungística e explore o mundo dos cogumelos conosco!</p>
              <FooterButton>REGISTRE-SE</FooterButton>
            </JoinUsSection>
        
      </FooterContent>
      <FooterBottom>
        Copyright &copy; {new Date().getFullYear()} Brazilian Edible Mushrooms
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
