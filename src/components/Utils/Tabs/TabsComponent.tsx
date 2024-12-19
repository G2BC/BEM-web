import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import MushroomProps from "../../../Interfaces/mushroom";

const orange = {
  50: "#FFF3E0",
  200: "#FFCC80",
  300: "#FFB74D",
  400: "#FFA726",
  100: "#FFE0B2",
  900: "#E65100",
  350: "#e3ae97",
};

const grey = {
  200: "#DAE2ED",
  300: "#C7D0DD",
  700: "#434D5B",
  100: "#F3F6F9",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #000;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 25px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${orange[100]};
  }

  &:focus {
    color: #000;
  }

  &.${tabClasses.selected} {
    background-color: ${orange[350]};
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 97%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: #fff;
  border: 1px solid ${grey[300]};
  border-radius: 12px;
  opacity: 0.9;
`;

const TabsList = styled(BaseTabsList)`
  min-width: 400px;
  border-radius: 12px;
  border: 1px solid ${orange[300]};
  margin-bottom: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

interface TabsComponentProps {
  mushroom: MushroomProps;
}

export default function TabsComponent(props: TabsComponentProps) {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Sobre</Tab>
        <Tab value={1}>Taxonomia</Tab>
        <Tab value={2}> Outras Informações</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div style={{ textAlign: 'justify' }}>
        {props.mushroom.description || 'Em breve traremos uma descrição sobre este cogumelo.'}
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <div style={{ textAlign: "left" }}>
          <p style={{ marginLeft: "6rem" }}>↳ Reino: {props.mushroom.kingdom}</p>
          <p style={{ marginLeft: "8rem" }}>↳ Filo: {props.mushroom.phylum}</p>
          <p style={{ marginLeft: "10rem" }}>↳ Classe: {props.mushroom.class}</p>
          <p style={{ marginLeft: "12rem" }}>↳ Ordem: {props.mushroom.order}</p>
          <p style={{ marginLeft: "14rem" }}>↳ Família: {props.mushroom.family}</p>
          <p style={{ marginLeft: "16rem" }}>↳ Gênero: <i>{props.mushroom.genus}</i></p>
          <p style={{ marginLeft: "18rem" }}>↳ Espécie: <i>{props.mushroom.specie}</i>
          </p>
        </div>
      </TabPanel>
      <TabPanel value={2}>
      <div style={{ textAlign: "left" }}>
        <p style={{ marginLeft: "8rem" }}><b>Morfotipo:</b> Baseado no livro</p>
        <p style={{ marginLeft: "8rem" }}><b>Classificação:</b> Bem {props.mushroom.bem} </p>
        <p style={{ marginLeft: "8rem" }}><b>Ocorrências:</b> Quantidade de ocorrências </p>
        <p style={{ marginLeft: "8rem" }}><b>Habitat:</b> Bioma</p>
        <p style={{ marginLeft: "8rem" }}><b>Sabor:</b> Inserir...</p>
        <p style={{ marginLeft: "8rem" }}><b>Palavras-chaves:</b> Definir as palavras chave</p>
        <p style={{ marginLeft: "8rem" }}><b>Parecido com:</b> Definir com o que é parecido</p>
      </div>
      </TabPanel>

    </Tabs>
  );
}
