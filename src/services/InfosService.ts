import SubMenuProps from "../Interfaces/submenu";
import api from "./Service";

export default class InfosService {
  private basePath: string = "/infos";

  public async getSubMenu(): Promise<SubMenuProps | undefined> {
    try {
      let response: any = await api.get(`${this.basePath}/sub_menu`);

      return response.data;
    } catch (error) {
      console.log("Error", (error as Error).message);
    }
  }
}
