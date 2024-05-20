import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import HeatMap from "../../HeatMap/HeatMap";
import BemSubtitle from "../../Classifications/BemSubtitle";
import { Grid } from "@mui/material";

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
            <h1>Mapa de Calor BEM</h1>
            {fungisHeatMap != undefined ?
                <>
                    <Grid container spacing={1} direction="row" justifyContent='center' alignItems='stretch'>
                        <Grid item xs={10}>
                            <HeatMap data={fungisHeatMap} />
                        </Grid>
                        <Grid item xs={2}>
                            <BemSubtitle />
                        </Grid>
                    </Grid>
                </>
                :
                <>
                </>
            }
        </div>
    )
}

export default HomePage;