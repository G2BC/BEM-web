import MushroomProps from "../Interfaces/mushroom";
import api from "./Service";

interface MushroomPaginatedProps {
  last_page: number;
  mushrooms: Array<MushroomProps>;
}

export default class FungiService {
  private basePath: string = "/fungi";

  public async getForHeatMap(): Promise<any | undefined> {
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

  public async getForMushroomsList(
    taxonomy: string,
    stateAc?: string,
    bem?: number,
    biome?: string,
    page?: number
  ): Promise<MushroomPaginatedProps | undefined> {
    try {
      let params = `taxonomy?taxonomy=${taxonomy}&stateAc${stateAc}&biome=${biome}&page=${
        page ?? 1
      }`;
      if (bem) params += `&bem${bem}`;
      let response: any = await api.get(`${this.basePath}/${params}`);

      return {
        last_page: response.data.last_page,
        mushrooms: response.data.data,
      };
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }

  public async getByUuid(uuid: string): Promise<MushroomProps | undefined> {
    try {
      let response: any = await api.get(`${this.basePath}/mushroom/${uuid}`);

      return response.data;
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }
}
