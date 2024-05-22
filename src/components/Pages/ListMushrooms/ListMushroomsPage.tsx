import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import Grid from "@mui/material/Grid";
import RecipeReviewCard from "./MushroomCard";
import INaturalistService from "../../../services/INaturalistService";

interface ListMushroomsPageProps {
  taxonomy?: string;
}

const ListMushroomsPage: React.FC<ListMushroomsPageProps> = ({
  taxonomy = "",
}) => {
  const fungiService: FungiService = new FungiService();
  const iNaturalistService: INaturalistService = new INaturalistService();
  const [mushrooms, setMushrooms] = useState<Array<any>>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    taxonomy = params.get("taxonomy") ?? "";
    getFungis();
  }, []);

  const getFungis = async () => {
    if (!taxonomy) return;
    const result = await fungiService.getForMushroomsList(taxonomy);
    if (!result) return;
    const data = result.data;
    let urls = await Promise.all(
      data.map((item: any) =>
        iNaturalistService.getMushroomsPicture(item.inaturalist_taxa)
      )
    );
    for (let i = 0; i < data.length; i++) data[i].imageUrl = urls[i];

    setMushrooms(data);
  };

  return (
    <div>
      <h1>Lista de Cogumelos</h1>
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
