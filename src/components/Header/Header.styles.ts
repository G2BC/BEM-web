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

export const HeadItem = styled.li`
  margin-right: 15px;
`;

export const HeadLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
`;

export const HeadLinkHover = styled(HeadLink)`
  &:hover {
    text-decoration: underline;
  }
`;
