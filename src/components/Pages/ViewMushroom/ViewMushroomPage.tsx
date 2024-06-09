import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import VU from '../../../assets/Group 133.png';
import TabsComponent from '../../Utils/Tabs/TabsComponent';
import CarouselComponent from './CarouselComponent';
import TabsViewMushroom from './TabsViewMushroom'



const SpeciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  padding: 16px;
`;

const ScientificName = styled.h1`
  font-size: 30px;
  color: black;
  margin: 0;
  font-style: italic;
`;

const Name = styled.h2`
  font-size: 24px;
  margin: 0;
  color: gray;
`;

const StatusBadge = styled.img`
  margin-left: 8px;
  width: 80px;
  height: 35px;
`;

const ContentSection = styled.div`
  display: flex;
  width: 80%;
  margin: 16px 0;
`;


const TabsContainer = styled.div`
  width: 50%;
`;

const MapSection = styled.div`
  width: 80%;
  height: 300px;
  margin: 32px 0;
`;

const CarouselContainer = styled.div`
  width: 40%;
  margin: 16px 16px 16px 0;
`;

const ViewMushroomPage = () => {
  return (
    <SpeciesContainer>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ScientificName>Laetiporus sulphureus</ScientificName>
          <StatusBadge src={VU} alt="VU" />
        </div>
        <Name>(Galinha do mato)</Name>
      </Header>
      <ContentSection>
        <CarouselContainer>
          <CarouselComponent />
        </CarouselContainer>
        <TabsContainer>
          <TabsComponent />
        </TabsContainer>
      </ContentSection>
      <MapSection>
        <MapContainer
          center={[-14.235, -51.9253]}
          zoom={4}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
        </MapContainer>
      </MapSection>
      <TabsViewMushroom/>
    </SpeciesContainer>
  );
};

export default ViewMushroomPage;
