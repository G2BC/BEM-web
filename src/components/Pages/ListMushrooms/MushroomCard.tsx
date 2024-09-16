import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import observationImage from "../../../assets/observationButton.svg";
import extinctionImage from "../../../assets/extinctionButton.svg";
import brazilImage from "../../../assets/brazil.svg";
import vu from "../../../assets/vu.svg";
import ts from "../../../assets/ts.svg";

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

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({
  scientificName,
  popularName,
  imageUrl,
  brazilianType,
  onTap,
  occurrencesCount,
}: RecipeReviewCardProps) => {
  return (
    <CardContainer onClick={onTap} style={{ cursor: "pointer" }}>
      <CardImage src={imageUrl} alt={"Mushroom"} />
      <CardHeader>
        <ScientificName>{scientificName}</ScientificName>
        <PopularName>{popularName ? `(${popularName})` : ""}</PopularName>
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
              <BrazilButtonIcon src={brazilImage} alt={"Brazil Image"} />
              <BrazilButtonOverlay style={{ backgroundImage: `url(${ts})` }} />
            </CustomIconButton>
          </BrazilButtonWrapper>
        </Tooltip>

        <Tooltip
          title="Este ícone representa a classificação de extinção do cogumelo."
          arrow
        >
          <ExtinctionButtonWrapper>
            <CustomIconButton aria-label="Extinção">
              <ExtinctionButtonIcon
                src={extinctionImage}
                alt={"Extinction Image"}
              />
              <ExtinctionButtonOverlay
                style={{ backgroundImage: `url(${vu})` }}
              />
            </CustomIconButton>
          </ExtinctionButtonWrapper>
        </Tooltip>
      </CardActionContainer>
    </CardContainer>
  );
};

export default RecipeReviewCard;
