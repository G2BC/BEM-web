import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import FilterIcon from '../../assets/filterIcon.png';
import SearchIcon from '../../assets/searchIcon.png';

interface SearchAreaProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px 32px 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 20px;
`;

const SearchArea: FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button text="Filtros" backgroundColor="#ffffff" border="#131313" icon={FilterIcon}textColor="#131313" />
      <Button text="Buscar" backgroundColor="#a65f3e" />
    </Container>
  );
};

export default SearchArea;

