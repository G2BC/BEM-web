import styled from "styled-components";

export const SubtitileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ccc;
  width: 250px;
  font-family: Arial, sans-serif;
  margin-left: auto; /* Adicionado para movê-lo para a direita */
  margin-right: 20px; /* Espaçamento opcional à direita */
  margin-top: 20px;
  z-index: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


export const SubtitleTitle = styled.h3`
  margin: 0;
  padding: 10px;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 16px;
`;

export const SubtitleItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  position: relative;

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
  right: 56%;
  transform: translateX(-50%);
  z-index: 1000;
  display:flex;
  aligh-items:center;
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
