import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem, FormControl, InputLabel, Select, SelectChangeEvent, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SelectStates from '../../../Utils/SelectStates';
import SelectBemClassification from '../../../Utils/SelectBemClassification';
import { Container, SearchInput, StyledButton } from './SearchArea.styles';

interface SearchAreaProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SearchArea: FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  const brazilianStates = SelectStates();
  const bemClassifications = SelectBemClassification();
  const [state, setState] = useState<string>('');
  const [bem, setBem] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickMenuFilters = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickSearch = (event: React.MouseEvent<HTMLElement>) => {

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeState = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  const handleChangeBem = (event: SelectChangeEvent) => {
    setBem(event.target.value as string);
  };

  const stateOptions = brazilianStates.options.map((state) => (
    <MenuItem key={state.id} value={state.value}>
      {state.id}
    </MenuItem>
  ));

  const bemOptions = bemClassifications.options.map((bem) => (
    <MenuItem key={bem.id} value={bem.value}>
      {bem.id}
    </MenuItem>
  ));

  return (
    <Container>
      <SearchInput
        variant="outlined"
        placeholder={placeholder || "Espécies"}
        onChange={onChange}
        InputProps={{
          endAdornment: null,
        }}
      />
      <StyledButton onClick={handleClickMenuFilters}>
        <MenuIcon />
        Filtros
      </StyledButton>
      <StyledButton onClick={handleClickSearch}>Buscar</StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '20ch',
          },
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
          <MenuItem>
            <InputLabel id="select-standard-label">Estado</InputLabel>
            <Select
              labelId="select-standard-label"
              id="select-standard"
              value={state}
              onChange={handleChangeState}
              label="Estado"
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              {stateOptions}
            </Select>
          </MenuItem>
          <MenuItem>
            <InputLabel id="select-bem-label">BEM</InputLabel>
            <Select
              labelId="select-bem-label"
              id="select-bem"
              value={bem}
              onChange={handleChangeBem}
              label="BEM"
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              {bemOptions}
            </Select>
          </MenuItem>
          <MenuItem>
            <TextField id="input-habitat" label="Habitat" variant="standard" />
          </MenuItem>
        </FormControl>
      </Menu>
    </Container>
  );
};

export default SearchArea;
