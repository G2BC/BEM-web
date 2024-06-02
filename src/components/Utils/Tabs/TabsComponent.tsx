import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

export default function TabsComponent() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Sobre</Tab>
        <Tab value={1}>Taxonomia</Tab>
      </TabsList>
      <TabPanel value={0}>
        Laetiporus sulphureus foi descrito pela primeira vez como Boletus sulphureus pelo micologista francês Pierre Bulliard em 1789. Ele teve muitos sinônimos e finalmente recebeu seu nome atual em 1920 pelo micologista americano William Murrill. Laetiporus significa "com poros brilhantes" e sulphureus significa a cor do enxofre.
        <br/><br/>
        Investigações na América do Norte mostraram que existem várias espécies semelhantes dentro do que foi considerado L. sulphureus, e que o verdadeiro L. sulphureus pode estar restrito a regiões a leste das Montanhas Rochosas. As análises filogenéticas de sequências de ITS, subunidades nucleares grandes e subunidades pequenas mitocondriais de rDNA de coleções norte-americanas delinearam cinco clados distintos no clado central de Laetiporus.
      </TabPanel>
      <TabPanel value={1}>Informações de taxonomia do cogumelo.</TabPanel>
    </Tabs>
  );
}

const white = {
  50: '#FFFFFF',
  100: '#F0F0F0',
  200: '#D9D9D9',
  300: '#BFBFBF',
  400: '#A6A6A6',
  500: '#8C8C8C',
  600: '#737373',
  700: '#595959',
  800: '#404040',
  900: '#262626',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #000;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${white[300]};
  }

  &:focus {
    color: #000;
    outline: 3px solid ${white[200]};
  }

  &.${tabClasses.selected} {
    background-color: ${white[50]};
    color: ${white[700]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 97%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${grey[100]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.9;
  `,
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${grey[50]};
  border-radius: 12px;
  border: 1px solid ${grey[300]};
  margin-bottom: 16px;
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);
