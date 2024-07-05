import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Grid } from "@mui/material";
import Logo from "../../../assets/SLlogo.png";
import MushroomProps from "../../../Interfaces/mushroom";

interface SpeciesLinkCardListProps {
  mushroom: MushroomProps;
  occurrences: Array<any>;
}

interface SpeciesLinkCardProps {
  imageUrl: string;
  specimenCode: string;
  date: string;
  location: string;
}

const SpeciesLinkCard: React.FC<SpeciesLinkCardProps> = ({
  imageUrl,
  specimenCode,
  date,
  location,
}) => {
  return (
    <Card sx={{ maxWidth: 350, marginBottom: 2, borderRadius: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <img
          src={imageUrl}
          alt={specimenCode}
          style={{ height: 60, borderRadius: "8px" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div">
          {specimenCode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <LocationOnIcon sx={{ color: "grey.600", marginRight: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const SpeciesLinkCardList = (props: SpeciesLinkCardListProps) => {
  const mushrooms = props.occurrences.map((oc) => {
    return {
      imageUrl: Logo,
      specimenCode: "MBM 325647",
      date:
        oc.properties?.modified ??
        `${oc.properties?.county ?? ""}, ${
          oc.properties?.stateprovince ?? ""
        }, ${oc.properties?.country ?? ""}`,
      location: oc.properties?.locality ?? "",
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
        }}
      ></Box>
      <Grid container spacing={3} justifyContent="center">
        {mushrooms.map((mushroom, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <SpeciesLinkCard
              imageUrl={mushroom.imageUrl}
              specimenCode={mushroom.specimenCode}
              date={mushroom.date}
              location={mushroom.location}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpeciesLinkCardList;
