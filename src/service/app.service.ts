import {BASE_URL} from '@env';
export class AppService {
  public async getProducts(endPoints: string): Promise<any> {
    const response = await fetch(BASE_URL + endPoints);
    return await response.json();
  }
}
