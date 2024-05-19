import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem, FormControl, InputLabel, Select, SelectChangeEvent, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  gap: 10px;
  height: 100px;
`;

const SearchInput = styled(TextField)`
  width: 300px;
  background-color: white;

  .MuiOutlinedInput-root {
    height: 48px;
  }
`;

const StyledButton = styled.button`
  background: #ff5e14;
  padding: 13px 20px;
  border: 1px solid #ff5e14;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px; /* Ensure the height matches the input field */

  &:hover {
    background: #ffffff;
    color: #ff5e14;
  }

  .MuiSvgIcon-root {
    margin-right: 8px;
  }
`;

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

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
      <StyledButton onClick={handleClick}>
        <MenuIcon />
        Filtros
      </StyledButton>
      <StyledButton>Buscar</StyledButton>
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
