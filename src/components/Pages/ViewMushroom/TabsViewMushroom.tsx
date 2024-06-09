import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import INaturalistCard from './INaturalistCard';
import SpeciesLinkCard from './SpeciesLinkCard';
import LiteraturaCardList from './LiteraturaCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3ae97', // Cor laranja
    },
  },
});

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
          centered
        >
          <Tab value="one" label="INaturalist" />
          <Tab value="two" label="SpeciesLink" />
          <Tab value="three" label="Literatura" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {value === 'one' && <INaturalistCard />}
          {value === 'two' && <SpeciesLinkCard />}
          {value === 'three' && <LiteraturaCardList />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
