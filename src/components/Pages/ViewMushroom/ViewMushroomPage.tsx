import React, { useEffect, useState } from "react";
import VU from "../../../assets/Group 133.png";
import TabsComponent from "../../Utils/Tabs/TabsComponent";
import CarouselComponent from "./CarouselComponent";
import TabsViewMushroom from "./TabsViewMushroom";
import { getBrazilImage, getBrazilTitle } from "../../../Utils/brazilianType";
import { getExtinctionImage, getExtinctionTitle } from "../../../Utils/extinctionFlag";
import Tooltip from "@mui/material/Tooltip"; // Importe o Tooltip aqui

import {
  SpeciesContainer,
  Header,
  ScientificName,
  Name,
  StatusBadge,
  ContentSection,
  TabsContainer,
  MapSection,
  CarouselContainer,
} from "./ViewMushroomPage.styles";
import FungiService from "../../../services/FungiService";
import MushroomProps from "../../../Interfaces/mushroom";
import INaturalistService from "../../../services/INaturalistService";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Defina o caminho dos ícones manualmente
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

interface ViewMushroomPageProps {
  uuid?: string;
}

const ViewMushroomPage: React.FC<ViewMushroomPageProps> = ({ uuid = "" }) => {
  const fungiService: FungiService = new FungiService();
  const iNaturalistService: INaturalistService = new INaturalistService();
  const [mushroom, setMushroom] = useState<MushroomProps>();
  const [iNaturalistOccurrences, setINaturalistOccurrences] = useState<
    Array<any>
  >([]);
  const [speciesLinkOccurrences, setSpeciesLinkOccurrences] = useState<
    Array<any>
  >([]);
  const [coordinates, setCoordinates] = useState<Array<any>>([]);
  const [carouselPhotos, setCarouselPhotos] = useState<
    Array<{ src: string; alt: string }>
  >([]);

  useEffect(() => {
    const url = window.location.href;
    const parts = url.split("/");
    uuid = parts[parts.length - 1];

    getMushroom();
  }, [uuid]);

  const getMushroom = async () => {
    if (!uuid) return;

    try {
      const result = await fungiService.getByUuid(uuid);
      if (!result) return;

      setMushroom(result);

      // Obtém as fotos do iNaturalist
      if (result.inaturalist_taxa) {
        const photos = await iNaturalistService.getAllMushroomsPictures(
          result.inaturalist_taxa
        );

        if (photos.length > 0) {
          const formattedPhotos = photos.map((url) => ({
            src: url,
            alt: result.scientific_name || "Mushroom Image",
          }));
          setCarouselPhotos(formattedPhotos);
        }
      }
    } catch (error) {
      console.error("Erro ao buscar dados do cogumelo:", error);
    }
  };

  return (
    <SpeciesContainer>
      {mushroom && (
        <>
          <Header>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ScientificName>{mushroom.scientific_name}</ScientificName>
              {(mushroom.brazilian_type ||
                mushroom.brazilian_type_synonym) && (
                <Tooltip title={getBrazilTitle(mushroom.brazilian_type) ?? getBrazilTitle(mushroom.brazilian_type_synonym) ?? "Informação não disponível"} arrow>
                <StatusBadge
                  src={
                    getBrazilImage(mushroom.brazilian_type) ||
                    getBrazilImage(mushroom.brazilian_type_synonym)
                  }
                  alt="Brazil Flag"
                />
              </Tooltip>
              )}
              {/* Envolvendo o StatusBadge com o Tooltip para mostrar o título de extinção */}
              <Tooltip title={getExtinctionTitle(mushroom.threatened)} arrow>
                <StatusBadge
                  src={getExtinctionImage(mushroom.threatened)}
                  alt="VU"
                />
              </Tooltip>
            </div>
            <Name>{mushroom.popular_name}</Name>
          </Header>

          <ContentSection>
            <CarouselContainer>
              {/* Passa as imagens para o componente de carrossel */}
              <CarouselComponent photos={carouselPhotos} />
            </CarouselContainer>
            <TabsContainer>
              <TabsComponent mushroom={mushroom} />
            </TabsContainer>
          </ContentSection>

          {/* Comentando a seção do mapa */}
          {/* <MapSection>
            <MapContainer
              center={coordinates[0] ?? [-14.235, -51.9253]}
              zoom={4}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
              {coordinates && coordinates.length > 0 ? (
                coordinates.map((positions, index) => (
                  <Marker position={positions} key={index}></Marker>
                ))
              ) : (
                <></>
              )}
            </MapContainer>
          </MapSection> */}

          <TabsViewMushroom
            mushroom={mushroom}
            iNaturalistOccurrences={iNaturalistOccurrences}
            speciesLinkOccurrences={speciesLinkOccurrences}
          />
        </>
      )}
    </SpeciesContainer>
  );
};

export default ViewMushroomPage;
