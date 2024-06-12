import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #151414;
  position: relative;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoFooter = styled.div`
  flex: 40%;
  margin-right: 20px; /* Adiciona margem à direita para separar o logotipo da lista de páginas */
`;

export const BigLogo = styled.h2`
  margin-right: 50px;
  font-size: 3rem;
  color: white;
  text-align: center;
  position: relative;
  display: inline-block;

  text-shadow:
    1px 1px 0 #ff5e14,
    2px 2px 0 #ff5e14,
    3px 3px 0 #ff5e14,
    4px 4px 0 #ff5e14;

  span {
    display: block;
  }
`;

export const FooterLogo = styled.div`
  flex: 1;
`;

export const FooterImage = styled.img`
  max-width: 200px;
`;

export const FooterSection = styled.div`
  flex: 1;
`;

export const FooterHeading = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 600;

  position: relative;
  font-size: 1.5rem;
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: #ff5e14;
    position: absolute;
    left: 0;
    bottom: -5px;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  margin-right: 112px;
  padding: 0;
  text-align: left;

  @media screen and (max-width: 768px) {
    margin-right: 0; /* Remove a margem à direita em telas menores */
  }
`;

export const FooterListItem = styled.li`
  margin-bottom: 12px;
`;

export const FooterLink = styled.a`
  color: white;
  text-transform: capitalize;

  &:hover {
    color: #ff5e14;
  }
`;

export const JoinUsSection = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 112px;
  margin-bottom: 80px;
  white-space: pre-wrap;

  p {
    color: white; /* Define a cor branca para o texto */
    font-size: 16px;
    max-width: 400px;
    white-space: pre-wrap;
    
  }

  @media screen and (max-width: 768px) {
    margin-left: 0; /* Remove a margem à esquerda em telas menores */
  }
`;

export const FooterBottom = styled.div`
  background: #202020;
  padding: 25px 0;
  width: 100%;
  color: white;
`;

export const FooterButton = styled.button({
  background: '#ff5e14',
  padding: '13px 20px',
  border: '1px solid #ff5e14',
  borderRadius: 3,
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  '&:hover': {
    background: '#ffffff',
    color: '#ff5e14',
  }
});
