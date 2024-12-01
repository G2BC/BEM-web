import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import observationImage from "../../../assets/observationButton.svg";
import defaultImage from "../../../assets/defaultImage.png";
import {getBrazilImage, getBrazilTitle} from "../../../Utils/brazilianType";
import {getExtinctionImage, getExtinctionTitle} from "../../../Utils/extinctionFlag";

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
        <PopularName>{popularName ? popularName : <br />}</PopularName>
      </CardHeader>

      <CardActionContainer>
        <IconButtonWrapper>
          <CustomIconButton aria-label="Observações">
            <img src={observationImage} alt={"Observation Image"} />
            <ObservationCount>Observações:{occurrencesCount}</ObservationCount>
          </CustomIconButton>
        </IconButtonWrapper>

        <Tooltip
          title={getBrazilTitle(brazilianType)}
          arrow
        >
          <BrazilButtonWrapper>
            <CustomIconButton aria-label="Brazil">
              {getBrazilImage(brazilianType) && (
                <BrazilButtonIcon src={getBrazilImage(brazilianType)} alt="Brazil Image" />
              )}
            </CustomIconButton>
          </BrazilButtonWrapper>

        </Tooltip>

        <Tooltip
          title={getExtinctionTitle(redListClassification)}
          arrow
        >
          <ExtinctionButtonWrapper>
            <CustomIconButton aria-label="Extinção">
              <ExtinctionButtonIcon src={getExtinctionImage(redListClassification)} alt={"Extinction Image"} />
            </CustomIconButton>
          </ExtinctionButtonWrapper>
        </Tooltip>
      </CardActionContainer>

    </CardContainer>
  );
};

export default RecipeReviewCard;
