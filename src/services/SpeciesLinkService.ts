import axios from "axios";
import apiSpeciesLink from "./SpeciesLink";

export default class SpeciesLinkService {
  private basePath: string = "/search";
  private apiKey: string = 'VjSPRSjDJKAdk8ojl3PR';

  public async getCoordinates(scientificName: string): Promise<Array<any>> {
    console.log(process.env.SPECIES_LINK_KEY)
    const params = {
      apikey: this.apiKey,
      scientificName: scientificName,
    };

    try {
      const response = await apiSpeciesLink.get(`${this.basePath}`, { params });
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
    const params = {
      apikey: this.apiKey,
      scientificName: scientificName,
      country: "Brazil",
    };

    try {
      const response = await apiSpeciesLink.get(`${this.basePath}`, { params });
      return response.data.features ?? [];
    } catch (error) {
      console.error(`Erro: ${error}`);
      return [];
    }
  }
}
