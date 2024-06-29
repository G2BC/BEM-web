import './App.css';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import ListMushroomsPage from './components/Pages/ListMushrooms/ListMushroomsPage';
import ViewMushroomPage from './components/Pages/ViewMushroom/ViewMushroomPage';
import Collaborators from './components/Pages/ListofCollaborators/Collaborators';
import EspecialistRegister from './components/Pages/EspecialistRegister/EspecialistRegister';

const Layout: React.FC = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/especialistregister';

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/list' Component={ListMushroomsPage} />
        <Route path='/mushroom/:uuid' Component={ViewMushroomPage} />
        <Route path='/listofcollaborators' Component={Collaborators} />
        <Route path='/especialistregister' Component={EspecialistRegister} />
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
