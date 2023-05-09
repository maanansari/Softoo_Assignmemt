const BASE_URL = 'https://my-json-server.typicode.com/benirvingplt'

export class AppService {
  public async getProducts(endPoint: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = BASE_URL + endPoint;
        const response = await fetch(url);
        resolve(response.json());
      } catch (error) {
        reject(error);
      }
    });
  }
}
