import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterIcon from '@mui/icons-material/Filter';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, FormControl, InputLabel, Menu, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FungiService from '../../../services/FungiService';
import getClassificationName from '../../../Utils/Enums/BemClassification';
import SelectInterface from '../../../Interfaces/Select';
import SelectStates from '../../../Utils/SelectStates';
import SelectBemClassification from '../../../Utils/SelectBemClassification';

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

const InputWrapper = styled.div`
  margin-right: 13px;
`;

const StyledButton = styled(Button)`
  && {
    margin-right: 3px;
    background-color: #ffffff;
    color: #333333;
    padding: 15px 20px;
    border-bottom: 2px solid #ff5e14;
    border-radius: 0;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    &:hover {
      background-color: #ffffff;
      color: #333333;
    }
  }
`;

const FilterButton = styled(Button)`
  && {
    margin-right: 3px;
    background-color: #ffffff;
    color: #333333;
    padding: 15px 20px;
    border-bottom: 2px solid #ff5e14;
    border-radius: 0;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    &:hover {
      background-color: #ffffff;
      color: #333333;
    }
  }
`;

const SearchArea: FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  const fungiService: FungiService = new FungiService();
  const states: SelectInterface = SelectStates();
  const bemClassifications: SelectInterface = SelectBemClassification();
  const [fungis, setFungis] = useState<Array<any>>([]);
  const [state, setState] = React.useState("");
  const [bem, setBem] = React.useState("");
  const [taxon, setTaxon] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [openState, setOpenState] = React.useState(false);
  const [openBem, setOpenBem] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseState = () => {
    setOpenState(false);
  };

  const handleOpenState = () => {
    setOpenState(true);
  };

  const handleChangeState = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  const handleCloseBem = () => {
    setOpenBem(false);
  };

  const handleOpenBem = () => {
    setOpenBem(true);
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
      data = data.map((fungi: any) => {
        return {
          ...fungi,
          bemName: getClassificationName(fungi.bem),
        };
      });
      setFungis(data);
    }
  };

  const onClickSearchButton = async () => {
    let habitatTextField = document.getElementById(
      "input-habitat"
    ) as HTMLInputElement;
    let habitatValue = habitatTextField?.value;
    console.log(habitatValue);
    window.location.href = `/list?taxonomy=${taxon ?? ""}&state=${
      state ?? ""
    }&bem=${bem ?? ""}&habitat=${habitatValue ?? ""}`;
  };

  return (
    <Container>
      <InputWrapper>
        <Autocomplete
          id="grouped-demo"
          options={fungis?.sort((a: any, b: any) => a.bem - b.bem)}
          groupBy={(option: any) => option?.bemName}
          getOptionLabel={(option: any) => option?.scientific_name}
          sx={{ height: 50, width: 500, backgroundColor: 'white' }}
          renderInput={(params) => <TextField {...params} label="Espécies" />}
        />
      </InputWrapper>
      <FilterButton
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<MenuIcon />}
        variant="contained"
      >
        Filtros
      </FilterButton>
      <StyledButton variant="contained" sx={{ marginLeft: '10px' }}>
        <SearchIcon />
        Buscar
      </StyledButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <MenuItem>
            <InputLabel id="select-standard-label" color='warning'>Estado</InputLabel>
            <Select
              labelId="select-standard-label"
              id="select-standard"
              value={state}
              onChange={handleChangeState}
              open={openState}
              onOpen={handleOpenState}
              onClose={handleCloseState}
              label="Estado"
              sx={{ height: 50, width: 200, padding: '15px 20px', borderBottom: '2px solid #ff5e14', borderRadius: 0, fontSize: 14, fontWeight: 'bold' }}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              {states.options.map((state) => (
                <MenuItem
                  key={state.id}
                  value={state.value}
                >
                  {state.value}
                </MenuItem>
              ))}
            </Select>
          </MenuItem>

          <MenuItem>
            <InputLabel id="select-bem-label" color='warning'>BEM</InputLabel>
            <Select
              labelId="select-bem-label"
              id="select-bem"
              value={bem}
              open={openBem}
              onOpen={handleOpenBem}
              onClose={handleCloseBem}
              onChange={handleChangeBem}
              label="BEM"
              sx={{
                height: 50,
                width: 200,
                padding: '15px 20px',
                borderBottom: '2px solid #ff5e14',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderBottom: '#ff5e14', // default border color
                  },
                  '&:hover fieldset': {
                    borderBottom: '#ff5e14', // border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderBottom: '#ff5e14', // border color when focused
                  },
                },
                borderRadius: 0, fontSize: 14, fontWeight: 'bold'
              }}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              {bemClassifications.options.map((bem) => (
                <MenuItem
                  key={bem.id}
                  value={bem.value}
                >
                  {bem.id}
                </MenuItem>
              ))}
            </Select>
          </MenuItem>

          <MenuItem sx={{ height: 50, width: 230, padding: '15px 20px', borderBottom: '2px solid #ff5e14', borderRadius: 0, fontSize: 14, fontWeight: 'bold' }}>
            <TextField id="input-habitat" label="Habitat" variant="standard" color='warning' />
          </MenuItem>
        </FormControl>
      </Menu>
    </Container>
  );
};

export default SearchArea;
