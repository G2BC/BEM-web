import './App.css';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import ListMushroomsPage from './components/Pages/ListMushrooms/ListMushroomsPage';
import ViewMushroomPage from './components/Pages/ViewMushroom/ViewMushroomPage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import Collaborators from './components/Pages/ListofCollaborators/Collaborators';

const Layout: React.FC = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname === '/collaborators' || location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/list' Component={ListMushroomsPage} />
        <Route path='/mushroom/:uuid' Component={ViewMushroomPage} />
        <Route path='/collaborators' Component={Collaborators} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage} />
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
