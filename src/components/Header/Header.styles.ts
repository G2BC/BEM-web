import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  background-color: #131313;
  padding: 10px 20px;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const HeadList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 100px;
  display: flex;
  align-items: center;
`;



export const HeadItem = styled.div`
  display: flex;
  align-items: center;

  &.head-buttons {
    gap: 10px; /* Adiciona espaçamento entre os botões */
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
`;

export const HeadLinkHover = styled(HeadLink)`
  &:hover {
    text-decoration: underline;
  }
`;


export const HeadButtonEnter = styled.button({
  background: '#ff5e14',
  borderRadius: 3,
  padding: '13px 20px',
  border: '1px solid #ff5e14',
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
  background: '#fff',
  borderRadius: 3,
  padding: '13px 20px',
  border: '1px solid #ff5e14',
  color: '#ff5e14',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background - color 0.3s ease, color 0.3s ease',
  '&: hover': {
    background: '#ff5e14',
    color: '#ffffff',
  }
});
