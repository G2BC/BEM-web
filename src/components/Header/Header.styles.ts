import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  background-color: #131313;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Adicionado para evitar overflow */
  height: 10%;
  width: 100%; /* Garante que o contêiner ocupe 100% da largura */
  box-sizing: border-box; /* Inclui padding e border na largura e altura do elemento */
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  padding-right: 13px; /* Espaço à direita */

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const HeadList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ajusta a distribuição dos itens */
  padding: 10px 90px; /* Ajuste do padding para um melhor espaçamento */
  margin: 0; /* Remove margem para evitar overflow */
  flex-wrap: wrap; /* Permite que os itens do cabeçalho se envolvam em várias linhas, se necessário */
  width: 100%; /* Garante que a lista ocupe 100% da largura */
  box-sizing: border-box; /* Inclui padding e border na largura e altura do elemento */

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 10px; /* Ajusta o padding para um melhor espaçamento em telas menores */
  }
`;

export const HeadItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0; /* Remove margem para evitar overflow */

  &.head-buttons {
    gap: 10px; /* Adiciona espaçamento entre os botões */
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px;
  }
`;

export const HeadLink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
  color: white;
  text-align: center;
  position: relative;
  display: inline-block;

  text-shadow:
    1px 1px 0 #ff5e14,
    2px 2px 0 #ff5e14,
    3px 3px 0 #ff5e14,
    4px 4px 0 #ff5e14;

  padding-left: 13px; /* Espaço à esquerda */
  padding-right: 13px; /* Espaço à direita */  

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeadLinkHover = styled(HeadLink)`
  &:hover {
    text-decoration: underline;
  }
`;

export const HeadButtonEnter = styled.button({
  background: '#c93e1e',
  borderRadius: 10,
  padding: '10px 20px',
  border: '1px solid #c93e1e',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  '&:hover': {
    background: '#ffffff',
    color: '#ff5e14'
  }
});

export const HeadButtonRegister = styled.button({
  background: 'rgba(19, 19,19, 1.0)',
  borderRadius: 10,
  padding: '10px 20px',
  border: '2px solid #ff5e14',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  '&:hover': {
    background: '#fff',
    color: '#ff5e14',
  }
});

export const NormalHeadText = styled.a`
  font-size: 16px; /* Altere o valor conforme necessário */
  color: #fff;
  text-decoration: none;

  &:hover {
    color: '#ff5e14';
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  font-size: 90px;
  cursor: pointer;
  color: white;
  top: 10px;
  right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  background-color: #131313;
  width: 100%;
  top: 60px; /* Adjust based on your header height */
  left: 0;
  z-index: 100;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
@media (max-width: 768px){
display: none;
}
`;

export const MainButtonContainer = styled.div`
@media (max-width: 768px){
display: none;
}
`;
