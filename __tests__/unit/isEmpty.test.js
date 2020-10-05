import { isEmpty } from '../../src/helpers';

describe('#isEmpty', () => {
  describe('#positve cases', () => {
    test('should return true on null value', () => {
      expect(isEmpty(null)).toBeTruthy();
    });
    test('should return true on undefined value', () => {
      expect(isEmpty(undefined)).toBeTruthy();
    });
    test('should return true on empty string', () => {
      expect(isEmpty('')).toBeTruthy();
    });

    test('should return true on empty object', () => {
      expect(isEmpty([])).toBeTruthy();
      expect(isEmpty({})).toBeTruthy();
    });
  });
  describe('#negative cases', () => {
    test('should return false on non empty value', () => {
      expect(isEmpty('hello')).toBeFalsy();
      expect(isEmpty(['hello'])).toBeFalsy();
      expect(isEmpty({ message: 'hello' })).toBeFalsy();
    });
  });
});
