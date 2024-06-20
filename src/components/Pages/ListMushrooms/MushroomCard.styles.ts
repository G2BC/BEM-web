import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Ajuste a altura conforme necessário */
  object-fit: cover; /* Garante que a imagem ocupe todo o espaço disponível */
`;

export const CardHeader = styled.div`
  padding: 16px;
`;

export const CardActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;
