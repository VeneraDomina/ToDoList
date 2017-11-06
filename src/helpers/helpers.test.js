import { getUniqueID } from './';

describe('getUniqueID:', () => {
    test('should be a function', () => {
        expect(typeof getUniqueID).toBe('function');
    });
    test('should return a string', () => {
        expect(typeof getUniqueID()).toBe('string');
    });
    test('should return a string of ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', () => {
        const result = getUniqueID(15);

        expect(result).toBe(result.match(/[A-Za-z0-9]+/)[0]);
    });
    test('should have correct length', () => {
        expect(getUniqueID(length).length).toBe(length);
    });
});
