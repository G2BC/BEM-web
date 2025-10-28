import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FungiService from "../../../services/FungiService";
import getClassificationName from "../../../Utils/Enums/BemClassification";
import SelectInterface from "../../../Interfaces/Select";
import SelectStates from "../../../Utils/SelectStates";
import SelectBemClassification from "../../../Utils/SelectBemClassification";

interface SearchAreaProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FilterBox = styled.div`
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
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
  margin-top: 20px;
`;

const SearchArea: FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  const fungiService: FungiService = new FungiService();
  const states: SelectInterface = SelectStates();
  const bemClassifications: SelectInterface = SelectBemClassification();

  const [fungis, setFungis] = useState<Array<any>>([]);
  const [state, setState] = useState<string>("");
  const [classification, setClassification] = useState<string>("");
  const [taxon, setTaxon] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

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

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleChangeState = (event: SelectChangeEvent) => setState(event.target.value);
  const handleChangeClassification = (event: SelectChangeEvent) =>
    setClassification(event.target.value);
  const handleChangeTaxon = (event: SelectChangeEvent) => setTaxon(event.target.value);

  const onClickSearchButton = () => {
    window.location.href = `/list?taxonomy=${taxon ?? ""}&state=${state ?? ""}&classification=${classification ?? ""}`;
  };

  return (
    <Container>
      <SearchButton onClick={handleOpenDialog}>
        <SearchIcon />
      </SearchButton>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 5, backgroundColor: "#000" },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Pesquisa e Filtros
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#000" }}>
          <FilterContainer>
            {/* Estado */}
            <FilterBox style={{ minWidth: 200 }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="select-state-label" sx={{ color: "#fff" }}>
                  Estado
                </InputLabel>
                <Select
                  labelId="select-state-label"
                  value={state}
                  onChange={handleChangeState}
                  label="Estado"
                  sx={{
                    ".MuiOutlinedInput-root": {
                      fieldset: { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#fff" },
                      "&.Mui-focused fieldset": { borderColor: "#fff" },
                      svg: { color: "#fff" },
                      color: "#fff",
                    },
                    label: { color: "#fff" },
                  }}
                >
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  {states.options.map((s) => (
                    <MenuItem key={s.id} value={s.value}>
                      {s.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FilterBox>

            {/* Espécie */}
            <FilterBox style={{ minWidth: 200 }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="select-taxon-label" sx={{ color: "#fff" }}>
                  Espécie
                </InputLabel>
                <Select
                  labelId="select-taxon-label"
                  value={taxon}
                  onChange={handleChangeTaxon}
                  label="Espécie"
                  sx={{
                    ".MuiOutlinedInput-root": {
                      fieldset: { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#fff" },
                      "&.Mui-focused fieldset": { borderColor: "#fff" },
                      svg: { color: "#fff" },
                      color: "#fff",
                    },
                    label: { color: "#fff" },
                  }}
                >
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  {fungis.map((f) => (
                    <MenuItem key={f.id} value={f.scientific_name}>
                      {f.scientific_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FilterBox>

            {/* Classificação */}
            <FilterBox style={{ minWidth: 200 }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="select-classification-label" sx={{ color: "#fff" }}>
                  Classificação
                </InputLabel>
                <Select
                  labelId="select-classification-label"
                  value={classification}
                  onChange={handleChangeClassification}
                  label="Classificação"
                  sx={{
                    ".MuiOutlinedInput-root": {
                      fieldset: { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#fff" },
                      "&.Mui-focused fieldset": { borderColor: "#fff" },
                      svg: { color: "#fff" },
                      color: "#fff",
                    },
                    label: { color: "#fff" },
                  }}
                >
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  {bemClassifications.options.map((b) => (
                    <MenuItem key={b.id} value={b.value}>
                      {`${b.id}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FilterBox>
          </FilterContainer>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#000" }}>
          <Button
            onClick={onClickSearchButton}
            variant="contained"
            sx={{ backgroundColor: "#ff5e14", color: "#fff", "&:hover": { backgroundColor: "#e04d0d" } }}
          >
            Buscar
          </Button>
          <Button onClick={handleCloseDialog} variant="outlined" color="secondary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SearchArea;
