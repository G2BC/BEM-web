import axios from "axios";

export default class SpeciesLinkService {
  private basePath: string = "https://specieslink.net/ws/1.0";

  public async get(scientificName: string): Promise<any | null> {
    const url = `${this.basePath}/search`;
    const params = {
      scientificName: scientificName,
    };

    try {
      const response = await axios.get(url, { params });
      if (!response.data.features.properties) return null;

      return response.data.features.properties;
    } catch (error) {
      console.error(`Erro: ${error}`);
      return null;
    }
  }
}
