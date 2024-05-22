import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import HeatMap from "../../HeatMap/HeatMap";
import BemSubtitle from "../../Classifications/BemSubtitle";
import { Grid } from "@mui/material";

const HomePage: React.FC = () => {
    const fungiService: FungiService = new FungiService();
    const [fungisHeatMap, setFungisHeatMap] = useState<{ state: string, intensity: number }[]>();
    const [fungisOccurrencesCount, setFungisOccurrencesCount] = useState<any>();

    useEffect(() => {
        getFungisForMap();
    }, [])

    const getFungisForMap = async () => {
        let data = await fungiService.getForHeatMap();
        if (data) {
            setFungisOccurrencesCount(data);

            data = Object.keys(data).map((stateAc) => {

                return { state: stateAc, intensity: data[stateAc].occurrences_count }
            })
            setFungisHeatMap(data);

        }
    };

    const classificationFilter = (bemName: string) => {
        if (fungisOccurrencesCount) {

            let filteredKeys = Object.keys(fungisOccurrencesCount).filter((stateAc: string) => {
                return fungisOccurrencesCount[stateAc].classifications_count[bemName] > 0;
            })

            return filteredKeys.map((key) => {

                return { state: key, intensity: fungisOccurrencesCount[key].classifications_count[bemName] }
            })

        }
    }

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
                            <BemSubtitle filter={classificationFilter}/>
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