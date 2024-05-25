import axios from "axios";

export default class INaturalistService {
  private basePath: string = "https://api.inaturalist.org/v1";

  public async getMushroomsPicture(taxonId: number): Promise<string | null> {
    const url = `${this.basePath}/observations`;
    const params = {
      taxon_id: taxonId,
      per_page: 1,
      photos: "true",
    };

    try {
      const response = await axios.get(url, { params });
      if (!response.data.results) return null;
      const observation = response.data.results[0];
      return observation.taxon.default_photo.medium_url;
    } catch (error) {
      console.error(`Erro: ${error}`);
      return null;
    }
  }

  public async getAllMushroomsPictures(
    taxonId: number
  ): Promise<Array<any> | null> {
    const url = `${this.basePath}/observations`;
    const params = {
      taxon_id: taxonId,
      photos: "true",
    };

    try {
      const response = await axios.get(url, { params });
      if (!response.data.results) return null;
      const observations = response.data.results;
      return observations.map((obs: any) => obs.taxon.default_photo.medium_url);
    } catch (error) {
      console.error(`Erro: ${error}`);
      return null;
    }
  }
}
