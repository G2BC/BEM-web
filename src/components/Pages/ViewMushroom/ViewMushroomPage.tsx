import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VU from '../../../assets/VU.png'
import Cogumelo from '../../../assets/Galinhadomato.png'


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

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ScientificName = styled.h2`
  font-size: 16px;
  color: gray;
  margin: 0;
  font-style: italic;
`;

const StatusBadge = styled.img`
  margin-left: 8px;
  width: 50px; 
  height: 50px; 
`;

const ImageSection = styled.div`
  width: 80%;
  margin: 16px 0;
`;

const LargeImage = styled.img`
  width: 100%;
  height: auto;
`;

const MapSection = styled.div`
  width: 80%;
  height: 300px;
  margin: 16px 0;
`;

const photos = [
  {
    src: Cogumelo,
    alt: 'Image 1'
  },
  {
    src: Cogumelo,
    alt: 'Image 2'
  },
  {
    src: Cogumelo,
    alt: 'Image 3'
  },
];

const ViewMushroomPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <SpeciesContainer>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title>Galinhas Do Bosque</Title>
          <StatusBadge src={VU} alt="VU"/>
        </div>
        <ScientificName>(Laetiporus sulphureus)</ScientificName>
      </Header>
      <ImageSection>
        <LargeImage src={photos[0].src} alt={photos[0].alt} />
      </ImageSection>
      <ImageSection>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} alt={photo.alt} style={{ width: '80px',height:'60px' }} />
            </div>
          ))}
        </Slider>
      </ImageSection>
      <MapSection>
        <MapContainer center={[-14.235, -51.9253]} zoom={4} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
        </MapContainer>
      </MapSection>
      
        
      
    </SpeciesContainer>
  );
};




export default ViewMushroomPage;