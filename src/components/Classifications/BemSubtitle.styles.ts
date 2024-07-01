import styled from "styled-components";

export const SubtitileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 0px solid #ccc;
  width: 300px;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 10px;
  z-index: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: calc(100vh - 40px); /* Ajuste de altura máxima para caber na tela */
`;

export const SubtitleTitle = styled.h3`
  margin: 0;
  padding: 15px;
  text-align: center;
  background-color: #4CAF50;
  color: #fff;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
`;

export const SubtitleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border: none;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #f9f9f9;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

export const SubtitleTooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 12px;
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  left: 0; /* Ajuste a posição para a esquerda */
  top: 100%; /* Ajuste a posição para baixo */
  transform: translateY(0%); /* Mantém na posição normal */
  z-index: 1000;
  display: flex;
  align-items: center;
`;

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const MushroomIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const TooltipImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
