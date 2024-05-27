import api from "./Service";

export default class FungiService {
  private basePath: string = "/fungi";

  public async getForHeatMap(): Promise<any | undefined> {
    try {

      let response: any = await api.get(`${this.basePath}/heatmap`);

      return response.data;
    } catch (error) {
      console.log('Error', (error as Error).message);
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

  public async getForMushroomsList(
    taxonomy: string,
    stateAc?: string,
    bem?: number,
    biome?: string
  ): Promise<any> {
    try {
      let params = `taxonomy?taxonomy=${taxonomy}&stateAc${stateAc}&biome=${biome}&page=${1}`;
      if (bem) params += `&bem${bem}`;
      let response: any = await api.get(`${this.basePath}/${params}`);

      return response.data;
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }
}
