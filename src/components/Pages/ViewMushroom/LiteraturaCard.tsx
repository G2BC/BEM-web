import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import MushroomProps from "../../../Interfaces/mushroom";
import myIconSpeciesLink from "../../../assets/iconLiterature.png";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Configurar o ícone personalizado
const customIcon = new L.Icon({
  iconUrl: myIconSpeciesLink,
  iconSize: [40, 41], // Tamanho do ícone
  iconAnchor: [12, 41], // Ponto de ancoragem do ícone
  popupAnchor: [1, -34], // Ponto de ancoragem do popup
  shadowSize: [41, 41],
});

interface LiteraturaCardListProps {
  mushroom: MushroomProps;
}

interface LiteraturaCardProps {
  scientificName: string;
  biome: string;
  state: string;
}

const LiteraturaCard: React.FC<LiteraturaCardProps> = ({
  scientificName,
  biome,
  state,
}) => {
  return (
    <Card sx={{ maxWidth: 350, marginBottom: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontStyle: "italic", fontSize: "1rem" }}
        >
          {scientificName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 0.5 }}
        >
          Bioma: {biome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estado: {state}
        </Typography>
      </CardContent>
    </Card>
  );
};

const LiteraturaCardList = (props: LiteraturaCardListProps) => {
  const literatureData = props.mushroom.occurrences
    ? props.mushroom.occurrences.map((oc) => {
        return {
          scientificName: props.mushroom.scientific_name ?? "",
          biome: oc.habitat ?? "",
          state: oc.state_acronym ?? "",
        };
      })
    : [];

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
      {/* Mapa Leaflet */}
        <MapContainer
          center={[-14.235, -51.9253]} // Centro do mapa
          zoom={4} // Zoom inicial
          style={{ height: "400px", width: "1000px"}} // Tamanho do mapa
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-14.235, -51.9253]} icon={customIcon}>
            <Popup>
              Localização central do Brasil <br />
              Ícone personalizado.
            </Popup>
          </Marker>
        </MapContainer>
    

      {/* Cards */}
      <Grid container spacing={3} justifyContent="center">
        {literatureData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <LiteraturaCard
              scientificName={data.scientificName}
              biome={data.biome}
              state={data.state}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LiteraturaCardList;
