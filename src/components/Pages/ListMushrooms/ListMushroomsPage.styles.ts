import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CardItem = styled.div`
  margin: 10px;
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  max-width: 280px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
