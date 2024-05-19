import { TextField, Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100px;
`;

export const SearchInput = styled(TextField)`
  width: 300px;
  background-color: white;

  .MuiOutlinedInput-root {
    height: 48px;
  }
`;

export const StyledButton = styled.button({
  backgroundColor: '#ff5e14',
  borderRadius: 3,
  padding: '13px 20px',
  border: '1px solid #ff5e14',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',

  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#ff5e14',
  }
});