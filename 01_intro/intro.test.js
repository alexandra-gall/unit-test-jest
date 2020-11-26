const { sum, nativeNull } = require('./intro');

describe('Sum function', () => {
  test('should return sum of two values ', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).toEqual(3);
  });

  test('should return a value that compares correctly with other values', () => {
    expect(sum(1, 2)).toBeGreaterThan(2);
    expect(sum(1, 2)).toBeGreaterThanOrEqual(3);
    expect(sum(1, 2)).toBeLessThan(10);
    expect(sum(1, 2)).toBeLessThanOrEqual(3);
  });

  test('should add two float values correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('Native null function', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
