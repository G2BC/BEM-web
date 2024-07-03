import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VU from "../../../assets/Group 133.png";
import TabsComponent from "../../Utils/Tabs/TabsComponent";
import CarouselComponent from "./CarouselComponent";
import TabsViewMushroom from "./TabsViewMushroom";
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
import SpeciesLinkService from "../../../services/SpeciesLinkService";

interface ViewMushroomPageProps {
  uuid?: string;
}

const ViewMushroomPage: React.FC<ViewMushroomPageProps> = ({ uuid = "" }) => {
  const fungiService: FungiService = new FungiService();
  const iNaturalistService: INaturalistService = new INaturalistService();
  const speciesLinkService: SpeciesLinkService = new SpeciesLinkService();
  const [mushroom, setMushroom] = useState<MushroomProps>();
  const [iNaturalistOccurrences, setINaturalistOccurrences] = useState<
    Array<any>
  >([]);
  const [speciesLinkOccurrences, setSpeciesLinkOccurrences] = useState<
    Array<any>
  >([]);
  const [coordinates, setCoordinates] = useState<Array<any>>([]);

  useEffect(() => {
    const url = window.location.href;
    const parts = url.split("/");
    uuid = parts[parts.length - 1];

    getMushroom();
  }, [uuid]);

  const getMushroom = async () => {
    if (!uuid) return;
    const result = await fungiService.getByUuid(uuid);
    if (!result || !result.inaturalist_taxa) return;
    let url = await iNaturalistService.getMushroomsPicture(
      result.inaturalist_taxa
    );
    result.imageUrl = url;
    let iNaturalistAndSpeciesLinkOccurrences: [
      Array<any>,
      Array<any>,
      Array<any>
    ] = await Promise.all([
      iNaturalistService.getMushroomOccurrences(result.inaturalist_taxa),
      speciesLinkService.getOccurrences(result.scientific_name ?? ""),
      speciesLinkService.getCoordinates(result.scientific_name ?? ""),
    ]);

    setMushroom(result);
    if (
      iNaturalistAndSpeciesLinkOccurrences &&
      iNaturalistAndSpeciesLinkOccurrences.length > 1
    ) {
      setINaturalistOccurrences(iNaturalistAndSpeciesLinkOccurrences[0]);
      setSpeciesLinkOccurrences(iNaturalistAndSpeciesLinkOccurrences[1]);
      setCoordinates(iNaturalistAndSpeciesLinkOccurrences[2]);
    }
  };

  return (
    <SpeciesContainer>
      {mushroom && (
        <>
          <Header>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ScientificName>{mushroom.scientific_name}</ScientificName>
              <StatusBadge src={VU} alt="VU" />
            </div>
            <Name>
              {mushroom.popular_name ? `(${mushroom.popular_name})` : ""}
            </Name>
          </Header>
          <ContentSection>
            <CarouselContainer>
              <CarouselComponent
                photos={[
                  { src: mushroom.imageUrl!, alt: mushroom.scientific_name! },
                ]}
              />
            </CarouselContainer>
            <TabsContainer>
              <TabsComponent mushroom={mushroom} />
            </TabsContainer>
          </ContentSection>
          <MapSection>
            <MapContainer
              center={coordinates ? coordinates[0] : null}
              zoom={4}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
            </MapContainer>
          </MapSection>
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
