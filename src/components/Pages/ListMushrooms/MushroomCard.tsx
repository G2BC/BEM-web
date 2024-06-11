// Importações necessárias
import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import myImage from "../../../assets/brazilFlag.png";
import {
  CardContainer,
  CardHeader,
  CardImage,
  CardActionContainer,
} from "./MushroomCard.styles";

// Interface para as propriedades do componente
interface RecipeReviewCardProps {
  title: string;
  subheader: string;
  imageUrl: string;
  brazilianType: string;
  onTap: Function;
}

// Componente RecipeReviewCard
const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({
  title,
  subheader,
  imageUrl,
  brazilianType,
  onTap,
}: RecipeReviewCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card>
      <CardActionArea onClick={() => onTap()}>
        <CardContainer>
          <CardImage
            height={169}
            width={280}
            src={imageUrl}
            alt={title}
            as="img"
          />
          <CardHeader>
            <h3>{title}</h3>
            <p style={{ fontStyle: "italic" }}>{subheader}</p>
          </CardHeader>
          <CardActionContainer>
            <IconButton aria-label="Observações">
              <VisibilityIcon style={{ width: 25, height: 25 }} />
            </IconButton>
            <IconButton laaria-label="Brazil Flag">
              <img
                src={myImage}
                alt="Brazil Flag"
                style={{ width: 25, height: 25 }}
              />
            </IconButton>
          </CardActionContainer>
        </CardContainer>
      </CardActionArea>
    </Card>
  );
};

export default RecipeReviewCard;
