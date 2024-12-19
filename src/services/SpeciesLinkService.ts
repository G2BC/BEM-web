import apiSpeciesLink from "./SpeciesLink";

export default class SpeciesLinkService {
  private basePath: string = "/search";
  private apiKey: string = "VjSPRSjDJKAdk8ojl3PR";

  public async getOccurrences(params: Record<string, string | number>): Promise<Array<any>> {
    try {
      const response = await apiSpeciesLink.get(`${this.basePath}`, { params: { ...params, apikey: this.apiKey } });
      return response.data?.records ?? [];
    } catch (error) {
      console.error("Erro ao buscar ocorrências:", error);
      return [];
    }
  }
}
