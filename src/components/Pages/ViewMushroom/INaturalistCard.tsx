import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Avatar } from "@mui/material";
import axios from "axios";
import MushroomProps from "../../../Interfaces/mushroom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import myIconInaturalist from "../../../assets/iconInaturalist.png";

// Criar um ícone personalizado para o marcador (verde claro)
const customIcon = new L.Icon({
  iconUrl: myIconInaturalist,
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

interface INaturalistCardListProps {
  mushroom: MushroomProps;
  occurrences: Array<any>;
}

interface INaturalistCardProps {
  imageUrl: string;
  scientificName: string;
  avatarUrl: string;
  date: string;
  observationLink: string;
}

const INaturalistCard: React.FC<INaturalistCardProps> = ({
  imageUrl,
  scientificName,
  avatarUrl,
  date,
  observationLink,
}) => {
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.open(observationLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Card sx={{ maxWidth: 350, marginBottom: 2, borderRadius: 2 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl || "https://via.placeholder.com/350"}
          alt={scientificName}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
        <Avatar
          src={avatarUrl || "https://via.placeholder.com/50"}
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

const fetchMushroomData = async (scientificName: string) => {
  try {
    const response = await axios.get(
      `https://api.inaturalist.org/v1/observations`,
      {
        params: {
          q: scientificName,
          per_page: 200,
          photos: true,
        },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Erro ao buscar dados do iNaturalist:", error);
    return [];
  }
};

const INaturalistCardList: React.FC<INaturalistCardListProps> = (props) => {
  const [mushrooms, setMushrooms] = React.useState<Array<any>>([]);
  const [loading, setLoading] = React.useState(true);

  const scientificName = props.mushroom.scientific_name || "";

  React.useEffect(() => {
    const getData = async () => {
      if (!scientificName) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const occurrences = await fetchMushroomData(scientificName);

      // Filtrar observações com "br" como entidade isolada
      const filteredOccurrences = occurrences.filter((oc: any) => {
        if (!oc.place_guess) return false;
        const place = oc.place_guess.toLowerCase();
        const brRegex = /\b(br|brasil|brazil)\b/; // Garante que "br" aparece isolado
        return brRegex.test(place);
      });

      console.log("Observações no Brasil:", filteredOccurrences);

      setMushrooms(filteredOccurrences);
      setLoading(false);
    };

    getData();
  }, [scientificName]);

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  if (!mushrooms.length) {
    return (
      <Typography>Nenhum dado encontrado para {scientificName}.</Typography>
    );
  }

  const validLocations = mushrooms.filter(
    (oc) => oc.geojson && oc.geojson.coordinates
  );

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
              position={[loc.geojson.coordinates[1], loc.geojson.coordinates[0]]}
              icon={customIcon}
            >
              <Popup>
                <Typography variant="body2">
                  {loc.taxon?.name || "Nome não disponível"}
                </Typography>
                <a
                  href={`https://www.inaturalist.org/observations/${loc.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver observação
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      <Grid container spacing={3} justifyContent="center">
        {mushrooms.map((oc, index) => {
          const photoUrl = oc.photos?.[0]?.url || "https://via.placeholder.com/350";
          const imageUrl = photoUrl.replace(
            /square\.(jpeg|jpg|png)$|small\.(jpeg|jpg|png)$|thumb\.(jpeg|jpg|png)$|large\.(jpeg|jpg|png)$|original\.(jpeg|jpg|png)$/,
            "medium.$1"
          );
          const observationLink = `https://www.inaturalist.org/observations/${oc.id}`;

          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <INaturalistCard
                imageUrl={imageUrl}
                scientificName={oc.taxon?.name || "Nome não disponível"}
                avatarUrl={oc.user?.icon_url || "https://via.placeholder.com/50"}
                date={oc.created_at_details?.date || "Data não disponível"}
                observationLink={observationLink}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default INaturalistCardList;
