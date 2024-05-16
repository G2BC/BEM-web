import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
// import Button from '../Button/Button';
import FilterIcon from '../../../assets/filterIcon.png';
import SearchIcon from '../../../assets/searchIcon.png';
import { Autocomplete, Button, TextField } from '@mui/material';
import FungiService from '../../../services/FungiService';
import getClassificationName from '../../../Utils/Enums/BemClassification';

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
  const fungiService: FungiService = new FungiService();
  const [fungis, setFungis] = useState<Array<any>>([]);

  useEffect(() => {
    getFungis();

  }, [])

  const getFungis = async () => {
    let data = await fungiService.getAll();
    if (data) {
      data = data.map((fungi: any) => {

        return {
          ...fungi,
          bemName: getClassificationName(fungi.bem),
        }
      });

      setFungis(data);
    }

  };

  return (
    <Container>
      <Autocomplete
        id="grouped-demo"
        options={fungis?.sort((a: any, b: any) => a.bem - b.bem)}
        groupBy={(option: any) => option?.bemName}
        getOptionLabel={(option: any) => option?.scientific_name}
        sx={{ width: 300, backgroundColor: 'white' }}
        renderInput={(params) => <TextField {...params} label="Espécies" />}
      />
      <Button variant="contained">Buscar</Button>
      {/* <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      /> */}
      {/* <Button text="Filtros" backgroundColor="#ffffff" border="#131313" icon={FilterIcon}textColor="#131313" /> */}
      {/* <Button text="Buscar" backgroundColor="#a65f3e" /> */}
    </Container>
  );
};

export default SearchArea;

