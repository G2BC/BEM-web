import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";

const HomePage: React.FC = () => {
    const fungiService: FungiService = new FungiService();
    const [fungisHeatMap, setFungisHeatMap] = useState<any>();

    useEffect(() => {
        getFungisForMap();
    }, [])

    const getFungisForMap = async () => {
        let data = await fungiService.getForHeatMap();
        if (data) {
            data = Object.keys(data).map((stateAc) => {

                return { state: stateAc, intensity: data[stateAc].occurrences_count }
            })
            setFungisHeatMap(data);

        }
    };

    return (
        <div>
            <h1>Mapa de calor</h1>
            
        </div>
    )
}

export default HomePage;