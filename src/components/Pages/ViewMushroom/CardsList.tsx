import * as React from "react";
import { Box } from "@mui/material";
import RecipeReviewCard from "../ListMushrooms/MushroomCard";
import myImage from "../../../assets/Galinhadomato.png";

const cardsData = [
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
    
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
  {
    title: "Laetiporus sulphureus",
    subheader: "Laetiporus sulphureus",
    imageUrl: myImage,
  },
];

export default function CardsList() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{ width: '80%', margin: '16px 0' }}
    >
      {cardsData.map((card, index) => (
        <RecipeReviewCard
          key={index}
          title={card.title}
          subheader={card.subheader}
          imageUrl={card.imageUrl}
        />
      ))}
    </Box>
  );
}
