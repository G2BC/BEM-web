import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import BemSubtitle from "../../Classifications/BemSubtitle";
import HeatMapLayer from "../../HeatMap/HeatMapLayer"; // Importe o componente HeatMapLayer
import stateCoordinates from '../../../Utils/StateCoordinates';

const HomePage: React.FC = () => {
    const classificationFilter = (bemName: string) => {
        // Implemente a lógica de filtragem aqui
    };

    // Dados de amostra para o mapa de calor
    const [fungisHeatMap, setFungisHeatMap] = useState<[number, number, number][]>();

    useEffect(() => {
        // Simulação de dados para o mapa de calor
        const sampleData: { state: string, intensity: number }[] = [
            { state: 'AC', intensity: 10 },
            { state: 'AL', intensity: 20 },
            // Adicione mais dados aqui conforme necessário
        ];

        const formattedData = formatHeatData(sampleData);
        setFungisHeatMap(formattedData);
    }, []);

    // Formatar dados para o mapa de calor
    const formatHeatData = (data: { state: string, intensity: number }[]): [number, number, number][] => {
        return data.map(({ state, intensity }) => {
            const coords = stateCoordinates[state];
            return [coords[0], coords[1], intensity] as [number, number, number];
        });
    };

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            {/* Mapa */}
            <div style={{ flex: 1 }}>
                <MapContainer center={[-14.235004, -51.92528]} zoom={4} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Adicione a camada de mapa de calor */}
                    {fungisHeatMap && <HeatMapLayer data={fungisHeatMap} />}
                </MapContainer>
            </div>
            
            {/* Tabela de Classificação */}
            <div style={{ width: '320px', backgroundColor: '#fff', zIndex: 1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', overflowY: 'auto' }}>
                <BemSubtitle filter={classificationFilter} />
            </div>
        </div>
    );
};

export default HomePage;
