import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import RecipeReviewCard from "./MushroomCard";
import INaturalistService from "../../../services/INaturalistService";
import Pagination from "@mui/material/Pagination";
import {
  Container,
  CardGrid,
  CardItem,
  PaginationContainer,
} from "./ListMushroomsPage.styles";

interface ListMushroomsPageProps {
  taxonomy?: string;
  state?: string;
  bem?: number;
  habitat?: string;
}

const ListMushroomsPage: React.FC<ListMushroomsPageProps> = ({
  taxonomy = "",
  state,
  bem,
  habitat,
}) => {
  const fungiService: FungiService = new FungiService();
  const iNaturalistService: INaturalistService = new INaturalistService();
  const [mushrooms, setMushrooms] = useState<Array<any>>([]);
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    taxonomy = params.get("taxonomy") ?? "";
    state = params.get("state") ?? "";
    habitat = params.get("habitat") ?? "";
    if (params.get("bem")) bem = parseInt(params.get("bem")!);
    if (params.get("page")) setPage(parseInt(params.get("page")!));

    getFungis();
  }, [page]);

  const getFungis = async () => {
    if (!taxonomy) return;
    const result = await fungiService.getForMushroomsList(
      taxonomy,
      state,
      bem,
      habitat,
      page ?? 1
    );
    if (!result) return;
    const data = result.mushrooms;
    let urls = await Promise.all(
      data.map((item: any) =>
        iNaturalistService.getMushroomsPicture(item.inaturalist_taxa)
      )
    );
    for (let i = 0; i < data.length; i++) data[i].imageUrl = urls[i];

    setMushrooms(data);
    setPagesCount(result.last_page);
  };

  const handleChange = (_: any, p: number) => {
    setPage(p);
    const params = new URLSearchParams(window.location.search);
    params.set("page", p.toString());
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const handleOnTap = (mushroom: any) => {
    window.location.href = `/mushroom/${mushroom.uuid}`;
  };

  return (
    <Container>
      {mushrooms != undefined ? (
        <>
          <CardGrid>
            {mushrooms.map((mushroom) => (
              <CardItem key={mushroom.id}>
                <RecipeReviewCard
                  scientificName={mushroom.scientific_name}
                  popularName={mushroom.popular_name}
                  imageUrl={mushroom.imageUrl || ""}
                  brazilianType={
                    mushroom.brazilian_type || mushroom.brazilian_type_synonym
                  }
                  onTap={() => handleOnTap(mushroom)}
                  occurrencesCount={mushroom.occurrences_count}
                  redListClassification={mushroom.threatened}
                />
              </CardItem>
            ))}
          </CardGrid>
          <PaginationContainer>
            <Pagination
              shape="rounded"
              count={pagesCount}
              page={page}
              onChange={handleChange}
            />
          </PaginationContainer>
        </>
      ) : (
          <></>
        )}
    </Container>
  );
};

export default ListMushroomsPage;
