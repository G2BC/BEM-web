import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid, Avatar, IconButton } from "@mui/material";
import MushroomProps from "../../../Interfaces/mushroom";

interface INaturalistCardListProps {
  mushroom: MushroomProps;
  occurrences: Array<any>;
}
interface INaturalistCardProps {
  imageUrl: string;
  scientificName: string;
  avatarUrl: string;
  date: string;
  favoriteCount: number;
}

const INaturalistCard: React.FC<INaturalistCardProps> = ({
  imageUrl,
  scientificName,
  avatarUrl,
  date,
  favoriteCount,
}) => {
  return (
    <Card sx={{ maxWidth: 350, marginBottom: 2, borderRadius: 2 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={scientificName}
        />
        <Avatar
          src={avatarUrl}
          alt="User Avatar"
          sx={{
            position: "absolute",
            bottom: -20,
            right: 20,
            border: "2px solid #fff",
            zIndex: 1,
          }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontStyle: "italic", fontSize: "1rem" }}
        >
          {scientificName}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: -1 }}>
          <IconButton sx={{ color: "red", marginRight: 1, marginLeft: -1 }}>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {favoriteCount}
          </Typography>
          <Box sx={{ flexGrow: 1, textAlign: "right" }}>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const INaturalistCardList = (props: INaturalistCardListProps) => {
  const mushrooms = props.occurrences.map((oc) => {
    return {
      imageUrl: oc.photos ? oc.photos[0].url : "",
      scientificName: props.mushroom.scientific_name ?? "",
      avatarUrl: oc.user?.icon_url ?? "",
      date: oc.created_at_details?.date ?? "",
      favoriteCount: oc.faves_count ?? 0,
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
        paddingLeft: 30,
        paddingRight: 30,
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
            <INaturalistCard
              imageUrl={mushroom.imageUrl}
              scientificName={mushroom.scientificName}
              avatarUrl={mushroom.avatarUrl}
              date={mushroom.date}
              favoriteCount={mushroom.favoriteCount}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default INaturalistCardList;
