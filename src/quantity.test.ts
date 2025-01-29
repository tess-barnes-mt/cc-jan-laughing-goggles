import { FOOT, FURLONG, INCH, MILE, YARD } from "./length";
import { Quantity } from "./quantity";
import { CUP, GALLON, OUNCE, PINT, TABLESPOON, TEASPOON } from "./volume";

describe("quantity", () => {
  describe("equals", () => {
    it("1 teaspoon = 1 teaspoon", () => {
      expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(
        true
      );
    });

    it("1 teaspoon does not equal 0 teaspoons", () => {
      expect(new Quantity(1, TEASPOON).equals(new Quantity(0, TEASPOON))).toBe(
        false
      );
    });

    it("1 tablespoon equals 3 teaspoons", () => {
      expect(
        new Quantity(1, TABLESPOON).equals(new Quantity(3, TEASPOON))
      ).toBe(true);
    });

    it("1 ounce equals 2 tablespoons", () => {
      expect(new Quantity(1, OUNCE).equals(new Quantity(2, TABLESPOON))).toBe(
        true
      );
    });

    it("1 ounce equals 6 teaspoons", () => {
      expect(new Quantity(1, OUNCE).equals(new Quantity(6, TEASPOON))).toBe(
        true
      );
    });

    it("1 ounce does not equal 5 teaspoons", () => {
      expect(new Quantity(1, OUNCE).equals(new Quantity(5, TEASPOON))).toBe(
        false
      );
    });

    it("2 cups is equal to 2 cups", () => {
      expect(new Quantity(2, CUP).equals(new Quantity(2, CUP))).toBe(true);
    });
  });

  describe("add", () => {
    it("1 teaspoon + 0 teaspoons = 1 teaspoon", () => {
      expect(new Quantity(1, TEASPOON).add(new Quantity(0, TEASPOON))).toEqual(
        new Quantity(1, TEASPOON)
      );
    });

    it("1 teaspoon + 1 teaspoon = 2 teaspoons", () => {
      expect(new Quantity(1, TEASPOON).add(new Quantity(1, TEASPOON))).toEqual(
        new Quantity(2, TEASPOON)
      );
    });

    it("1 teaspoon + 1 tablespoon = 4 teaspoons", () => {
      expect(
        new Quantity(1, TEASPOON).add(new Quantity(1, TABLESPOON))
      ).toEqual(new Quantity(4, TEASPOON));
    });

    it("1 tablespoon + 1 ounce = 3 tablespoons", () => {
      expect(new Quantity(1, TABLESPOON).add(new Quantity(1, OUNCE))).toEqual(
        new Quantity(3, TABLESPOON)
      );
    });

    it("1 ounce + 1 ounce = 12 teaspoons", () => {
      expect(
        new Quantity(1, OUNCE).add(new Quantity(1, OUNCE), TEASPOON)
      ).toEqual(new Quantity(12, TEASPOON));
    });

    it("1 gallon + 1 gallon = 16 pints", () => {
      expect(
        new Quantity(1, GALLON).add(new Quantity(1, GALLON), PINT)
      ).toEqual(new Quantity(16, PINT));
    });
  });

  describe("length", () => {
    it("1 inch is 1 inch", () => {
      expect(new Quantity(1, INCH).equals(new Quantity(1, INCH))).toBe(true);
    });

    it("1 foot is 12 inches", () => {
      expect(new Quantity(1, FOOT).equals(new Quantity(12, INCH))).toBe(true);
    });

    it("1 yard is 3 feet", () => {
      expect(new Quantity(1, YARD).equals(new Quantity(3, FOOT))).toBe(true);
    });

    it("1 furlong is 220 yards", () => {
      expect(new Quantity(1, FURLONG).equals(new Quantity(220, YARD))).toBe(
        true
      );
    });

    it("1 mile is 8 furlongs", () => {
      expect(new Quantity(1, MILE).equals(new Quantity(8, FURLONG))).toBe(true);
    });

    it("1 mile + 1 mile = 3520 yards", () => {
      expect(new Quantity(1, MILE).add(new Quantity(1, MILE), YARD)).toEqual(
        new Quantity(3520, YARD)
      );
    });
  });

  describe("incompatible units", () => {
    describe("equals", () => {
      it("errors when incompatible unit types are provided", () => {
        expect(() =>
          new Quantity(1, TEASPOON).equals(new Quantity(1, MILE))
        ).toThrow();
      });
    });

    describe("add", () => {
      it("errors when incompatible unit types are provided", () => {
        expect(() =>
          new Quantity(1, TEASPOON).add(new Quantity(1, MILE))
        ).toThrow();
      });
    });
  });

  describe("temperature", () => {});
});
