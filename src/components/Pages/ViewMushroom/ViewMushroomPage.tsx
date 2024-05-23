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

const ScientificName = styled.h2`
  font-size: 30px;
  color: black;
  margin: 0;
  font-style: italic;
`;

const Name = styled.h1`
  font-size: 24px;
  margin: 0;
  color: gray;
  font-style: italic
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
  width: 50%; // Reduzindo a largura da imagem para 50%
  height: auto;
  float: left; // Alinhando à esquerda
  margin-right: 16px; // Adicionando margem à direita para separar das outras seções
`;


const MapSection = styled.div`
  width: 80%;
  height: 300px;
  margin: 16px 0;
`;

const CarouselContainer = styled.div`
  width: 50%;  // Ajuste esta largura conforme necessário
  margin: 16px 0 ;
  float: left;
  .slick-prev:before, .slick-next:before {
    color: black; // Cor das setas de navegação
  }
  .slick-dots li button:before {
    font-size: 12px;
    color: black; // Cor dos pontos de navegação
  }
  .slick-dots li.slick-active button:before {
    color: red; // Cor dos pontos ativos
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100px; // Altura das imagens no carrossel
  object-fit: cover;
  cursor: pointer;
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
    slidesToShow: 4,
    slidesToScroll: 1
  };
  

  return (
    <SpeciesContainer>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <ScientificName>Laetiporus sulphureus</ScientificName>
          <StatusBadge src={VU} alt="VU"/>
        </div>
          <Name>(Laetiporus sulphureus)</Name>
      </Header>
      <ImageSection>
        <LargeImage src={photos[0].src} alt={photos[0].alt} />
      </ImageSection>
      <CarouselContainer>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <ThumbnailImage src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
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