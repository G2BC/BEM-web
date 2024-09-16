import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import { Grid } from "@mui/material";
import BemSubtitle from "../../Classifications/BemSubtitle";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import stateCoordinates from "../../../Utils/StateCoordinates";
import HeatMapLayer from "../../HeatMap/HeatMapLayer";

const HomePage: React.FC = () => {
  const fungiService: FungiService = new FungiService();
  const [fungisHeatMap, setFungisHeatMap] =
    useState<[number, number, number][]>();
  const [fungisOccurrencesCount, setFungisOccurrencesCount] = useState<any>();

  useEffect(() => {
    getFungisForMap();
  }, []);

  const getFungisForMap = async () => {
    let data = await fungiService.getForHeatMap();
    if (data) {
      setFungisOccurrencesCount(data);

      data = Object.keys(data).map((stateAc) => {
        return { state: stateAc, intensity: data[stateAc].occurrences_count };
      });

      setFungisHeatMap(formatHeatData(data));
    }
  };

  const classificationFilter = (bemName: string) => {
    if (fungisOccurrencesCount) {
      let filteredKeys = Object.keys(fungisOccurrencesCount).filter(
        (stateAc: string) => {
          return (
            fungisOccurrencesCount[stateAc].classifications_count[bemName] > 0
          );
        }
      );

      let filteredMushrooms = filteredKeys.map((key) => {
        return {
          state: key,
          intensity: fungisOccurrencesCount[key].classifications_count[bemName],
        };
      });

      setFungisHeatMap(formatHeatData(filteredMushrooms));
    }
  };

  const formatHeatData = (
    data: { state: string; intensity: number }[]
  ): [number, number, number][] => {
    return data.map(({ state, intensity }) => {

      let coords = stateCoordinates[state];

      return [coords[0], coords[1], intensity] as [number, number, number];
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {fungisHeatMap != undefined ? (
        <>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >

            <Grid
              item
              xs={2}
              marginBottom={7}
              style={{
                width: "320px",
                backgroundColor: "#fff",
                zIndex: 1,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <BemSubtitle filter={classificationFilter} />
            </Grid>
            <Grid item xs={10} marginBottom={5} style={{ flex: 1 }}>
              <MapContainer
                center={[-14.235004, -51.92528]}
                zoom={4}
                id="heatmap"
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <HeatMapLayer data={fungisHeatMap} />
              </MapContainer>
            </Grid>
          </Grid>
        </>
      ) : (
          <></>
        )}
    </div>
  );
};

export default HomePage;
