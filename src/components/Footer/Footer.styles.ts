import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #131313;
  color: #ffffff;
  padding: 10px 20px;
  margin-top: 400px; /* Adicionando margem superior para distanciar do conteúdo acima */
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  text-align: left;
`;

export const LogoFooter = styled.div`
  flex: 40%;
`;

export const FooterSection = styled.div`
  flex: 60%;
  display: flex;
`;

export const FooterHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const BigLogo = styled.h2`
  font-size: 3rem;
  display: inline;
`;

export const FooterImage = styled.img`
  width: 50px; /* Ajuste conforme necessário */
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 30px;
  margin: 0;
  width: 50%;
`;

export const FooterListItem = styled.li`
  margin-bottom: 25px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #a65f3e;
    text-decoration: underline; /* Opcional: adicionar sublinhado ao fazer hover */
  }

`;

export const JunteseSection = styled.div`
  width: 50%;
`;

export const FooterBottom = styled.div`
  margin-left: 80px;
  text-align: left;
  font-size: 0.8rem;
`;

export const FooterButton = styled.button`
background-color: #a65f3e;
color: #ffffff;
border: none;
padding: 10px 20px;
font-size: 1rem;
cursor: pointer;
transition: background-color 0.3s ease;
border-radius: 5px;

&:hover {
  background-color: #9D8D8F;
}
`;
