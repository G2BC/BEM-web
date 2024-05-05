import React, { FC } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchArea from './components/SearchArea/SearchArea';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchArea placeholder='Pesquisar...'/>
      <Footer/>
    </div>
  );
}

export default App;

