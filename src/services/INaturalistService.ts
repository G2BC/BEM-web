import api from "./Service";

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
      const response = await api.get(url, { params });
      const observations = response.data.results;

      for (const observation of observations) {
        if (observation.photos && observation.photos.length > 0) {
          return observation.photos[0].url;
        }
      }

      return null;
    } catch (error) {
      console.error(`Erro: ${error}`);
      return null;
    }
  }
}
