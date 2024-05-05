import React, { ChangeEvent, FC } from 'react';
import Button from '../Button/Button';
import FilterIcon from '../../assets/filterIcon.png';
import './SearchArea.css'

interface SearchAreaProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;// lembrar de voltar aqui para remover as interrogaçoes pois estamos roubando
  placeholder?: string;
}

const SearchArea: React.FC<SearchAreaProps> = ({ onChange, placeholder }) => {
  return (
    <div >
      <div id='container'>

        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        // style={{ width: '300px', padding: '10px', marginLeft: '550px', marginTop: '20px' }}
        />
        <Button text="Buscar" backgroundColor="#a65f3e" />
        <Button text="Filtros" backgroundColor="#131313" border="#131313" icon={FilterIcon} />
      </div>
    </div>
  );

  // Função para lidar com os filtros (a ser implementada)
  const handleFilters = () => {
    console.log('Aplicando filtros...');
    // Implemente a lógica de aplicar filtros aqui
  };
};

export default SearchArea;
