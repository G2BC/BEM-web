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

  public async getAllMushroomsPictures(taxonId: number): Promise<string[]> {
    try {
      const response = await axios.get(`${this.basePath}/taxa/${taxonId}`);
      const photos = response.data.results[0]?.taxon_photos || [];

      // Extrai as URLs das fotos
      return photos.map((photo: any) => photo.photo.medium_url || photo.photo.url);
    } catch (error) {
      console.error("Erro ao buscar imagens do iNaturalist:", error);
      return [];
    }
  }


  public async getMushroomOccurrences(taxonId: number): Promise<Array<any>> {
    const url = `${this.basePath}/observations`;
    const params = {
      taxon_id: taxonId,
      place_id: 6878,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.results ?? [];
    } catch (error) {
      console.error(`Erro: ${error}`);
      return [];
    }
  }
}
