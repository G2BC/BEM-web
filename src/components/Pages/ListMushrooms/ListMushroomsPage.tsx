import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import Grid from "@mui/material/Grid";
import RecipeReviewCard from "./MushroomCard";

interface ListMushroomsPageProps {
  taxonomy?: string;
}

const ListMushroomsPage: React.FC<ListMushroomsPageProps> = ({
  taxonomy = "",
}) => {
  const fungiService: FungiService = new FungiService();
  const [mushrooms, setMushrooms] = useState<Array<any>>([]);

  useEffect(() => {
    getFungis();
  }, []);

  const getFungis = async () => {
    let data = await fungiService.getForMushroomsList();
  };

  return (
    <div>
      <h1>Mapa de Calor BEM</h1>
      {mushrooms != undefined ? (
        <>
          <Grid container spacing={2}>
            {mushrooms.map((mushroom) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={mushroom.id}>
                <RecipeReviewCard
                  title={mushroom.popular_name}
                  subheader={mushroom.scientific_name}
                  imageUrl={mushroom.imageUrl || ""}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListMushroomsPage;
