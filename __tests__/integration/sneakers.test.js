import request from '../helpers/request';
import data from '../../src/database/data.json';
describe('#Sneakers', () => {
  describe('/sneakers', () => {
    test('should return first 10 sneakers', () => {
      return request.get('/api/sneakers').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.data).toBeTruthy();
        const { count, sneakers } = res.body.data;
        expect(count > 0).toBeTruthy();
        expect(sneakers.length).toBe(10);
      });
    });
    test('should paginate', () => {
      return request.get('/api/sneakers?page=3').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.data?.sneakers?.length).toBe(10);
      });
    });

    test('should search by model|name|nickname', () => {
      return request.get('/api/sneakers?search=kanye').then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.data?.sneakers?.length > 0).toBeTruthy();
      });
    });
  });
  describe('/sneakers/:id', () => {
    let sneaker;
    beforeAll(() => {
      sneaker = data.results[0];
    });
    test('should return one sneaker', () => {
      return request.get(`/api/sneakers/${sneaker.id}`).then((res) => {
        expect(res.status).toBe(200);
        expect(Object.keys(res.body.sneaker)).toEqual(
          expect.arrayContaining([
            'id',
            'brand_name',
            'name',
            'nickname',
            'release_date',
            'size_range',
          ])
        );
        expect(res.body.sneaker.size_range.length > 1).toBeTruthy();
      });
    });

    test('should return not found on invalid or non existing id', () => {
      return request.get('/api/sneakers/kjdlkj').then((res) => {
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Record not found');
      });
    });
  });
});
