import axios from "axios";

export default class SpeciesLinkService {
  private basePath: string = "https://specieslink.net/ws/1.0";
  private apiKey: string = process.env.SPECIES_LINK_KEY ?? "";

  public async getCoordinates(scientificName: string): Promise<Array<any>> {
    const url = `${this.basePath}/search`;
    const params = {
      apikey: this.apiKey,
      scientificName: scientificName,
    };

    try {
      const response = await axios.get(url, { params });
      if (!response.data.features) return [];

      return response.data.features.map((feature: any) => ({
        long: feature.geometry.coordinates[0],
        lat: feature.geometry.coordinates[1],
      }));
    } catch (error) {
      console.error(`Erro: ${error}`);
      return [];
    }
  }

  public async getOccurrences(scientificName: string): Promise<Array<any>> {
    const url = `${this.basePath}/search`;
    const params = {
      apikey: this.apiKey,
      scientificName: scientificName,
      country: "Brazil",
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.features ?? [];
    } catch (error) {
      console.error(`Erro: ${error}`);
      return [];
    }
  }
}
