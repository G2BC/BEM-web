import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

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
        <Typography variant="h6" component="div" sx={{ fontStyle: "italic", fontSize: '1rem'}}>
          {scientificName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 0.5 }}>
          Bioma: {biome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estado: {state}
        </Typography>
      </CardContent>
    </Card>
  );
};

const LiteraturaCardList: React.FC = () => {
  const literatureData = [
    {
        scientificName: "Laetiporus Ulphureus",
        biome: "Atlantic Rainforest",
        state: "PR, RS",
      },
    {
        scientificName: "Laetiporus Ulphureus",
        biome: "Atlantic Rainforest",
        state: "PR, RS",
      },
    {
        scientificName: "Laetiporus Ulphureus",
        biome: "Atlantic Rainforest",
        state: "PR, RS",
      },
    {
        scientificName: "Laetiporus Ulphureus",
        biome: "Atlantic Rainforest",
        state: "PR, RS",
      },
     
    
    // Adicione mais objetos conforme necessário
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4, paddingLeft: 30, paddingRight: 30 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
      </Box>
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
