import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FungiService from './services/FungiService';

const App: React.FC = () => {
  const fungiService: FungiService = new FungiService();
  const [fungisHeatMap, setFungisHeatMap] = useState<any>([]);

  const fungiForMap = async () => {
    let data = await fungiService.getForHeatMap();
    console.log(data);

    return data;

  };

  useEffect(() => {
    setFungisHeatMap(fungiForMap);
  }, [])

  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;

