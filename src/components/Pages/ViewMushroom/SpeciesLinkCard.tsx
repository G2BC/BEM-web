import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import myIconSpeciesLink from "../../../assets/iconSpecieslink.png";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MushroomProps from "../../../Interfaces/mushroom";
import Logo from "../../../assets/speciesLink.png";


// Criar um ícone personalizado para o marcador
const customIcon = new L.Icon({
  iconUrl: myIconSpeciesLink,
  iconSize: [40, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface SpeciesLinkCardListProps {
  mushroom: MushroomProps;
  occurrences: Array<any>;
}

interface SpeciesLinkCardProps {
  imageUrl: string;
  specimenCode: string;
  date: string;
  location: string;
  speciesLink: string;
}

const SpeciesLinkCard: React.FC<SpeciesLinkCardProps> = ({
  imageUrl,
  specimenCode,
  date,
  location,
  speciesLink,
}) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  return (
    <Card
      sx={{
        maxWidth: 350,
        marginBottom: 2,
        borderRadius: 2,
        height: 350, // Define uma altura fixa para o card
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Garantir que o conteúdo fique bem distribuído
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <img
          src={imgSrc}
          alt={specimenCode}
          style={{ height: 60, borderRadius: "8px" }}
          onError={() => setImgSrc(Logo)} // Trocar para imagem padrão ao erro
        />
      </Box>
      <CardContent sx={{ flex: 1 }}>
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
        <Box sx={{ mt: 2 }}>
          <a href={speciesLink} target="_blank" rel="noopener noreferrer">
            Ver no SpeciesLink
          </a>
        </Box>
      </CardContent>
    </Card>
  );
};

const fetchMushroomData = async (scientificName: string) => {
  try {
    if (!scientificName) {
      console.warn("Nome científico não fornecido.");
      return [];
    }

    const response = await axios.get("https://specieslink.net/ws/1.0/search", {
      params: {
        kingdom: "fungi",
        scientificname: scientificName,
        apikey: "VjSPRSjDJKAdk8ojl3PR",
      },
    });

    if (response.data && response.data.type === "FeatureCollection") {
      return response.data.features
        .map((feature: any) => {
          const { geometry, properties } = feature;

          // Garantir que as coordenadas não sejam [0,0] antes de usá-las
          const coordinates = (geometry?.coordinates && geometry.coordinates[0] !== 0 && geometry.coordinates[1] !== 0)
            ? geometry.coordinates
            : [0, 0]; // Caso as coordenadas sejam [0, 0], define como null

          // Garantir que todos os componentes da data (dia, mês, ano) sejam formatados corretamente
          const day = properties?.daycollected?.padStart(2, "0") || "--";
          const month = properties?.monthcollected?.padStart(2, "0") || "--";
          const year = properties?.yearcollected || "----";

          // Construir a data, garantindo que dia e mês só apareçam se disponíveis
          const date = year !== "----"
            ? `${day !== "--" ? `${day}/` : ""}${month !== "--" ? `${month}/` : ""}${year}`
            : "Data não disponível";

          return {
            coordinates: coordinates,
            specimenCode: properties?.catalognumber || "Código não disponível",
            date: date,
            locality: properties?.locality || "Localidade não disponível",
            state: properties?.stateprovince || "",
            county: properties?.county || "",
            country: properties?.country || "",
            collectionId: properties?.collectionid || "", // Adiciona collectionId
          };
        })
        .filter((oc: any) => oc.country === "Brasil");
    } else {
      console.warn("Resposta inesperada da API:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar dados no SpeciesLink:", error);
    return [];
  }
};

const SpeciesLinkCardList: React.FC<SpeciesLinkCardListProps> = (props) => {
  const { mushroom } = props;
  const [occurrences, setOccurrences] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const scientificName = mushroom.scientific_name || "";

  useEffect(() => {
    const getData = async () => {
      if (!scientificName) return;
      const data = await fetchMushroomData(scientificName);
      setOccurrences(data);
      setLoading(false);
    };

    getData();
  }, [scientificName]);

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  const validLocations = occurrences.filter((oc) => oc.coordinates);

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
      {validLocations.length > 0 && (
        <MapContainer
          center={[-14.235, -51.9253]}
          zoom={4}
          style={{ height: "400px", width: "1000px", marginBottom: "20px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {validLocations.map((loc, index) => (
            <Marker
              key={index}
              position={[loc.coordinates[1], loc.coordinates[0]]}
              icon={customIcon}
            >
              <Popup>
                <Typography variant="body2">
                  {loc.specimenCode || "Código não disponível"}
                </Typography>
                <Typography variant="body2">
                  {loc.locality || "Localidade não disponível"}
                </Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      <Grid container spacing={3} justifyContent="center">
        {occurrences.map((oc, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <SpeciesLinkCard
              imageUrl={`https://specieslink.net/media/col/${oc.collectionId}/logo/std.png`}
              specimenCode={oc.specimenCode}
              date={oc.date}
              location={`${oc.locality}, ${oc.county}, ${oc.state}`}
              speciesLink={`https://specieslink.net/search/records/collectioncode/${oc.collectionId}/catalognumber/${oc.specimenCode}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpeciesLinkCardList;
