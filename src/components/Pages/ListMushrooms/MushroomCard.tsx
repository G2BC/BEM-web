import * as React from "react";
import IconButton from "@mui/material/IconButton";
import observationImage from "../../../assets/observationButton.svg";
import circuloBandeira from "../../../assets/bandeiraBrasil.svg";
import amareloBandeira from "../../../assets/amareloBandeira.svg";
import azulBandeira from "../../../assets/azulBandeira.svg"; 
import letraTbandeira from "../../../assets/tBandeira.svg"; 
import extinctionImage from "../../../assets/extinctionButton.svg";
import { CardContainer, CardHeader, CardImage, CardActionContainer } from "./MushroomCard.styles";
import vu from "../../../assets/vu.svg";

interface RecipeReviewCardProps {
  title: string;
  subheader: string;
  imageUrl: string;
  brazilianType: string;
}

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({
  title,
  subheader,
  imageUrl,
  brazilianType
}: RecipeReviewCardProps) => {
  const titleStyle: React.CSSProperties = {
    fontFamily: "Roboto",
    fontSize: "24px",
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "5.75px",
    textAlign: "left",
    marginRight: "60px"
  };

  const subheaderStyle: React.CSSProperties = {
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "5.75px",
    textAlign: "left"
  };

  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={"Mushroom"} />
      <CardHeader>
        <h3 style={titleStyle}><i>{title}</i></h3>
        <p style={subheaderStyle}>({subheader})</p>
      </CardHeader>

      <CardActionContainer>
        <IconButton aria-label="Observações">
          <img src={observationImage} alt={"Observation Image"} style={{ width: 25, height: 25, marginRight: "25px" }} />
          <span style={{ marginRight: "1px", fontSize: "20px", fontFamily: "H5 Bold",lineHeight:"12.5px" }}>Observações</span>
        </IconButton>
        <IconButton aria-label="Brazil Flag" style={{ position: "relative" }}>
          <img src={circuloBandeira} alt="Brazil Flag" style={{ width: 35, height: 35 }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-51%, -49%)",
              width: "68%", 
              height: "47%", 
              backgroundImage: `url(${amareloBandeira})`,
              backgroundSize: "cover", 
              backgroundRepeat: "no-repeat" 
            }}
          ></div>
          <img
            src={azulBandeira}
            alt={"azul"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "16px", 
              height: "16px", 
            }}
          />
          <img
            src={letraTbandeira}
            alt={"T"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "10px", // Ajuste conforme necessário
              height: "10px", // Ajuste conforme necessário
            }}
          />
        </IconButton>
        <IconButton aria-label="Extinção">
          <img src={extinctionImage} alt={"Extinction Image"} style={{ width: 35, height: 35 }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%", // Largura da parte amarela em relação ao botão (ajuste conforme necessário)
              height: "20%", // Altura da parte amarela em relação ao botão (ajuste conforme necessário)
              backgroundImage: `url(${vu})`, // Use a parte amarela da bandeira como imagem de fundo
              backgroundSize: "cover", // Ajusta o tamanho da imagem para cobrir todo o elemento
              backgroundRepeat: "no-repeat" // Evita a repetição da imagem de fundo
            }}
          ></div>
        </IconButton>
      </CardActionContainer>
    </CardContainer>
  );
}

export default RecipeReviewCard;
