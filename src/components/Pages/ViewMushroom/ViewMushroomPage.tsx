import React, { useEffect, useState } from "react";
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
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

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

    setMushroom(result);
    if (result.occurrences && result.occurrences.length > 0) {
      let coordinates = result.occurrences.filter((occurrence) => occurrence.latitude && occurrence.longitude).map((occurrence) => {

        return [occurrence.latitude, occurrence.longitude]
      });
      setINaturalistOccurrences(result.occurrences.filter((occurrence) => occurrence.inaturalist_taxa));
      setSpeciesLinkOccurrences(result.occurrences.filter((occurrence) => occurrence.specieslink_id));
      setCoordinates(coordinates);
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
                  <Marker position={positions} key={index}>
                    {/* <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
                  </Marker>
                ))
              ) :
                (<></>)}
            </MapContainer>
          </MapSection>
          <TabsViewMushroom
            mushroom={mushroom}
            iNaturalistOccurrences={iNaturalistOccurrences}
            speciesLinkOccurrences={speciesLinkOccurrences}
          />
        </>
      )
      }
    </SpeciesContainer >
  );
};

export default ViewMushroomPage;
