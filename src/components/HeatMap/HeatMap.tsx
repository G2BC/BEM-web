import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.heat'; // Certifique-se de que este import funciona após a declaração do módulo.
import stateCoordinates from '../../Utils/StateCoordinates';


interface HeatMapProps {
    data: { state: string, intensity: number }[];
}

const HeatMap: React.FC<HeatMapProps> = ({ data }) => {
    useEffect(() => {
        const map = L.map('heatmap').setView([-14.235004, -51.92528], 4); // Coordenadas aproximadas do centro do Brasil
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        const heatData = data.map(({ state, intensity }) => {
            const coords = stateCoordinates[state];
            return [coords[0], coords[1], intensity] as [number, number, number];
        });

        // @ts-ignore
        L.heatLayer(heatData, {
            radius: 35,     // Aumenta o raio dos pontos
            blur: 15,       // Reduz o desfoque para uma marcação mais nítida
            max: 1.0,       // Define a intensidade máxima
            minOpacity: 0.5, // Aumenta a opacidade mínima para tornar as áreas de baixa intensidade mais visíveis
            gradient: {     // Define um gradiente de cores personalizado
                0.4: 'blue',
                0.6: 'lime',
                0.8: 'red'
            }
        }).addTo(map);
    }, [data]);

    return <div id="heatmap" style={{ height: '100%', width: '100%' }}></div>;
};

export default HeatMap;