import styled from "styled-components";

export const SpeciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  padding: 16px;
`;

export const ScientificName = styled.h1`
  font-size: 30px;
  color: black;
  margin: 0;
  font-style: italic;
`;

export const Name = styled.h2`
  font-size: 24px;
  margin: 0;
  color: gray;
`;

export const StatusBadge = styled.img`
  margin-left: 8px;
  width: 80px;
  height: 35px;
`;

export const ContentSection = styled.div`
  display: flex;
  width: 80%;
  margin: 16px 0;
`;

export const TabsContainer = styled.div`
  width: 50%;
`;

export const MapSection = styled.div`
  width: 80%;
  height: 300px;
  margin: 32px 0;
`;

export const CarouselContainer = styled.div`
  width: 40%;
  margin: 16px 16px 16px 0;
`;
