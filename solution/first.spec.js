/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const multiply = (a, b = a) => a * b;
const customRound = (value, places) => +(value.toFixed(places));
const roundForTwo = (val) => value => customRound(value, 2);
const getAreaForCircle = (radius) => multiply(Math.PI, multiply(radius));

describe('First spec', () => {
  describe('multiply', () => {
    it('should return the product of two passed arguments', () => {
      const actual = multiply(2, 2); // don't change this line
      const expected = 4; // don't change this line

      expect(actual).toEqual(expected);
    });

    it('should return the product of 1 passed argument', () => {
      const actual = multiply(3); // don't change this line
      const expected = 9; // don't change this line

      expect(actual).toEqual(expected);
    });
  });

  describe('customRound', () => {
    it('should round the value for given decimal places', () => {
      const actual = customRound(3.1415926536, 2); // don't change this line
      const expected = 3.14;  // don't change this line

      expect(actual).toEqual(expected);
    });
  });

  describe('getAreaForCircle', () => {
    it('should return area for passed radius', () => {
      const actual = getAreaForCircle(5); // don't change this line
      const expected = 78.53981633974483; // don't change this line

      expect(actual).toEqual(expected);
    });

    it('should return area for passed radius and roundDecimals function', () => {
      const roundForDecimals = value => customRound(value, 4);
      const actual = roundForDecimals(getAreaForCircle(5));
      const expected = 78.5398; // don't change this line

      expect(actual).toEqual(expected);
    });
  });
});
