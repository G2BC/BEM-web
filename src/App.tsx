import './App.css';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FungiService from './services/FungiService';
import HomePage from './components/Pages/HomePage/HomePage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';
import ListMushroomsPage from './components/Pages/ListMushrooms/ListMushroomsPage';
import ViewMushroomPage from './components/Pages/ViewMushroom/ViewMushroomPage';
import Collaborators from './components/Pages/ListItems/Collaborators';
import About from './components/Pages/ListItems/About';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Developers from './components/Pages/ListItems/Developers';
import LoginPage from './components/Pages/LoginPage/LoginPage';

const Layout: React.FC = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/list' Component={ListMushroomsPage} />
        <Route path='/mushroom/:uuid' Component={ViewMushroomPage} />
        <Route path='/collaborators' Component={Collaborators} />
        <Route path='/about' Component={About} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/dev' Component={Developers} />
      </Routes>
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
};
export default App;