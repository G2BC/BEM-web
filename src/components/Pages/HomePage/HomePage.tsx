import { useEffect, useState } from "react";
import FungiService from "../../../services/FungiService";
import { Grid } from "@mui/material";
import BemSubtitle from "../../Classifications/BemSubtitle";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import stateCoordinates from "../../../Utils/StateCoordinates";
import HeatMapLayer from "../../HeatMap/HeatMapLayer";
import background from "../../../assets/background.png";

const HomePage: React.FC = () => {
  const fungiService: FungiService = new FungiService();
  const [fungisHeatMap, setFungisHeatMap] =
    useState<[number, number, number][]>();
  const [fungisOccurrencesCount, setFungisOccurrencesCount] = useState<any>();

  const [showBackground, setShowBackground] = useState(true);

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
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Imagem inicial */}
      {showBackground && (
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "opacity 0.5s ease",
            opacity: showBackground ? 1 : 0,
          }}
          onClick={() => setShowBackground(false)}
        >
          <h1
            style={{
              color: "white",
              fontSize: "2rem",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.1)", 
              padding: "20px",
              borderRadius: "10px",
              animation: "pulse 5s infinite", 
              cursor: "pointer", 
            }}
          >
            Seja bem-vindo ao universo dos cogumelos <br />
            comestíveis do Brasil (Projeto BEM)<br />
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            Clique para acessar o mapa<br/> de distribuição das espécies
            </span>
          </h1>

          <style>
            {`
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
}
`}
          </style>

        </div>
      )}

      {!showBackground && (
        <div
          id="main-content"
          style={{
            display: "flex",
            height: "100vh",
          }}
        >
          {fungisHeatMap != undefined ? (
            <Grid container style={{ height: "100%" }}>
              {/* Sidebar */}
              <Grid
                item
                xs={12}
                md={3.1}
                style={{
                  backgroundColor: "#fff",
                  zIndex: 1,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                }}
              >
                <BemSubtitle filter={classificationFilter} />
              </Grid>

              <Grid
                item
                xs={12}
                md={8.9}
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MapContainer
                  center={[-14.235004, -51.92528]}
                  zoom={4}
                  id="heatmap"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <HeatMapLayer data={fungisHeatMap} />
                </MapContainer>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
