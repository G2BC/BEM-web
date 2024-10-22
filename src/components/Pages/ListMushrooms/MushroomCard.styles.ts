import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  padding: 10px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white; /* Cor de fundo */
  transition: transform 0.3s ease-in-out; /* Animação suave ao passar o mouse */
  font-style: italic;
  
  &:hover {
    transform: scale(1.05); /* Efeito de hover para destacar o card */
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Para telas menores, o card ocupa 100% da largura */
    margin: 10px 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;  
`;

export const CardHeader = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 10px;
`;

export const ScientificName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  text-align: Left;
`;

export const PopularName = styled.p`
  font-size: 16px;
  color: #666; /* Cor mais clara para contraste */
  margin: 5px 0;
  text-align: left;
`;

export const CardActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 0px;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ObservationCount = styled.span`
  margin-left: 8px; // Adiciona espaçamento entre o ícone e o texto
  font-size: 12px;
  font-family: "H5 Bold", sans-serif;
  line-height: 1.5;
`;

export const ExtinctionButtonWrapper = styled.div`
  position: relative;
`;

export const ExtinctionButtonIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const ExtinctionButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 20%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BrazilButtonWrapper = styled.div`
  position: relative;
`;

export const BrazilButtonIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const BrazilButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 20%;
  max-width: 12px;
  max-height: 12px;
  background-size: contain;
  background-repeat: no-repeat;
`;

// Estilização padrão para o IconButton
export const CustomIconButton = styled(IconButton)`
  padding: 5px 10px;
  &:hover {
    background-color: transparent;
  }
  &:focus-visible {
    background-color: transparent;
  }
`;
