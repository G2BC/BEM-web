import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100px;
  position: relative; /* Permite posicionamento absoluto da caixa de filtro */
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  height: 48px;
  width: 300px;
`;

export const StyledButton = styled.button`
  background: #ff5e14;
  padding: 0 20px;
  border: 1px solid #ff5e14;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;

  &:hover {
    background: #ffffff;
    color: #ff5e14;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 8px;
  position: absolute; /* Posicionamento absoluto */
  top: 60px; /* Ajuste para aparecer abaixo do botão */
  z-index: 1000; /* Garantir que a caixa apareça acima de outros elementos */
  border-bottom: 3px solid #ff5e14; /* Borda inferior laranja */
  margin-bottom: -3px; /* Extensão de 3px para baixo */
`;


export const StyledSelect = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: none;
  border-bottom: 2px solid #d3d3d3; /* Borda inferior cinza claro */
  border-radius: 0;
  background-color: white;
  appearance: none;
  margin-bottom: 10px; /* Espaçamento entre os campos */
`;

export const StyledTextField = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: none;
  border-bottom: 2px solid #d3d3d3; /* Borda inferior cinza claro */
  border-radius: 0;
  background-color: white;
  margin-bottom: 10px; /* Espaçamento entre os campos */
`;
