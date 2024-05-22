import api from "./Service";

export default class FungiService {
  private basePath: string = "/fungi";

  public async getForHeatMap(): Promise<Array<any> | undefined> {
    try {
      let response: any = await api.get(`${this.basePath}/heatmap`);

      return response.data;
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }

  public async getAll(): Promise<Array<any> | undefined> {
    try {
      let response: any = await api.get(`${this.basePath}`);

      return response.data;
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }

  public async getForMushroomsList(taxonomy: string): Promise<any> {
    try {
      let response: any = await api.get(
        `${this.basePath}/taxonomy?taxonomy=${taxonomy}&page=${1}`
      );

      return response.data;
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }
}
