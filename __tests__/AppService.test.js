import {AppService} from '../src/service/app.service';

global.fetch = jest.fn();

describe('AppService', () => {
  const appService = new AppService();

  describe('getUser', () => {
    it('should return user data from API', async () => {
      // Arrange
      const endPoints = '/users/1';
      const expectedUserData = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      };
      // Mock the fetch method to return expected user data
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(expectedUserData),
      });

      // Act
      const userData = await appService.getProducts(endPoints);

      // Assert
      expect(userData).toEqual(expectedUserData);
    });

    it('should handle errors from API', async () => {
      // Arrange
      const endPoints = '/users/1';
      const expectedError = new Error('Something went wrong');
      // // Mock the fetch method to throw an error
      global.fetch = jest.fn().mockRejectedValue(expectedError);
      //   // Act and Assert
      await expect(appService.getProducts(endPoints)).rejects.toThrow(expectedError);
    });
  });
});
