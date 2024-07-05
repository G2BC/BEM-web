import axios, { AxiosInstance } from "axios";

const apiSpeciesLink: AxiosInstance = axios.create({
  baseURL: 'https://specieslink.net/ws/1.0',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default apiSpeciesLink;
