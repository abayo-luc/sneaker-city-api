import request from '../helpers/request';

describe('# Base Endpoints ', () => {
  describe('/*', () => {
    test('should return not found error', () => {
      return request.get('/').then((res) => {
        expect(res.status).toBe(404);
      });
    });
    test('should return not found for random url', () => {
      return request.get('/kjlkjd').then((res) => {
        expect(res.status).toBe(404);
      });
    });
    test('should return welcome message', () => {
      return request.get('/api').then((res) => {
        expect(res.status).toBe(404);
      });
    });
  });
});
