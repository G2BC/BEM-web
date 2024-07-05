import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.heat';


interface HeatMapLayerProps {
    data: [number, number, number][]
}

const HeatMapLayer: React.FC<HeatMapLayerProps> = ({ data }) => {
    const map = useMap();

    useEffect(() => {
        // @ts-ignore
        const heatLayer = L.heatLayer(data, {
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

        return () => {
            map.removeLayer(heatLayer);
        };
    }, [data, map])

    return null;
};

export default HeatMapLayer;