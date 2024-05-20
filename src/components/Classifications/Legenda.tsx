import React from "react";
import styled from "styled-components";
import BEM1Icon from "../../assets/BEM1.png";
import BEM2Icon from "../../assets/BEM2.png";
import BEM3Icon from "../../assets/BEM3.png";
import BEM4Icon from "../../assets/BEM4.png";
import BEM5Icon from "../../assets/BEM5.png";
import BEM6Icon from "../../assets/BEM6.png";
import BEM7Icon from "../../assets/BEM7.png";
import BEM8Icon from "../../assets/BEM8.png";
import BEM9Icon from "../../assets/BEM9.png";
import BEM10Icon from "../../assets/BEM10.png";
import P1Icon from "../../assets/P1.png";
import P2Icon from "../../assets/P2.png";

const LegendContainer = styled.div`
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


const LegendTitle = styled.h3`
  margin: 0;
  padding: 10px;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 16px;
`;

const LegendItem = styled.div`
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

const Tooltip = styled.div`
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
  top: 100%; /* Position the tooltip below the item */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display:flex;
  aligh-items:center;
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`;


const MushroomIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const TooltipImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

interface Icons {
    [key: string]: string;
  }
  

const icons:Icons = {
    BEM1: BEM1Icon,
    BEM2: BEM2Icon,
    BEM3: BEM3Icon,
    BEM4: BEM4Icon,
    BEM5: BEM5Icon,
    BEM6: BEM6Icon,
    BEM7: BEM7Icon,
    BEM8: BEM8Icon,
    BEM9: BEM9Icon,
    BEM10: BEM10Icon,
    P1: P1Icon,
    P2: P2Icon,
  };

  const mushroomTypes = [
    {
      name: "BEM1",
      color: "#66BB6A",
      species: 10,
      icon: BEM1Icon,
      tooltip: "Espécies comestíveis que claramente ocorrem e são consumidas no Brasil ou que representam um novo recurso alimentar para o país.",
      tooltipImage: BEM1Icon,
    },
    {
      name: "BEM2",
      color: "#9CCC65",
      species: 4,
      icon: BEM2Icon,
      tooltip: "Espécie comestível (após alguns preparos ou cuidados prévios) que claramente ocorre e é consumida no Brasil ou que representa um novo recurso alimentar para o país.",
      tooltipImage: BEM2Icon,
    },
    {
      name: "BEM3",
      color: "#FFEB3B",
      species: 30,
      icon: BEM3Icon,
      tooltip: "Espécie comestível consumida no Brasil mas que necessita de mais estudos para confirmar sua identidade e ocorrência no país.",
      tooltipImage: BEM3Icon,
    },
    {
      name: "BEM4",
      color: "#FFEE58",
      species: 11,
      icon: BEM4Icon,
      tooltip: "Espécie comestível (após alguns preparos ou cuidados prévios) consumida no Brasil, mas que requer mais estudos para confirmar sua identidade e ocorrência no país.",
      tooltipImage: BEM4Icon,
    },
    {
      name: "BEM5",
      color: "#FFA726",
      species: 240,
      icon: BEM5Icon,
      tooltip: "Espécie comestível não claramente consumida no Brasil, mas que representa um novo recurso alimentar para o país após novos estudos para confirmar sua identidade e ocorrência no Brasil.",
      tooltipImage: BEM5Icon,
    },
    {
      name: "BEM6",
      color: "#FF7043",
      species: 44,
      icon: BEM6Icon,
      tooltip: "Espécie comestível (após alguns preparos ou cuidados prévios) claramente não consumida no Brasil, mas que representa um novo recurso alimentar para o país após novos estudos para confirmar sua identidade e ocorrência no Brasil.",
      tooltipImage: BEM6Icon,
    },
    {
      name: "BEM7",
      color: "#EF5350",
      species: 18,
      icon: BEM7Icon,
      tooltip: "Espécie que ocorre claramente no Brasil, mas com incidência pouco clara ou ausente de que foi consumida.",
      tooltipImage: BEM7Icon,
    },
    {
      name: "BEM8",
      color: "#EC407A",
      species: 106,
      icon: BEM8Icon,
      tooltip: "Espécie com incidência pouco clara ou ausente para consumo e que requer mais estudos para confirmar sua identidade e ocorrência no Brasil.",
      tooltipImage: BEM8Icon,
    },
    {
      name: "BEM9",
      color: "#AB47BC",
      species: 1,
      icon: BEM9Icon,
      tooltip: "Espécie que ocorre claramente no Brasil, mas com comestibilidade não confirmada, incluindo poucos registros de venenosidade.",
      tooltipImage: BEM9Icon,
    },
    {
      name: "BEM10",
      color: "#7E57C2",
      species: 24,
      icon: BEM10Icon,
      tooltip: "Espécie com comestibilidade não confirmada, incluindo poucos registros de venenosidade, e que necessita de mais estudos para confirmar sua identidade e ocorrência no Brasil.",
      tooltipImage: BEM10Icon,
    },
    {
      name: "P1",
      color: "#5C6BC0",
      species: 1,
      icon: P1Icon,
      tooltip: "Espécie venenosa que ocorre claramente no Brasil e causa reação adversa e prejudicial quando consumida.",
      tooltipImage: P1Icon,
    },
    {
      name: "P2",
      color: "#42A5F5",
      species: 14,
      icon: P2Icon,
      tooltip: "Espécie venenosa que causa reações adversas e nocivas quando consumida e necessita de mais estudos para confirmação de sua identidade e ocorrência no Brasil.",
      tooltipImage: P2Icon,
    },
  ];

const Legend: React.FC = () => {
    return (
      <LegendContainer className="legend-container">
        <LegendTitle>Cogumelos com Ocorrência no Brasil</LegendTitle>
        {mushroomTypes.map((mushroom) => (
          <LegendItem key={mushroom.name}>
            <ItemLeft>
              <MushroomIcon src={icons[mushroom.name]} alt="Mushroom Icon" />
              <span>{mushroom.name}</span>
            </ItemLeft>
            <span>{mushroom.species} Espécies</span>
            <Tooltip className="tooltip">
            <TooltipImage src={mushroom.tooltipImage} alt={`${mushroom.name} image`} />
            {mushroom.tooltip}
          </Tooltip>
          </LegendItem>
        ))}
      </LegendContainer>
    );
  };
  
  export default Legend;
