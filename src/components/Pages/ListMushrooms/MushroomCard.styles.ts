import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const CardHeader = styled.div`
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 8px;
`;

export const CardActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  button {
    margin-right: 5px;
  }
`;
