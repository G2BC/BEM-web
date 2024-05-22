import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
// import Button from '../Button/Button';
import FilterIcon from "../../../assets/filterIcon.png";
import SearchIcon from "../../../assets/searchIcon.png";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FungiService from "../../../services/FungiService";
import getClassificationName from "../../../Utils/Enums/BemClassification";
import SelectInterface from "../../../Interfaces/Select";
import SelectStates from "../../../Utils/SelectStates";
import SelectBemClassification from "../../../Utils/SelectBemClassification";

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
  const fungiService: FungiService = new FungiService();
  const states: SelectInterface = SelectStates();
  const bemClassifications: SelectInterface = SelectBemClassification();
  const [fungis, setFungis] = useState<Array<any>>([]);
  const [state, setState] = React.useState("");
  const [bem, setBem] = React.useState("");
  const [taxon, setTaxon] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
    window.location.href = "/list?taxonomy=" + taxon;
  };

  return (
    <Container>
      <Autocomplete
        id="grouped-demo"
        freeSolo
        options={fungis?.sort((a: any, b: any) => a.bem - b.bem)}
        onInputChange={(event, value) => (value ? setTaxon(value) : null)}
        groupBy={(option: any) => option?.bemName}
        getOptionLabel={(option: any) => option?.scientific_name}
        sx={{ width: 300, backgroundColor: "white" }}
        renderInput={(params) => <TextField {...params} label="Espécies" />}
      />
      <Button variant="contained" onClick={onClickSearchButton}>
        Buscar
      </Button>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<MenuIcon />}
      >
        Filtros
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
          size="small"
        >
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
              {states.options.map((state) => (
                <MenuItem
                  key={state.id}
                  value={state.value}
                  // style={getStyles(name, personName, theme)}
                >
                  {state.value}
                </MenuItem>
              ))}
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
              {bemClassifications.options.map((bem) => (
                <MenuItem
                  key={bem.id}
                  value={bem.value}
                  // style={getStyles(name, personName, theme)}
                >
                  {bem.id}
                </MenuItem>
              ))}
            </Select>
          </MenuItem>

          <MenuItem>
            <TextField id="input-habitat" label="Habitat" variant="standard" />
          </MenuItem>
        </FormControl>
      </Menu>
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
