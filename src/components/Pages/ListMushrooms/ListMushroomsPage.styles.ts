import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;
`;

export const CardGrid = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 20px;
`;

export const CardItem = styled.div`
display: flex;
justify-content: center;
`;
