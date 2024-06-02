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

const Layout: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/list' Component={ListMushroomsPage} />
        <Route path='/mushroom/:uuid' Component={ViewMushroomPage} />
        <Route path='/login' Component={LoginPage} />
      </Routes>
      {!isLoginPage && <Footer />}
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
