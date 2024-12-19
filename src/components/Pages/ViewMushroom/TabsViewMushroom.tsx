import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import INaturalistCard from "./INaturalistCard";
import SpeciesLinkCardList from "./SpeciesLinkCard"; // Corrigido o nome
import LiteraturaCardList from "./LiteraturaCard";
import MushroomProps from "../../../Interfaces/mushroom";
import myIconInaturalist from "../../../assets/iconInaturalist.png";
import myIconSpeciesLink from "../../../assets/iconSpecieslink.png";
import myIconLiterature from "../../../assets/iconLiterature.png";
import { Typography } from "@mui/material";

interface TabsViewMushroomProps {
  mushroom: MushroomProps;
  iNaturalistOccurrences: Array<any>;
  speciesLinkOccurrences: Array<any>;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#e3ae97", // Cor laranja
    },
  },
});

export default function TabsViewMushroom(props: TabsViewMushroomProps) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
          centered
        >
          {/* Aba INaturalist com ícone */}
          <Tab
            value="one"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src={myIconInaturalist}
                  alt="INaturalist Icon"
                  style={{ width: 24, height: 24 }}
                />
                <Typography variant="body2">INaturalist</Typography>
              </Box>
            }
          />
          <Tab
            value="two"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src={myIconSpeciesLink}
                  alt="Species Link Icon"
                  style={{ width: 24, height: 24 }}
                />
                <Typography variant="body2">SpeciesLink</Typography>
              </Box>
            }
          />

          <Tab
            value="three"
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src={myIconLiterature}
                  alt="Literature Icon"
                  style={{ width: 24, height: 24 }}
                />
                <Typography variant="body2">Literatura</Typography>
              </Box>
            }
          />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {value === "one" && (
            <INaturalistCard
              mushroom={props.mushroom}
              occurrences={props.iNaturalistOccurrences}
            />
          )}
          {value === "two" && props.mushroom.scientific_name && (
          <SpeciesLinkCardList mushroom={props.mushroom}
          occurrences={props.speciesLinkOccurrences} />
          )}

          {value === "three" && (
            <LiteraturaCardList mushroom={props.mushroom} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
