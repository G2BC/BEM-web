import React, { ChangeEvent, FC, useState } from 'react';
import {
  Container,
  SearchInput,
  StyledButton,
  FormContainer,
  MenuContainer,
  StyledSelect,
  StyledTextField,
} from './SearchArea.styles';

interface SearchAreaProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchArea: FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  const [state, setState] = useState<string>('');
  const [bem, setBem] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false); // Estado para controlar a visibilidade da caixa de filtros

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleChangeState = (event: ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };

  const handleChangeBem = (event: ChangeEvent<HTMLSelectElement>) => {
    setBem(event.target.value);
  };

  const brazilianStates = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo',
    'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 
    'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 
    'São Paulo', 'Sergipe', 'Tocantins'
  ];

  const stateOptions = brazilianStates.map((state, index) => (
    <option key={index} value={state}>
      {state}
    </option>
  ));

  return (
    <Container>
      <SearchInput
        placeholder={placeholder || "Espécies"}
        onChange={onChange}
      />
      <StyledButton onClick={handleToggleFilters}>
        Filtros
      </StyledButton>
      <StyledButton>Buscar</StyledButton>
      {showFilters && (
        <MenuContainer>
          <FormContainer>
            <StyledSelect
              id="select-state"
              value={state}
              onChange={handleChangeState}
              defaultValue=""
            >
              <option value="" disabled>Estado</option>
              <option value="">Nenhum</option>
              {stateOptions}
            </StyledSelect>
            <StyledSelect
              id="select-bem"
              value={bem}
              onChange={handleChangeBem}
              defaultValue=""
            >
              <option value="" disabled>BEM</option>
              <option value="">Nenhum</option>
              {/* Adicione suas opções de BEM aqui */}
            </StyledSelect>
            <StyledTextField
              id="input-habitat"
              placeholder="Habitat"
            />
          </FormContainer>
        </MenuContainer>
      )}
    </Container>
  );
};

export default SearchArea;

};

export default SearchArea;
