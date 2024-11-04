import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import observationImage from "../../../assets/observationButton.svg";
import flagBrazilianType from "../../../assets/brasilT.png";
import flagSynonymType from "../../../assets/brasilTS.png";
import defaultImageWhite from "../../../assets/white.png";
import defaultImage from "../../../assets/defaultImage.png";
import extinctionImage0 from "../../../assets/NE.svg";
import extinctionImage1 from "../../../assets/DD.svg";
import extinctionImage2 from "../../../assets/LC.svg";
import extinctionImage3 from "../../../assets/NT.svg";
import extinctionImage4 from "../../../assets/VU.svg";
import extinctionImage5 from "../../../assets/EN.svg";
import extinctionImage6 from "../../../assets/CR.svg";
import extinctionImage7 from "../../../assets/EW.svg";
import extinctionImage8 from "../../../assets/EX.svg";

import {
  CardContainer,
  CardHeader,
  CardImage,
  CardActionContainer,
  ScientificName,
  PopularName,
  IconButtonWrapper,
  ObservationCount,
  BrazilButtonWrapper,
  BrazilButtonIcon,
  BrazilButtonOverlay,
  ExtinctionButtonWrapper,
  ExtinctionButtonIcon,
  ExtinctionButtonOverlay,
  CustomIconButton,
} from "./MushroomCard.styles";

interface RecipeReviewCardProps {
  scientificName: string;
  popularName: string;
  imageUrl: string;
  brazilianType: string;
  onTap: () => void;
  occurrencesCount: number;
  redListClassification: number;
}

const getBrazilImage = (brazilianType: string) => {
  switch (brazilianType) {
    case "T":
      return flagBrazilianType;
    case "TS":
      return flagSynonymType;
    default:
      return defaultImageWhite;
  }
};

const getBrazilTitle = (brazilianType: string) => {
  switch (brazilianType) {
    case "T":
      return "Tipo Brasileiro";
    case "TS":
      return "Sinônimo Tipo Brasileiro";
    default:
      return "";
  }
};

const getExtinctionImage = (redListClassification: number) => {
  const extinctionImages = [
    extinctionImage0,
    extinctionImage1,
    extinctionImage2,
    extinctionImage3,
    extinctionImage4,
    extinctionImage5,
    extinctionImage6,
    extinctionImage7,
    extinctionImage8,
  ];
  return extinctionImages[redListClassification - 1];
};
const getExtinctionTitle = (redListClassification: number) => {
  switch (redListClassification - 1) {
    case 0:
      return "Não Avaliado (NE) Um táxon é considerado Não Avaliado (NE) quando ainda não foi avaliado. Espécies Não Avaliadas não são publicadas na Lista Vermelha da IUCN.";
    case 1:
      return "Dados Insuficientes (DD) Um táxon é classificado como Dados Insuficientes (DD) quando não há informações adequadas para avaliar seu risco de extinção, mesmo que sua biologia seja bem conhecida.";
    case 2:
      return "Menor Preocupação (LC) Um táxon é considerado Menor Preocupação (LC) se, após avaliação, não se qualifica como Criticamente Em Perigo, Em Perigo, Vulnerável ou Quase Ameaçado.";
    case 3:
      return "Quase Ameaçado (NT) Um táxon é classificado como Quase Ameaçado (NT) quando está próximo de se qualificar para uma categoria ameaçada, mas atualmente não atende aos critérios de Criticamente Em Perigo, Em Perigo ou Vulnerável.";
    case 4:
      return "Vulnerável (VU) Um táxon é Vulnerável (VU) se evidencia indica que atende a qualquer um dos critérios A a E, enfrentando alto risco de extinção no meio natural.";
    case 5:
      return "Em Perigo (EN) Um táxon é considerado Em Perigo (EN) se atende a qualquer um dos critérios A a E, enfrentando risco muito alto de extinção no meio natural.";
    case 6:
      return "Criticamente Em Perigo (CR) Um táxon é classificado como Criticamente Em Perigo (CR) se atende a qualquer um dos critérios A a E, enfrentando risco extremamente alto de extinção no meio natural.";
    case 7:
      return "Extinto na Natureza (EW) Um táxon é considerado Extinto na Natureza (EW) quando sobrevive apenas em cultivo ou em cativeiro, sendo presumido extinto quando pesquisas exaustivas não encontram indivíduos em seu habitat histórico.";
    case 8:
      return "Extinto (EX) Um táxon é classificado como Extinto (EX) quando não há dúvidas razoáveis de que o último indivíduo morreu, presumindo-se extinto após pesquisas exaustivas não registrarem indivíduos em seu habitat histórico.";
    default:
      return "Classificação Desconhecida";
  }
};


const getImageSrc = (imageUrl: string | null | undefined): string => {
  return imageUrl ? imageUrl : defaultImage;
};

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({
  scientificName,
  popularName,
  imageUrl,
  brazilianType,
  redListClassification,
  onTap,
  occurrencesCount,
}: RecipeReviewCardProps) => {
  const imageSrc = getImageSrc(imageUrl);
  return (
    <CardContainer onClick={onTap} style={{ cursor: "pointer" }}>
      <CardImage src={imageSrc} alt={"Mushroom"} />
      <CardHeader>
        <ScientificName>{scientificName}</ScientificName>
        <PopularName>{popularName ? popularName : <br/>}</PopularName>
      </CardHeader>

      <CardActionContainer>
        <IconButtonWrapper>
          <CustomIconButton aria-label="Observações">
            <img src={observationImage} alt={"Observation Image"} />
            <ObservationCount>{occurrencesCount} Observações</ObservationCount>
          </CustomIconButton>
        </IconButtonWrapper>
        
          <Tooltip
            title={getBrazilTitle(brazilianType)} 
            arrow
          >
            <BrazilButtonWrapper>
              <CustomIconButton aria-label="Brazil">
                <BrazilButtonIcon src={getBrazilImage(brazilianType)} alt={"Brazil Image"} />
              </CustomIconButton>
            </BrazilButtonWrapper>
          </Tooltip>

          <Tooltip
             title={getExtinctionTitle(redListClassification)} 
             arrow
          >
            <ExtinctionButtonWrapper>
              <CustomIconButton aria-label="Extinção">
                <ExtinctionButtonIcon src={getExtinctionImage(redListClassification)} alt={"Extinction Image"}/>
              </CustomIconButton>
            </ExtinctionButtonWrapper>
          </Tooltip>
          </CardActionContainer>
     
    </CardContainer>
  );
};

export default RecipeReviewCard;
