import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FungiService from './services/FungiService';
import HomePage from './components/Pages/HomePage/HomePage';
import ListMushroomsPage from './components/Pages/ListMushrooms/ListMushroomsPage';
import ViewMushroomPage from './components/Pages/ViewMushroom/ViewMushroomPage';
import Collaborators from './components/Pages/ListofCollaborators/Collaborators';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' Component={HomePage}>
          </Route>
          <Route path='/list' Component={ListMushroomsPage}>
          </Route>
          <Route path='/mushroom/:uuid' Component={ViewMushroomPage}>
          </Route>
          <Route path='/listofcollaborators'Component={Collaborators}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

