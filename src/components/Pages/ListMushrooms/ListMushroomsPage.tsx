import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import RecipeReviewCard from "./MushroomCard";
import INaturalistService from "../../../services/INaturalistService";
import Pagination from "@mui/material/Pagination";
import { Container, CardGrid, CardItem, PaginationContainer } from "./ListMushroomsPage.styles";
import styled from "styled-components";
import comestiveis from "../../../assets/comestiveis.svg";
import observacoes from "../../../assets/observacoes.svg";
import riscoExtincao from "../../../assets/riscoExtincao.svg";
import tipoBrasileira from "../../../assets/tipoBrasileiro.svg";

interface ListMushroomsPageProps {
  taxonomy?: string;
  state?: string;
  bem?: number;
  habitat?: string;
}

// Componente de banner informativo
const InfoBanner = styled.div`
  position: relative;
  width: 100vw;
  left: calc(-50vw + 51%);
  background-color: #131313;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  z-index: 1;
  transform: translateY(-18px);
`;

const InfoItem = styled.div`
  flex: 1;
  margin: 0 8px;
  display: flex; 
  align-items: center;
  justify-content: center;
  padding: 8px; 
`;

const Icon = styled.img`
  width: 32px; 
  height: 32px; 
  margin-right: 32px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

const InfoTitle = styled.h3`
  margin: 0; 
  font-size: 1em;
`;

const InfoValue = styled.p`
  margin: 5; 
  font-size: 1em; 
  font-weight: bold; 
  text-align: center;
`;

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
  
  const [edibleSpeciesCount, setEdibleSpeciesCount] = useState<number>(0);
  const [observationsCount, setObservationsCount] = useState<number>(0);
  const [threatenedSpeciesCount, setThreatenedSpeciesCount] = useState<number>(0);
  const [brazilianTypeSpeciesCount, setBrazilianTypeSpeciesCount] = useState<number>(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    taxonomy = params.get("taxonomy") ?? "";
    state = params.get("state") ?? "";
    habitat = params.get("habitat") ?? "";
    if (params.get("bem")) bem = parseInt(params.get("bem")!);
    if (params.get("page")) setPage(parseInt(params.get("page")!));

    getFungis();
    fetchInfoBannerData(); 
    
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

  const fetchInfoBannerData = async () => {
    try {
      const response = await fetch("http://localhost/api/infos/sub_menu");
      const data = await response.json();
      setEdibleSpeciesCount(data.edible_species || 0);
      setObservationsCount(data.occurrences || 0);
      setThreatenedSpeciesCount(data.threatened || 0);
      setBrazilianTypeSpeciesCount(data.brasilian_type_species || 0);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
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
      <InfoBanner>
        <InfoItem>
          <Icon src={comestiveis} alt="Espécies Comestíveis" />
          <InfoText>
            <InfoTitle>Espécies Comestíveis<br />Do Brasil</InfoTitle>
            <InfoValue>{edibleSpeciesCount}</InfoValue> 
          </InfoText>
        </InfoItem>
        <InfoItem>
          <Icon src={observacoes} alt="Observações" />
          <InfoText>
            <InfoTitle>Observações</InfoTitle>
            <InfoValue>{observationsCount}</InfoValue>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <Icon src={riscoExtincao} alt="Espécies em Risco de Extinção" />
          <InfoText>
            <InfoTitle>Espécies Em<br />Risco de Extinção</InfoTitle>
            <InfoValue>{threatenedSpeciesCount}</InfoValue> 
          </InfoText>
        </InfoItem>
        <InfoItem>
          <Icon src={tipoBrasileira} alt="Espécie Tipo Brasileiras" />
          <InfoText>
            <InfoTitle>Espécies Tipo<br />Brasileiras</InfoTitle>
            <InfoValue>{brazilianTypeSpeciesCount}</InfoValue> 
          </InfoText>
        </InfoItem>
      </InfoBanner>

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
