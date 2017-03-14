/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const multiply = (a, b) => { /* implement me */ };
const customRound = (value, places) => { /* implement me */ };
const roundForTwo = (val) => { /* implement me */ };
const getAreaForCircle = (radius) => { /* implement me */ };
const getRoundedCircleArea5 = (radius, roundFn = roundForTwo) => { /* implement me */ };

describe('First spec', () => {
  describe('multiply', () => {
    it('should return the product of two passed arguments', () => {
      const actual = multiply(2, 2); // don't change this line
      const expected = 4; // don't change this line

      expect(actual).toEqual(expected);
    });

    it('should return the product of 1 passed argument', () => {
      const actual = multiply(3); // don't change this line
      const expected = 4; // don't change this line

      expect(actual).toEqual(expected);
    });
  });

  describe('adjustDecimals', () => {
    it('should round the value for given decimal places', () => {
      const actual = customRound(3.1415926536, 2); // don't change this line
      const expected = 3.14;  // don't change this line

      expect(actual).toEqual(expected);
    });
  });

  describe('getAreaForCircle', () => {
    it('should return area for passed radius', () => {
      const actual = getCircleArea(5); // don't change this line
      const expected = 78.53981633974483; // don't change this line

      expect(actual).toEqual(expected);
    });

    it('should return area for passed radius and roundDecimals function', () => {
      const roundForTwoDecimals = value => customRound(value, 4);
      const actual = getRoundedCircleArea(5, roundForTwoDecimals); // don't change this line
      const expected = 78.5398; // don't change this line

      expect(actual).toEqual(expected);
    });
  });
});
