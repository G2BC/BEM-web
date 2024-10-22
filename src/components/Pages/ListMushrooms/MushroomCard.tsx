import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import observationImage from "../../../assets/observationButton.svg";
import brasilianType from "../../../assets/brasilT.png";
import tipoSinonimo from "../../../assets/brasilTS.png";
import imagemPadrao from "../../../assets/white.png";
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
/*Função para identificar se é tipo brasileiro = "T" 
  Se é tipo sinônimo = "TS"
  E se é null em ambas = " "
*/
const getBrazilImage = (brazilianType: String) => {
  if(brazilianType === "T"){
    return tipoBrasileiro;
  }else if(brazilianType === "TS"){
    return tipoSinonimo;
  }else{
    return imagemPadrao;
  }
}

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
  return extinctionImages[redListClassification-1];
};

const getImageSrc = (imageUrl: string | null | undefined): string => {
  // Verifica se imageUrl é válido, se não for, retorna a imagem padrão
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
  //const imageSrc = imageUrl ? imageUrl : defaultImage;
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
            title="Este ícone representa que o cogumelo é do tipo brasileiro."
            arrow
          >
            <BrazilButtonWrapper>
              <CustomIconButton aria-label="Brazil">
                <BrazilButtonIcon src={getBrazilImage(brazilianType)} alt={"Brazil Image"} />
              </CustomIconButton>
            </BrazilButtonWrapper>
          </Tooltip>

          <Tooltip
            title="Este ícone representa a classificação de extinção do cogumelo."
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
