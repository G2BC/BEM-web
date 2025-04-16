import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import FungiService from '../../../services/FungiService';
import getClassificationName from '../../../Utils/Enums/BemClassification';
import SelectInterface from '../../../Interfaces/Select';
import SelectStates from '../../../Utils/SelectStates';
import SelectBemClassification from '../../../Utils/SelectBemClassification';
import SelectHabitat from '../../../Utils/selectHabitat';

interface SearchAreaProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FilterBox = styled.div`
  border: 2px solid #fff; /* Borda branca */
  border-radius: 8px; /* Bordas arredondadas */
  padding: -1px; /* Espaçamento interno */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Fundo transparente */

  @media (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const SearchButton = styled(Button)`
  && {
    background-color: #ffffff;
    color: #333333;
    border-bottom: 2px solid #ff5e14;
    border-radius: 0;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    min-width: 50px;
    &:hover {
      background-color: #ffffff;
      color: #333333;
    }
  }
`;

const CloseButton = styled(Button)`
  && {
    background-color: transparent;
    color: #ffffff;
    min-width: 50px;
    padding: 10px;
    &:hover {
      background-color: transparent;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
  display: grid;
  justify-content: normal;
  }
`;

const SearchArea: FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  const fungiService: FungiService = new FungiService();
  const states: SelectInterface = SelectStates();
  const bemClassifications: SelectInterface = SelectBemClassification();
  const habitats: SelectInterface = SelectHabitat(); // Inicializando SelectHabitat
  const [fungis, setFungis] = useState<Array<any>>([]);
  const [state, setState] = useState<string>("");
  const [bem, setBem] = useState<string>("");
  const [taxon, setTaxon] = useState<string>("");
  const [habitatValue, setHabitatValue] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleChangeState = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  const handleChangeBem = (event: SelectChangeEvent) => {
    setBem(event.target.value);
  };

  useEffect(() => {
    getFungis();
  }, []);

  const getFungis = async () => {
    let data = await fungiService.getAll();
    if (data) {
      data = data.map((fungi: any) => ({
        ...fungi,
        bemName: getClassificationName(fungi.bem),
      }));
      setFungis(data);
    }
  };

  const handleChangeHabitatValue = (event: SelectChangeEvent) => {
    setHabitatValue(event.target.value);
  };

  const onClickSearchButton = async () => {
    let habitatTextField = document.getElementById(
      "input-habitat"
    ) as HTMLInputElement;
    let habitatValue = habitatTextField?.value;

    window.location.href = `/list?taxonomy=${taxon ?? ""}&state=${state ?? ""
      }&bem=${bem ?? ""}&habitat=${habitatValue ?? ""}`;
  };

  return (
    <Container>
      <SearchButton onClick={handleOpenDialog}>
        <SearchIcon />
      </SearchButton>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth PaperProps={{
        sx: {
          borderRadius: 5,
          backgroundColor: '#000',
        },
      }}>
        <DialogTitle sx={{ backgroundColor: '#000', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Pesquisa e Filtros
          <CloseButton onClick={handleCloseDialog}>
            <CloseIcon />
          </CloseButton>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#000' }}>
          <FormControl fullWidth>
            <Autocomplete
              id="grouped-demo"
              freeSolo
              options={fungis?.sort((a: any, b: any) => a.bem - b.bem)}
              onInputChange={(event, value) => (value ? setTaxon(value) : null)}
              groupBy={(option: any) => option?.bemName}
              getOptionLabel={(option: any) => option?.scientific_name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Espécie"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '.MuiOutlinedInput-root': {
                      fieldset: {
                        borderColor: '#fff',
                      },
                      '&:hover fieldset': {
                        borderColor: '#fff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#fff',
                      },
                      input: { color: '#fff' },
                    },
                    label: { color: '#fff' },
                  }}
                />
              )}
              sx={{ marginBlockStart: 1, marginBottom: 2 }}
            />

            <FilterContainer>
              <FilterBox>
                <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                  <InputLabel id="select-state-label" sx={{ color: '#fff' }}>Estado</InputLabel>
                  <Select
                    labelId="select-state-label"
                    id="select-state"
                    value={state}
                    onChange={handleChangeState}
                    label="Estado"
                    sx={{
                      '.MuiOutlinedInput-root': {
                        fieldset: {
                          borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                          borderColor: '#fff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#fff',
                        },
                        svg: { color: '#fff' },
                        color: '#fff',
                      },
                      label: { color: '#fff' },
                    }}
                  >
                    <MenuItem value="">
                      <em>Nenhum</em>
                    </MenuItem>
                    {states.options.map((state) => (
                      <MenuItem key={state.id} value={state.value}>
                        {state.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FilterBox>
              <FilterBox>
                <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                  <InputLabel id="select-bem-label" sx={{ color: '#fff' }}>BEM</InputLabel>
                  <Select
                    labelId="select-bem-label"
                    id="select-bem"
                    value={bem}
                    onChange={handleChangeBem}
                    label="BEM"
                    sx={{
                      '.MuiOutlinedInput-root': {
                        fieldset: {
                          borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                          borderColor: '#fff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#fff',
                        },
                        svg: { color: '#fff' },
                        color: '#fff',
                      },
                      label: { color: '#fff' },
                    }}
                  >
                    <MenuItem value="">
                      <em>Nenhum</em>
                    </MenuItem>
                    {bemClassifications.options.map((bem) => (
                      <MenuItem key={bem.id} value={bem.value}>
                        {bem.id}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FilterBox>

              <FilterBox>
                <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                  <InputLabel id="select-habitat-label" sx={{ color: '#fff' }}>Habitat</InputLabel>
                  <Select
                    labelId="select-habitat-label"
                    id="select-habitat"
                    value={habitatValue}
                    onChange={handleChangeHabitatValue}
                    label="Habitat"
                    sx={{
                      '.MuiOutlinedInput-root': {
                        fieldset: {
                          borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                          borderColor: '#fff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#fff',
                        },
                        svg: { color: '#fff' },
                        color: '#fff',
                      },
                      label: { color: '#fff' },
                    }}
                  >
                    <MenuItem value="">
                      <em>Nenhum</em>
                    </MenuItem>
                    {habitats.options.map((habitat) => (
                      <MenuItem key={habitat.id} value={habitat.value}>
                        {habitat.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FilterBox>
            </FilterContainer>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#000' }}>
          <Button
            onClick={onClickSearchButton}
            variant="contained"
            sx={{ backgroundColor: '#ff5e14', color: '#fff', '&:hover': { backgroundColor: '#e04d0d' } }}
          >
            Buscar
          </Button>
          <Button onClick={handleCloseDialog} variant="outlined" color="secondary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Container >
  );
};

export default SearchArea;
